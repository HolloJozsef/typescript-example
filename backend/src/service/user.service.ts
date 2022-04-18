import {DocumentDefinition} from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export async function CreateUser(input:DocumentDefinition<Omit<UserDocument,'createdAt'|'updatedAt'|'comparePasswords'>>) {
    try{
        return await UserModel.create(input);
    }catch(e:any){
        throw new Error(e);
    }
}