import mongoose from "mongoose";

/**
 * @returns {boolean}
 */
export const mongoConnect = async ()=>{
    try {
        // already connnected scenario
        const isAlreadyConnected = (await mongoose.connection.readyState) === 1
        if(isAlreadyConnected) return true && console.log("Conncted Successfully!")

        const isConnected = await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"CDN-Base"
        })
        if(!isConnected) return false
        else return true && console.log("Mongodb Connected!")
        console.log("Mongodb Connted ")
    } catch (error) {
        return false
    }
}