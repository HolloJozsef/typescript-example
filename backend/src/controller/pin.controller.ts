import {Request, Response} from "express";
import {omit} from 'lodash'
import { CreatePin } from "../service/pin.service";
import logger from "../utils/logger"

export async function createPinHandler(req:Request, res:Response){
    try{
        const pin= await CreatePin(req.body);
        return res.status(201).json({"message":"Pin created succesfully"});
    }catch(e: any){
        logger.error(e);
        return res.status(400).send(e.message);
    }
}