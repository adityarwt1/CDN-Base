import { userRegisterValidations } from "../validations/userValidations"
import { mongoConnect } from "../lib/mongodb.js"
import bcryptjs from 'bcryptjs'
import UserModel from "../models/user.js"
// import { success } from "zod"

/**
 * @typedef {import("../types/api.type.js").ApiResponse} ApiResponse
 */

/**
 * @param {import("express").Request} req
 * @param {import("express").Response<ApiResponse<{fullName:string}>>} res
 * @returns {import("express").Response}
 */
export const registerUserController = async (req, res) => {
  try {
    const body = req.body

    // validation through zod
    const isValidBody = userRegisterValidations.safeParse(body)

    if (!isValidBody.success) {
      return res.status(400).json({
        success: false,
        data: {},
        error: {
          statusCode: 400,
          message: isValidBody.error.message || "Invalid Data type!"
        }
      })
    }

    // database connection check
    const isConnected = await mongoConnect()

    if (!isConnected) {
      return res.status(500).json({
        success: false,
        data: {},
        error: {
          statusCode: 500,
          message: "Database connection failed"
        }
      })
    }

    // user Existence Checke
    const isExist = await UserModel.find({
        $or:[
            {
                userName:body.userName.toLowerCase()
            },
            {
                email:body.email.toLowerCase()
            }
        ]
    })

    if(isExist.length > 0){
        return res.status(409).json({
            success:false,
            error:{
                statusCode:409,
                message:"User already exist!"
            }
        })
    }

    // if doesNot Exist need to make the hashed password save them
    const hashedPassword = await bcryptjs.hash(body.password, 10)

    const user = new UserModel({...body, password:hashedPassword})
    await user.save()

    
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      error: {
        statusCode: 500,
        message: error.message
      }
    })
  }
}