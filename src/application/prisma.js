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
    logger.error(`[PostgreSQL] ${e}`)
})

prismaClientPostgres.$on('warn', (e) => {
    logger.warn(`[PostgreSQL] ${e}`)
})

prismaClientPostgres.$on('info', (e) => {
    logger.info(`[PostgreSQL] ${e}`)
})

prismaClientPostgres.$on('query', (e) => {
    logger.info(`[PostgreSQL] ${e}`)
})

// MongoDB Logging
prismaClientMongo.$on('error', (e) => {
    logger.error(`[MongoDB] ${e}`)
})

prismaClientMongo.$on('warn', (e) => {
    logger.warn(`[MongoDB] ${e}`)
})

prismaClientMongo.$on('info', (e) => {
    logger.info(`[MongoDB] ${e}`)
})

prismaClientMongo.$on('query', (e) => {
    logger.info(`[MongoDB] ${e}`)
})
