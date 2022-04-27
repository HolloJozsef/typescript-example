import {Request, Response, Express} from 'express';
import { createUserHandler,loginUser } from './controller/user.controller';
import { createPinHandler, deletePinHandler } from './controller/pin.controller';
import validate from "./middleware/validateResource"
import { createUserSchema } from './schema/user.schema';

function routes(app:Express){
    app.get("/healthcheck",(req:Request,res:Response)=>res.sendStatus(200))
    app.post("/api/pin", createPinHandler)
    app.delete("/api/pin", deletePinHandler)
    app.post("/auth/login", loginUser)
    app.post("/api/users",validate(createUserSchema), createUserHandler)

}
export default routes