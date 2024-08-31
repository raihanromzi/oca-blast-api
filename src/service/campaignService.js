import { Validation } from '../validation/validation.js'
import { CampaignValidation } from '../validation/campaignValidation.js'
import { processCampaignBlast, userValidation } from '../util/campaignUtils.js'
import { prismaClientPostgres } from '../application/prisma.js'

export const createBlastCampaign = async (body) => {
    const { campaignName, users, stages } = Validation.validate(
        CampaignValidation.CampaignSchema,
        body
    )

    return prismaClientPostgres.$transaction(async (prisma) => {
        await userValidation(prisma, users)

        // await prisma.campaign.create({
        //     data: {
        //         name: campaignName,
        //         createdAt: new Date(),
        //     },
        // })

        await processCampaignBlast({ users, stages })
    })
}
