import userReview from "../model/model.js";

export const createUserReview = async (req, res) => {
  const {
    punctuality,
    professionalism,
    others,
    driverName,
    dateOfEmployment,
    yourName,
    review,
  } = req.body;
  // request validation here

  try {
    const data = await userReview.create({
      punctuality: punctuality,
      professionalism: professionalism,
      others: others,
      driverName: driverName,
      dateOfEmployment: dateOfEmployment,
      yourName: yourName,
      review: review,
    });

    if (data) {
      res.status(201).json({
        message: "Review created",
      });
    } else {
      res.status(400).json({
        message: "Error creating review",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const getUserReviews = async (req, res) => {
  try {
    const data = await userReview.find();
    if (data) {
      res.status(200).json({
        message: "success",
        data: data,
      });
    } else {
      res.status(400).json({
        message: "Not data found",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
