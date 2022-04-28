import {Request, Response} from "express";
import {omit} from 'lodash'
import { CreatePin, DeletePin,getPinsByUserEmail} from "../service/pin.service";
import logger from "../utils/logger"

export async function createPinHandler(req:Request, res:Response){
    try{
        const pin= await CreatePin(req.body);
        return res.status(201).json({"message":"Pin created succesfully"});
    }catch(e: any){
        logger.error(e.message);
        return res.status(400).send(e.message);
    }
}

export async function deletePinHandler(req:Request, res:Response){
    try{
        console.log(req.body)
        const pin= await DeletePin(req.body);
        return res.status(201).json({"message":"Pin deleted succesfully"});
    }catch(e: any){
        logger.error(e.message);
        console.log(e)
        return res.status(404).send(e.message);
    }
}

export async function getPinByEmail(req:Request, res:Response){
    try{
        const pin= await getPinsByUserEmail(req.query.email);
        return res.status(201).json(pin);
    }catch(e: any){
        logger.error(e.message);
        return res.status(400).send(e.message);
    }
}