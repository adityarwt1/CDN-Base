import express from "express"
import dotEnv from 'dotenv'
import cors from 'cors'
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
const PORT = process.env.PORT || 8000
app.get("/",(req,res)=>{
    return res.json({
        message:"Hellow world!"
    })
})

app.listen(PORT, ()=>{
    console.log("Server is running!")
})

