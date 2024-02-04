import { Router } from "express";
import { createUserReview, getUserReviews } from "../controller/review.js";

const router = Router();

router.post("/", createUserReview);
router.get("/", getUserReviews);

export { router };
