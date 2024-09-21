import * as campaignService from '../service/campaignService.js'
import { success } from '../util/messageSuccess.js'
import { responseSuccess } from '../util/responseAPI.js'

export const createCampaign = async (req, res, next) => {
    try {
        const result = await campaignService.postCampaign(req.body)
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(
                success.HTTP.CODE.CREATED,
                success.HTTP.STATUS.CREATED,
                `${result.campaignName} created`
            )
        )
    } catch (e) {
        next(e)
    }
}

export const createBlastCampaign = async (req, res, next) => {
    try {
        const result = await campaignService.postBlastCampaign(req.body)
        res.status(success.HTTP.CODE.OK).send(
            responseSuccess(success.HTTP.CODE.OK, success.HTTP.STATUS.OK, result)
        )
    } catch (e) {
        next(e)
    }
}
