import { logger } from '../application/logging.js'
import { prismaClientMongo } from '../application/prisma.js'

const createCampaign = async (req, res, next) => {
    try {
        const test = await prismaClientMongo.report.create({
            data: {
                campaignId: 1,
                reportData: {
                    name: 'test',
                },
                createdAt: new Date(),
            },
        })
        res.status(200).json({ message: 'Campaign created successfully!' })
        logger.info(`Campaign created successfully!`)
    } catch (e) {
        next(e)
        logger.info(`Error: ${e}`)
    }
}

export { createCampaign }
