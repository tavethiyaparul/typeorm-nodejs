import express,{Request,Response} from "express"
import { createConnection } from "typeorm"
// import { User } from "./entity/User"
const app = express()
import router  from "./router/userrouter" 
const port=6000

createConnection({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"test",
    synchronize:true,
    entities:['./entity/*.ts'],
    logging:true,
}).then(()=>{
    console.log("connected database");
    
}).catch((e)=>{
    console.log("not connected ",e);
    
})
app.use(express.json())
app.use("/",router)


// app.get('/test',(req:Request,res:Response) =>{
//     res.send("hello world")

// })
app.listen(port,()=>{
    console.log("server starting in port no",port);
    
})
