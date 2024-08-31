import { prismaClientPostgres } from '../application/prisma.js'
import { ResponseError } from './responseAPI.js'
import { errors } from './messageError.js'

export const userValidation = async (prisma, users) => {
    const emails = users.map((user) => user.email)
    const phoneNumbers = users.map((user) => user.phoneNumber)

    const existingUsers = await prismaClientPostgres.user.findMany({
        where: {
            OR: [
                { email: { in: emails.length ? emails : [''] } },
                { phoneNumber: { in: phoneNumbers.length ? phoneNumbers : [''] } },
            ],
        },
    })

    const existingEmails = new Set(existingUsers.map((user) => user.email))
    const existingPhoneNumbers = new Set(existingUsers.map((user) => user.phoneNumber))

    for (const user of users) {
        if (!existingEmails.has(user.email) && !existingPhoneNumbers.has(user.phoneNumber)) {
            throw new ResponseError(
                errors.HTTP.CODE.BAD_REQUEST,
                errors.HTTP.STATUS.BAD_REQUEST,
                errors.USERS.NOT_FOUND
            )
        }
    }
}

export async function processCampaignBlast({ users, stages }) {
    try {
        for (const stage of stages) {
            if (stage.condition.type === 'afterTime') {
                await scheduleNextStage(stage.condition.waitTime, users, stage)
            } else if (stage.condition.type === 'afterClick') {
                await handleAfterClickCondition(stage, users)
            } else if (stage.condition.type === 'always') {
                await executeStage(stage, users)
            }
        }
    } catch (e) {
        console.log(e)
    }
}

async function scheduleNextStage(waitTime, users, stage) {
    setTimeout(async () => {
        await executeStage(stage, users)
    }, waitTime * 1000)
}

async function handleAfterClickCondition(stage, users) {
    await listenForUserClicks(stage, users)
    await executeStage(stage, users)
}

async function executeStage(stage, users) {
    if (stage.channel === 'email') {
        await sendEmailBlast(stage, users)
    } else if (stage.channel === 'whatsapp') {
        await sendWhatsAppBlast(stage, users)
    }
}

const sendEmailBlast = async (stage, users) => {
    try {
        console.log(`Sending email blast for stage: ${stage.stageName}`)
        users.forEach((user) => {
            console.log(`Email sent to ${user.email}`)
        })
    } catch (e) {
        console.log(e)
    }
}

const sendWhatsAppBlast = async (stage, users) => {
    try {
        console.log(`Sending WhatsApp blast for stage: ${stage.stageName}`)
        users.forEach((user) => {
            console.log(`WhatsApp message sent to ${user.phoneNumber}`)
        })
    } catch (e) {
        console.log(e)
    }
}

const listenForUserClicks = async (stage, users) => {
    try {
        // Logic to send WhatsApp blast
        console.log(`Sending WhatsApp blast for stage: ${stage.stageName}`)
        users.forEach((user) => {
            console.log(`WhatsApp message sent to ${user.phoneNumber}`)
        })
    } catch (e) {
        console.log(e)
    }
}
