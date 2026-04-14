import { pool } from "../config/db.js";

export const bookSeat = async (req, res) => {
  const seatId = req.params.id;
  const userId = req.user.id;
  const name = req.user.username;

  const conn = await pool.connect();

  try {
    await conn.query("BEGIN");

    const seat = await conn.query(
      "SELECT * FROM seats WHERE id=$1 AND is_booked=false FOR UPDATE",
      [seatId],
    );

    if (seat.rowCount === 0) {
      await conn.query("ROLLBACK");
      return res.status(409).json({ error: "Seat already booked" });
    }

    const existing = await conn.query(
      "SELECT * FROM bookings WHERE user_id=$1",
      [userId],
    );

    if (existing.rowCount > 0) {
      await conn.query("ROLLBACK");
      return res.status(409).json({ error: "Already booked a seat" });
    }

    await conn.query("UPDATE seats SET is_booked=true, name=$2 WHERE id=$1", [
      seatId,
      name,
    ]);

    await conn.query("INSERT INTO bookings (user_id, seat_id) VALUES ($1,$2)", [
      userId,
      seatId,
    ]);

    await conn.query("COMMIT");

    res.json({ message: "Seat booked successfully" });
  } catch {
    await conn.query("ROLLBACK");
    res.status(500).json({ error: "Booking failed" });
  } finally {
    conn.release();
  }
};

export const myBookings = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT b.id, s.id as seat_id, b.booked_at
       FROM bookings b
       JOIN seats s ON b.seat_id = s.id
       WHERE b.user_id=$1`,
      [req.user.id],
    );

    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};
