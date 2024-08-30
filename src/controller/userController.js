import * as userService from '../service/userService.js'
import { success } from '../util/messageSuccess.js'
import { responseSuccess } from '../util/responseAPI.js'

const getAllUsers = async (req, res, next) => {
    try {
        const result = await userService.fetchAllUser()
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(success.HTTP.CODE.OK, success.HTTP.STATUS.OK, result)
        )
    } catch (e) {
        next(e)
    }
}

const getUserById = async (req, res, next) => {
    try {
        const result = await userService.fetchUserById(req.params.id)
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(success.HTTP.CODE.OK, success.HTTP.STATUS.OK, result)
        )
    } catch (e) {
        next(e)
    }
}

const createUser = async (req, res, next) => {
    try {
        const result = await userService.createUser(req.body)
        res.status(success.HTTP.CODE.CREATED).send(
            responseSuccess(success.HTTP.CODE.CREATED, success.HTTP.STATUS.CREATED, result)
        )
    } catch (e) {
        next(e)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const result = await userService.updateUser(req.params.id, req.body)
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(success.HTTP.CODE.OK, success.HTTP.STATUS.OK, result)
        )
    } catch (e) {
        next(e)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const result = await userService.deleteUser(req.params.id)
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(success.HTTP.CODE.OK, success.HTTP.STATUS.OK, success.USERS.DELETED)
        )
    } catch (e) {
        next(e)
    }
}

const getAllUsersPhoneNumber = async (req, res, next) => {
    try {
        const result = await userService.fetchAllUserPhoneNumber()
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(success.HTTP.CODE.OK, success.HTTP.STATUS.OK, result)
        )
    } catch (e) {
        next(e)
    }
}

const getAllUsersEmail = async (req, res, next) => {
    try {
        const result = await userService.fetchAllUserEmail()
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(success.HTTP.CODE.OK, success.HTTP.STATUS.OK, result)
        )
    } catch (e) {
        next(e)
    }
}

export {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getAllUsersPhoneNumber,
    getAllUsersEmail,
}
