import { User } from "../entity/User"
import { Request, Response } from "express"
import { getManager } from "typeorm";

// const entityManager = getManager();
export const getdata = async (req: Request, res: Response) => {
    try {
        const data = await getManager().find(User)
        res.send(data)
    } catch (error) {
        console.log(error);
    }

}

export const postdata = async (req:Request, res:Response) => {
    try {
      
        const data = await getManager().insert(User,req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

export const putdata = async (req:Request,res:Response) =>{
    try{
        const data = await getManager().update(User,req.params.id,req.body)
        res.send(data)
    }catch(error){
        console.log(error);
        
    }
}


export const deletedata = async (req:Request,res:Response) =>{
    try{
        const data = await getManager().delete(User,req.params.id)
        res.send(data)
    }catch(error){
        console.log(error);
        
    }
}