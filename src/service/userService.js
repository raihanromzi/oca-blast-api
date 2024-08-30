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

const createUser = async (user) => {
    const { email, phoneNumber } = Validation.validate(UserValidation.REGISTER, user)

    const existingUserEmail = await prismaClientPostgres.user.findUnique({
        where: {
            email,
        },
    })

    if (existingUserEmail) {
        throw new ResponseError(
            errors.HTTP.CODE.BAD_REQUEST,
            errors.HTTP.STATUS.BAD_REQUEST,
            errors.USERS.ALREADY_EXIST
        )
    }

    const existingUserPhoneNumber = await prismaClientPostgres.user.findUnique({
        where: {
            phoneNumber,
        },
    })

    if (existingUserPhoneNumber) {
        throw new ResponseError(
            errors.HTTP.CODE.BAD_REQUEST,
            errors.HTTP.STATUS.BAD_REQUEST,
            errors.USERS.ALREADY_EXIST
        )
    }

    return prismaClientPostgres.user.create({
        data: {
            email: email,
            phoneNumber: phoneNumber,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    })
}

const updateUser = async (id, user) => {
    const userId = Validation.validate(UserValidation.ID, parseInt(id))
    const { email, phoneNumber } = Validation.validate(UserValidation.UPDATE, user)

    const existingUser = await prismaClientPostgres.user.findUnique({
        where: {
            id: userId,
        },
    })

    if (!existingUser) {
        throw new ResponseError(
            errors.HTTP.CODE.NOT_FOUND,
            errors.HTTP.STATUS.NOT_FOUND,
            errors.USERS.NOT_FOUND
        )
    }

    const existingUserPhoneNumberAndEmail = await prismaClientPostgres.user.findFirst({
        where: {
            NOT: {
                id: userId,
            },
            OR: [
                {
                    phoneNumber: phoneNumber,
                },
                {
                    phoneNumber: null,
                },
            ],
        },
    })

    if (existingUserPhoneNumberAndEmail) {
        throw new ResponseError(
            errors.HTTP.CODE.BAD_REQUEST,
            errors.HTTP.STATUS.BAD_REQUEST,
            errors.USERS.ALREADY_EXIST
        )
    }

    const updateData = {}

    if (email && email !== existingUser.email) {
        updateData.email = email
    }

    if (phoneNumber && phoneNumber !== existingUser.phoneNumber) {
        updateData.phoneNumber = phoneNumber
    }

    updateData.updatedAt = new Date()

    if (Object.keys(updateData).length === 1) {
        return existingUser
    }

    return prismaClientPostgres.user.update({
        where: { id: userId },
        data: updateData,
    })
}

const deleteUser = async (id) => {
    const userId = Validation.validate(UserValidation.ID, parseInt(id))

    const existingUser = await prismaClientPostgres.user.findUnique({
        where: {
            id: userId,
        },
    })

    if (!existingUser) {
        throw new ResponseError(
            errors.HTTP.CODE.NOT_FOUND,
            errors.HTTP.STATUS.NOT_FOUND,
            errors.USERS.NOT_FOUND
        )
    }

    return prismaClientPostgres.user.delete({
        where: {
            id: userId,
        },
        select: {
            id: true,
        },
    })
}

const fetchAllUserPhoneNumber = async () => {
    const phoneNumber = await prismaClientPostgres.user.findMany({
        where: {
            phoneNumber: {
                not: null,
            },
        },
        select: {
            phoneNumber: true,
        },
    })

    if (phoneNumber.length === 0) {
        throw new ResponseError(
            errors.HTTP.CODE.NOT_FOUND,
            errors.HTTP.STATUS.NOT_FOUND,
            errors.USERS.NOT_FOUND
        )
    }

    return {
        phoneNumber: phoneNumber.map((item) => item.phoneNumber),
    }
}

const fetchAllUserEmail = async () => {
    const users = await prismaClientPostgres.user.findMany({
        where: {
            email: {
                not: null,
            },
        },
        select: {
            email: true,
        },
    })

    if (users.length === 0) {
        throw new ResponseError(
            errors.HTTP.CODE.NOT_FOUND,
            errors.HTTP.STATUS.NOT_FOUND,
            errors.USERS.NOT_FOUND
        )
    }

    return {
        email: users.map((item) => item.email),
    }
}

export {
    fetchAllUser,
    fetchUserById,
    createUser,
    updateUser,
    deleteUser,
    fetchAllUserPhoneNumber,
    fetchAllUserEmail,
}
