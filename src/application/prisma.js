import { Prisma } from '@prisma/client'
import { logger } from './logging.js'

import { PrismaClient as PrismaClientPostgres } from '../generated/postgresql/index.js'
import { PrismaClient as PrismaClientMongo } from '../generated/mongodb/index.js'

export const prisma = Prisma

export const prismaClientPostgres = new PrismaClientPostgres({
    errorFormat: 'pretty',
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'event',
            level: 'error',
        },
        {
            emit: 'event',
            level: 'info',
        },
        {
            emit: 'event',
            level: 'warn',
        },
    ],
})

export const prismaClientMongo = new PrismaClientMongo({
    errorFormat: 'pretty',
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'event',
            level: 'error',
        },
        {
            emit: 'event',
            level: 'info',
        },
        {
            emit: 'event',
            level: 'warn',
        },
    ],
})

// PostgreSQL Logging
prismaClientPostgres.$on('error', (e) => {
    logger.error(`[PostgreSQL] ${JSON.stringify(e, null, 2)}`)
})

prismaClientPostgres.$on('warn', (e) => {
    logger.warn(`[PostgreSQL] ${JSON.stringify(e, null, 2)}`)
})

prismaClientPostgres.$on('info', (e) => {
    logger.info(`[PostgreSQL] ${JSON.stringify(e, null, 2)}`)
})

prismaClientPostgres.$on('query', (e) => {
    logger.info(`[PostgreSQL] ${JSON.stringify(e, null, 2)}`)
})

// MongoDB Logging
prismaClientMongo.$on('error', (e) => {
    logger.error(`[MongoDB] ${JSON.stringify(e, null, 2)}`)
})

prismaClientMongo.$on('warn', (e) => {
    logger.warn(`[MongoDB] ${JSON.stringify(e, null, 2)}`)
})

prismaClientMongo.$on('info', (e) => {
    logger.info(`[MongoDB] ${JSON.stringify(e, null, 2)}`)
})

prismaClientMongo.$on('query', (e) => {
    logger.info(`[MongoDB] ${JSON.stringify(e, null, 2)}`)
})
