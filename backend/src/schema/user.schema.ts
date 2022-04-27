import { any, object, string, TypeOf } from "zod";
import PinModel from "../models/pin.model";

export const createUserSchema=object({
    body:object({
        name:string({
            required_error:'Name is required'
        }),
        password:string({
            required_error:'Password is required'
        }).min(6,'Password too short, should be 6 chars minimum'),
        passwordConfirmation:string({
            required_error:'passwordConfirmation is required'
        }),
        email:string({
            required_error:'Email is required'
        }).email('Not a valid email'),
        pins:any()
    }).refine((data)=>data.password===data.passwordConfirmation,{
        message:"Passwords do not match"
    })
})

export type CreateUserInput=Omit<TypeOf<typeof createUserSchema>,"body.passwordConfirmation">;