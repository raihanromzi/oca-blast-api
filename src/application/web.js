import express from 'express'
import { checkDBMiddleware } from '../middleware/checkDBMiddleware.js'
import { errors } from '../util/messageError.js'
import { responseError } from '../util/responseAPI.js'
import { errorMiddleware } from '../middleware/errorMiddleware.js'
import { templateMessageRoute } from '../route/templateMessageRoute.js'
import { userRoute } from '../route/userRoute.js'
import { campaignRoute } from '../route/campaignRoute.js'
import { sendEmail } from '../util/emailUtils.js'

export const web = express()
web.use(express.json())
web.use(express.urlencoded({ extended: true }))
web.use(checkDBMiddleware)

web.use('/api/v1', templateMessageRoute)
web.use('/api/v1', userRoute)
web.use('/api/v1', campaignRoute)

web.post('/api/v1/email', async (req, res) => {
    const { name, email } = req.body // Extract name and email from request body

    // Validate request body
    if (!name || !email) {
        return res.status(400).json({ success: false, message: 'Name and email are required' })
    }

    // Call sendEmail function to send the email
    const result = await sendEmail({ name, email })

    if (result) {
        return res.status(200).json({ success: true, message: 'Email sent successfully' })
    } else {
        return res.status(500).json({ success: false, message: 'Failed to send email' })
    }
})

web.get('/api/v1/track', (req, res) => {
    const { email } = req.query
    console.log(`Email opened by: ${email}`)

    // Log the email or save it to the database to track opens/clicks
    // Send a 1x1 transparent pixel response
    const pixel = Buffer.from(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/GRKb9sAAAAASUVORK5CYII=',
        'base64'
    )
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': pixel.length,
    })
    res.end(pixel)
})

web.use(errorMiddleware)

// invalid api route
web.use((req, res) => {
    return res
        .status(errors.HTTP.CODE.UNAUTHORIZED)
        .send(
            responseError(
                errors.HTTP.CODE.UNAUTHORIZED,
                errors.HTTP.STATUS.UNAUTHORIZED,
                errors.HTTP.MESSAGE.UNAUTHORIZED
            )
        )
        .end()
})
