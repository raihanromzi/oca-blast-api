import { Validation } from '../validation/validation.js'
import { CampaignValidation } from '../validation/campaignValidation.js'
import { processCampaignBlast, userValidation } from '../util/campaignUtils.js'
import { prismaClientPostgres } from '../application/prisma.js'
import { ResponseError } from '../util/responseAPI.js'

export const postCampaign = async (body) => {
    const { campaignName } = Validation.validate(CampaignValidation.CampaignSchema, body)

    return prismaClientPostgres.$transaction(async (prisma) => {
        await prisma.campaign.create({
            data: {
                name: campaignName,
                createdAt: new Date(),
            },
        })

        return {
            campaignName,
        }
    })
}

export const postBlastCampaign = async (body) => {
    const { campaignId, users, stages } = Validation.validate(CampaignValidation.BlastSchema, body)

    return prismaClientPostgres.$transaction(async (prisma) => {
        await userValidation(prisma, users)

        // find campaign
        const campaign = await prisma.campaign.findUnique({
            where: {
                id: campaignId,
            },
        })

        if (!campaign) {
            throw new ResponseError(404, 'Campaign not found')
        }

        await processCampaignBlast({ users, stages })
    })
}
