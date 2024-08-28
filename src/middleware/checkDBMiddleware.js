import { prismaClient } from '../application/prismaDB'
import { ResponseError } from '../util/responseError.js'
import { errors } from '../util/messageError.js'
import { NextFunction, Request, Response } from 'express'

export const checkDBMiddleware = async (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    await prismaClient.$connect()
    next()
  } catch (e) {
    throw new ResponseError(
      errors.HTTP.CODE.INTERNAL_SERVER_ERROR,
      errors.HTTP.STATUS.INTERNAL_SERVER_ERROR,
      errors.DATABASE.CONNECTION,
    )
  }
}
