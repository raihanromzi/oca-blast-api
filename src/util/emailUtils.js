import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
import hbs from 'nodemailer-express-handlebars'

dotenv.config()

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.APP_PASSWORD,
    },
})

// Configure Handlebars options
const handlebarOptions = {
    viewEngine: {
        extname: '.hbs',
        partialsDir: path.resolve('./views'), // Path to partials, if used
        defaultLayout: false,
    },
    viewPath: path.resolve('./views'), // Path to the directory containing templates
    extName: '.hbs',
}

// Attach Handlebars plugin to Nodemailer transporter
transporter.use('compile', hbs(handlebarOptions))

// Function to send email using Handlebars template
export const sendEmail = async (user) => {
    try {
        // Data to render in the Handlebars template
        const data = {
            name: user.name,
            subject: 'Exciting News for You!',
            link: 'https://example.com',
            trackingUrl: `http://localhost:8080/track?email=${encodeURIComponent(user.email)}`, // Tracking URL
        }

        // Set up email options
        const mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: user.email,
            subject: data.subject,
            template: 'emailTemplate', // Template name without extension (e.g., emailTemplate.hbs)
            context: data, // Data passed to Handlebars
        }

        // Send the email
        await transporter.sendMail(mailOptions)
        console.log(`Email sent to ${user.email}`)
    } catch (error) {
        console.error(`Failed to send email to ${user.email}:`, error)
    }
}
