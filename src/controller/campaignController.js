import * as templateService from '../service/templateMessageService.js'
import { success } from '../util/messageSuccess.js'
import { responseSuccess } from '../util/responseAPI.js'

const createCampaign = async (req, res, next) => {
    try {
        const result = await templateService.generateTemplateMessage()
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(success.HTTP.CODE.OK, success.HTTP.STATUS.OK, result)
        )
    } catch (e) {
        next(e)
    }
}

export { createCampaign }
