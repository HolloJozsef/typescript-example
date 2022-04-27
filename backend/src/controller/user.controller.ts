import {Request, Response} from "express";
import {omit} from 'lodash'
import { CreateUser,LoginUser } from "../service/user.service";
import logger from "../utils/logger"
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(req:Request<{},{},CreateUserInput['body']>,res:Response){
    try{
        const user= await CreateUser(req.body);
        return res.send(omit(user.toJSON(),"password"));
    }catch(e: any){
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function loginUser(req:Request,res:Response){
    try{
        const token = await LoginUser(req.body);
        return res.status(200).send({token})
    }catch(err:any){
        logger.error(err)
        return res.status(401).send({error:err.message})
    }
}