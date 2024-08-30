import express from 'express'
import * as userController from '../controller/userController.js'

const userRoute = express.Router()

userRoute.post('/users', userController.createUser)
userRoute.get('/users', userController.getAllUsers)
userRoute.get('/users/phone-numbers', userController.getAllUsersPhoneNumber)
userRoute.get('/users/emails', userController.getAllUsersEmail)
userRoute.get('/users/:id', userController.getUserById)
userRoute.put('/users/:id', userController.updateUser)
userRoute.delete('/users/:id', userController.deleteUser)

export { userRoute }
