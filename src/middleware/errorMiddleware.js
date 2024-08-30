import { responseError, ResponseError } from '../util/responseAPI.js'
import { prisma } from '../application/prisma.js'
import { errors } from '../util/messageError.js'
import { logger } from '../application/logging.js'
import { ZodError } from 'zod'

export const errorMiddleware = async (err, req, res, next) => {
    if (!err) {
        next()
    }
    if (err instanceof ResponseError) {
        return res
            .status(err.code)
            .send(responseError(err.code, err.status, err.message))
            .end()
    }

    if (err instanceof ZodError) {
        return res
            .status(400)
            .send(responseError(400, errors.HTTP.STATUS.BAD_REQUEST, err.message))
            .end()
    }

    if (err instanceof prisma.PrismaClientKnownRequestError) {
        // handle prisma error
        return res
            .status(errors.HTTP.CODE.BAD_REQUEST)
            .send(
                responseError(
                    errors.HTTP.CODE.BAD_REQUEST,
                    errors.HTTP.STATUS.BAD_REQUEST,
                    errors.HTTP.MESSAGE.UNKNOWN_BODY_ERROR
                )
            )
            .end()
    }

    logger.error(err)
    return res
        .status(errors.HTTP.CODE.INTERNAL_SERVER_ERROR)
        .send(
            responseError(
                errors.HTTP.CODE.INTERNAL_SERVER_ERROR,
                errors.HTTP.STATUS.INTERNAL_SERVER_ERROR,
                err.message
            )
        )
        .end()
}
