import {DocumentDefinition} from "mongoose";
import PinModel from "../models/pin.model";

export async function CreatePin(input:any) {
    try{
        console.log(input)
        return await PinModel.create(input);
    }catch(e:any){
        throw new Error(e);
    }
}