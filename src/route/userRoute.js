import express from 'express'
import * as userController from '../controller/userController.js'

const userRoute = express.Router()

userRoute.get('/users', userController.getAllUsers)
userRoute.get('/users/:id', userController.getUserById)

export { userRoute }
