import * as templateService from '../service/templateMessageService.js'
import { responseSuccess } from '../util/responseAPI.js'
import { success } from '../util/messageSuccess.js'

const createTemplateMessage = async (req, res, next) => {
    try {
        const result = await templateService.generateTemplateMessage(req.body)
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(success.HTTP.CODE.OK, success.HTTP.STATUS.OK, result)
        )
    } catch (e) {
        next(e)
    }
}

export { createTemplateMessage }
