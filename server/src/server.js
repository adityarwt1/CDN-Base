import express from "express"
import dotEnv from 'dotenv'
import cors from 'cors'
import { mongoConnect } from "../lib/mongodb.js"
import helmet from 'helmet'
import morgon from 'morgan'
import rateLimit from 'express-rate-limit'
import authenticationRoutes from '../routers/authenticationRouter.js'
// server basics for need
dotEnv.config({
    debug:true
})
const app = express()
const PORT = process.env.PORT || 8000
mongoConnect()


// middleware authentication 
app.use(helmet())
app.use(cors({
    allowedHeaders:["Authorization","x-cdn-base-auth"],
    credentials:true,
    origin:["http://localhost:3000"] ,
    methods:["OPTIONS", "POST","GET", "PUT", "DELETE","PATCH"]
}))
app.use(express.json({limit:"10mb"}))
app.use(morgon("combined"))

// rate limitinig
const rateLimiter = rateLimit({
    windowMs:15*60 * 1000,
    limit:100
})
app.use(rateLimiter)


app.get("/",(req,res)=>{
    return res.json({
        message:"Hellow world!"
    })
})

// api routes
app.use("/api/auth",authenticationRoutes )
app.use("/api/dashboard", )

app.listen(PORT, ()=>{
    console.log("Server is running!")
})

