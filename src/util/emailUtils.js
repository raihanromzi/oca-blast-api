import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
})

export const sendEmailBlast = (email, user) => {
    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: 'OCA Email Blast',
        text: `Hello ${user.name}, your email blast has been sent to ${email}`,
    }

    return transporter.sendMail(mailOptions)
}
