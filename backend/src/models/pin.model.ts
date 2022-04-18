import mongoose from "mongoose";

const pinSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
        min: 3,
        max: 60,
      },
      desc: {
        type: String,
        required: true,
        min: 3,
      },
      rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
      },
      long: {
        type: Number,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  );

const PinModel=mongoose.model("Pin",pinSchema);

export default PinModel;