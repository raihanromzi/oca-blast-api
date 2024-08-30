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

export { getAllUsers, getUserById }
