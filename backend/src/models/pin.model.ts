import mongoose from "mongoose";
import {Schema} from "mongoose"
import { UserDocument } from "./user.model";

export interface PinDocument extends mongoose.Document{
  title:string;
  desc:string;
  rating:number;
  long:number;
  lat:number;
  owner:UserDocument;
  createdAt:Date;
  updatedAt:Date;
}

const pinSchema = new mongoose.Schema(
    {
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
      owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
      }
    },
    { timestamps: true }
  );

const PinModel=mongoose.model("Pin",pinSchema);

export default PinModel;