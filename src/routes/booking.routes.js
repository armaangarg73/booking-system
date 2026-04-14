import express from "express";
import { myBookings, bookSeat } from "../controllers/booking.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = express.Router();
router.get("/me", requireAuth, myBookings);
router.put("/:id", requireAuth, bookSeat);

export default router ;
