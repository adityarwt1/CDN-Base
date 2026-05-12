// register user router

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {import("express").Response}
 */
export const registerUserController = async (req, res)=>{
    try {
        const body = await req.json()
        // validation through zod
    } catch (error) {
        return res.status(500).json({
            message:(error).message
        })
    }
}
