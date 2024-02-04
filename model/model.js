import { model, Schema } from "mongoose";

export const userReviewSchema = new Schema({
  punctuality: {
    type: Number,
    required: true,
  },
  professionalism: {
    type: Number,
    required: true,
  },
  others: {
    type: Number,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },

  dateOfEmployment: {
    type: Date,
    required: true,
  },
  yourName: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

export default model("userReview", userReviewSchema);
