import express from "express"
import dotEnv from 'dotenv'
import cors from 'cors'
import { mongoConnect } from "../lib/mongodb.js"
dotEnv.config({
    debug:true
})

const app = express()
app.use(cors({
    allowedHeaders:["Authorization","x-cdn-base-auth"],
    credentials:true,
    origin:["http://localhost:3000"] ,
    methods:["OPTIONS", "POST","GET", "PUT", "DELETE","PATCH"]
}))
app.use(express.json())

const PORT = process.env.PORT || 8000

mongoConnect()

app.get("/",(req,res)=>{
    return res.json({
        message:"Hellow world!"
    })
})

app.listen(PORT, ()=>{
    console.log("Server is running!")
})

