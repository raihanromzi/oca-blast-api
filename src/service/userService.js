import { prismaClientPostgres } from '../application/prisma.js'
import { ResponseError } from '../util/responseAPI.js'
import { errors } from '../util/messageError.js'
import { Validation } from '../validation/validation.js'
import { UserValidation } from '../validation/userValidation.js'

const fetchAllUser = async () => {
    const users = await prismaClientPostgres.user.findMany()

    if (users.length === 0) {
        throw new ResponseError(
            errors.HTTP.CODE.NOT_FOUND,
            errors.HTTP.STATUS.NOT_FOUND,
            errors.USERS.NOT_FOUND
        )
    }
}

const fetchUserById = async (id) => {
    const userId = Validation.validate(UserValidation.ID, parseInt(id))

    const user = await prismaClientPostgres.user.findUnique({
        where: {
            id: userId,
        },
    })

    if (!user) {
        throw new ResponseError(
            errors.HTTP.CODE.NOT_FOUND,
            errors.HTTP.STATUS.NOT_FOUND,
            errors.USERS.NOT_FOUND
        )
    }

    return user
}

export { fetchAllUser, fetchUserById }
