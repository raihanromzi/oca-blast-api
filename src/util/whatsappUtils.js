import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()
export const sendWhatsAppMessage = async (phoneNumber) => {
    try {
        // WhatsApp API URL to send messages

        const url = 'https://graph.facebook.com/v20.0/368805426325534/messages'

        // Request body for the WhatsApp Cloud API
        const body = {
            messaging_product: 'whatsapp',
            to: phoneNumber,
            type: 'template',
            template: {
                name: 'hello_world', // The template name, e.g., 'hello_world'
                language: {
                    code: 'en_US', // Language code, e.g., 'en_US' for English
                },
            },
        }

        // Make a POST request to WhatsApp Cloud API
        const response = await axios.post(url, body, {
            headers: {
                Authorization: `Bearer ${process.env.CLOUD_API_ACCESS_TOKEN}`, // Your access token
                'Content-Type': 'application/json',
            },
        })

        console.log(response)
    } catch (error) {
        // Handle errors from the WhatsApp API
        console.error('Error sending WhatsApp message:', error.response?.data || error.message)
        return { success: false, message: error.response?.data?.error?.message || error.message }
    }
}
