import express from 'express'
import { registerUserController } from '../controllers/authenticatoinControllers.js'
const router = express.Router()
// user Register router
router.route('/register').post(registerUserController)

export default router