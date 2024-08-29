import { prismaClientMongo, prismaClientPostgres } from '../application/prisma.js'
import { errors } from '../util/messageError.js'
import { ResponseError } from '../util/responseAPI.js'

export const checkDBMiddleware = async (req, res, next) => {
    try {
        await prismaClientMongo.$connect()
        await prismaClientPostgres.$connect()
        next()
    } catch (e) {
        throw new ResponseError(
            errors.HTTP.CODE.INTERNAL_SERVER_ERROR,
            errors.HTTP.STATUS.INTERNAL_SERVER_ERROR,
            errors.DATABASE.CONNECTION
        )
    }
}
