import { logger } from '../application/logging.js'

const createCampaign = async (req, res, next) => {
    try {
        res.status(200).json({ message: 'Campaign created successfully!' })
        logger.info(`Campaign created successfully!`)
    } catch (e) {
        next(e)
        logger.info(`Error: ${e}`)
    }
}

export { createCampaign }
