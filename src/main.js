import dotenv from 'dotenv'
import { web } from './application/web.js'
import { logger } from './application/logging.js'

dotenv.config()

const PORT = process.env.PORT || 8080

web.listen(PORT, () => {
    logger.info(`Server is up and listening on ${PORT}`)
})
