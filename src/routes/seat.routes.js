import express from "express" ;
import { getSeats } from "../controllers/seat.controller.js";

const router = express.Router() ;
router.get("/" , getSeats);

export default router ;