// username=okorogreat46
// password=5BhEVRavrzw1jaIr

//npm i express @types/express 
// mongoose  nodemon ts-node typescript
// npm tsc --init


import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"

import financialRecordRouter from "./routes/financial-records";
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
const mongoURI: string = "mongodb+srv://okorogreat46:5BhEVRavrzw1jaIr@personalfinancetracker0.4258vog.mongodb.net/"

mongoose.connect(mongoURI)
    .then(() => console.log("CONNECTEED TO MONGODB"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err))

app.use('/financial-records', financialRecordRouter)

app.listen(port, () => {
        console.log(`Server Running on Porr ${port}`)
})
