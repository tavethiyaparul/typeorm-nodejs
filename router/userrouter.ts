import express from "express"
const app = express()
import { deletedata, getdata ,postdata, putdata} from "../controller/usercontroller"

app.get("/user", getdata)
app.post("/user",postdata)
app.put("/user/:id",putdata)
app.delete("/user/:id",deletedata)

export default app
