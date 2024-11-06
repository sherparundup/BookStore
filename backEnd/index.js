import express from "express";
import { PORT, nodeURL } from "./config.js";
import mongoose from 'mongoose'
import bookRoutes from "./routes/bookRoutes.js"
import cors from "cors"
const app = express();
app.use(express.json())
app.use(cors())
app.use("/books",bookRoutes);
// get all books

// app.use(cors({
//     origin:"http://localhost:5000",
//     methods:["PUSH","GET","PUT","DELETE"],
//     allowedHeaders:["Content-Type"]

// }))


const CONN = async () => {
    try {
        await mongoose.connect(nodeURL)
        console.log(`the server is connected to the dataBase`)
        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`)
        })

    } catch (error) {
        console.log("Coudnt connect to dataBase")
        console.log(error)

    }

}
CONN()