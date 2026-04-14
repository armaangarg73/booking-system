-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(255) UNIQUE NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password_hash VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE seats (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     is_booked BOOLEAN DEFAULT FALSE
-- );

-- CREATE TABLE bookings (
--     id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(id) ON DELETE CASCADE,
--     seat_id INT REFERENCES seats(id) ON DELETE CASCADE,
--     booked_at TIMESTAMP DEFAULT NOW(),
--     UNIQUE(user_id),
--     UNIQUE(seat_id)
-- );

-- INSERT INTO seats (is_booked)
-- SELECT FALSE FROM generate_series(1, 20);

-- SELECT * FROM seats;
SELECT id, username, email FROM users;


