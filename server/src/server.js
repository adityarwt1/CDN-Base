import express from "express"
import dotEnv from 'dotenv'

dotEnv.config({
    debug:true
})

const app = express()
const PORT = process.env.PORT || 8000
app.get("/",(req,res)=>{
    return res.json({
        message:"Hellow world!"
    })
})

app.listen(PORT, ()=>{
    console.log("Server is running!")
})

