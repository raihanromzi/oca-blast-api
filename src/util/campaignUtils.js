import { ResponseError } from './responseAPI.js'

export const userValidation = async (prisma, users) => {
    // Loop through the provided users and validate their existence
    for (const user of users) {
        // Query the database for the user with the exact email and phone number combination
        const existingUser = await prisma.user.findFirst({
            where: {
                email: user.email,
                phoneNumber: user.phoneNumber,
            },
        })

        // If the user with this exact email and phone number does not exist, throw an error
        if (!existingUser) {
            throw new ResponseError(
                404,
                `User with email ${user.email} and phone number ${user.phoneNumber} not found.`
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
    }, waitTime * 5000)
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
