import {DocumentDefinition} from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken'
import config from 'config';

export async function CreateUser(input:DocumentDefinition<Omit<UserDocument,'createdAt'|'updatedAt'|'comparePasswords'|'pins'>>) {
    try{
        return await UserModel.create(input);
    }catch(e:any){
        throw new Error(e);
    }
}

export async function LoginUser(input:DocumentDefinition<Omit<UserDocument,'createdAt'|'updatedAt'>>) {
    try{
        const {email,password}=input
        let user= await UserModel.findOne({email:email})
        if(!user)
            throw new Error("Invalid credentials")
        let isMatch=bcrypt.compare(password, user.password)
        if(!isMatch)
            throw new Error("Email or password invalid")
        const accessToken=await JWT.sign({email},config.get<string>('ACCESS_TOKEN_SECRET'))
        console.log(accessToken)
        return accessToken;
    }catch(e:any){
        throw new Error(e);
    }
}