import PinModel, { PinDocument } from "../models/pin.model";
import UserModel, { UserDocument } from "../models/user.model";

export async function CreatePin(input:any) {
    const pin=new PinModel(input);
    PinModel.create(pin).then((result:any)=>{        
        UserModel.findOne({_id:input.owner},(err:any,user:UserDocument)=>{
            if(user){
                user.pins.push(pin)
                user.save()
                return
            }
            throw {"message":"Invalid user id","status":400}
        })
    })
}

export async function DeletePin(input:any){
    const currentUser= await UserModel.findById(input.owner);
    const deletedPin = await PinModel.findById({_id:input.id})
    if(currentUser && deletedPin){
        await PinModel.deleteOne({_id:input.id})
        const temporaryPins=currentUser.pins.filter((elem:any)=>elem._id.toString() !== input.id.toString())
        currentUser.pins = temporaryPins;
        currentUser.save()
        return
    }
    throw {"message":"Could not find user or pin id","status":404}
}

export async function getPinsByUser(input:any){
    const user=await UserModel.findById(input.id)
    if(user){
        return user.pins
    }
    throw {"message":"Could not find user","status":404}
}

export async function getPinsByUserEmail(input:any){
    console.log(input)
    const user=await UserModel.findOne({email:input})
    if(user){
       return user.pins
    }
    throw {"message":"Could not find user","status":404}
}