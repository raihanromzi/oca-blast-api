import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai'
import { ResponseError } from '../util/responseAPI.js'
import { errors } from '../util/messageError.js'
import { Validation } from '../validation/validation.js'
import { TemplateMessageValidation } from '../validation/templateMessageValidation.js'

export const generateTemplateMessage = async (body) => {
    const {
        campaignName,
        contentDetail: { templateType, audience, productDetail, additionalNote, length },
    } = Validation.validate(TemplateMessageValidation.INPUT, body)

    const { segment, age, preference } = audience

    const MODEL_NAME = 'gemini-1.0-pro'
    const API_KEY = process.env.API_KEY_GEMINI

    if (!API_KEY) {
        throw new ResponseError(
            errors.HTTP.CODE.INTERNAL_SERVER_ERROR,
            errors.HTTP.STATUS.INTERNAL_SERVER_ERROR,
            'please provide the gemini api key'
        )
    }

    const genAI = new GoogleGenerativeAI(API_KEY)
    const model = genAI.getGenerativeModel({ model: MODEL_NAME })
    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 200,
    }

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ]

    const prompt = `Role: You are an experienced marketing copywriter. 
    Task: Generate only the subject and body of the message for a ${templateType} campaign. Do not include any additional headers, footers, or introductory text.
    - Campaign Name: ${campaignName}.
    - Target Audience: ${segment} (Age: ${age.min} - ${age.max}, Tone: ${preference.tone}, Language: ${preference.language}).
    - Product Details: ${productDetail.productName} - ${productDetail.description}.
    - Key Message: Please incorporate ${additionalNote} as a crucial point.
    - Message Length: ${length} characters or less.
    
    The output should consist of two parts:
    1. Subject: A brief, engaging subject line.
    2. Body: The main message content tailored to the audience’s preferences.
    Do not include any text like 'Message Template for' or similar headers.
    
    Example Use Cases:
    1. Template Type: SMS
    - Campaign Name: "Summer Sale Blast"
    - Target Audience: Young Adults (Age: 18-25, Tone: Casual, Language: English)
    - Product Details: "Eco-Friendly Water Bottles" - "Sustainable, stylish, and perfect for your daily hydration."
    - Key Message: Include "Limited-time 20% discount available!"
    - Message Length: 160 characters or less.
    Desired Output:
    - Subject: Stay hydrated in style!
    - Body: Grab our Eco-Friendly Water Bottles with a 20% discount! Hurry, offer ends soon. Shop now! [link]
    
    2. Template Type: Email
    - Campaign Name: "Holiday Gift Guide"
    - Target Audience: Working Professionals (Age: 30-45, Tone: Professional, Language: English)
    - Product Details: "Luxury Leather Wallets" - "Crafted from the finest materials, perfect for the discerning professional."
    - Key Message: Emphasize "Free gift wrapping on all purchases!"
    - Message Length: 300 words or less.
    
    Desired Output:
    - Subject: Elegance in Every Gift
    - Body: Hi [Customer Name],
    
    This holiday season, give the gift of elegance with our Luxury Leather Wallets. Crafted from the finest materials, these wallets are the perfect blend of style and functionality for the discerning professional. And for a limited time, enjoy complimentary gift wrapping on all purchases!
    
    Don’t miss out on this exclusive offer—shop now and make this holiday truly special.
    
    Best regards,  
    [Your Brand Name]
    
    3. Template Type: WhatsApp
    - Campaign Name: "Flash Sale Alert"
    - Target Audience: Budget-Conscious Shoppers (Age: 25-35, Tone: Urgent, Language: English)
    - Product Details: "Wireless Earbuds" - "High-quality sound, compact design, and unbeatable price."
    - Key Message: Include "Only for 24 hours!"
    - Message Length: 500 characters or less.
    
    Desired Output:
    - Subject: 🔊 FLASH SALE: Wireless Earbuds!
    - Body: Get our Wireless Earbuds at an unbeatable price! High-quality sound, compact design, perfect for your on-the-go lifestyle. 🚀 This offer is ONLY available for the next 24 hours—don’t miss out! Click here to buy now: [link] 🎧 #FlashSale
    `

    const parts = [
        {
            text: prompt,
        },
    ]

    const result = await model.generateContent({
        contents: [{ role: 'user', parts }],
        generationConfig,
        safetySettings,
    })

    const { response } = result

    const responseText = response.text()

    // Regex to extract the subject and body
    const subjectMatch = responseText.match(/\*\*Subject:\*\* ([\s\S]*?)\n/)
    const bodyMatch = responseText.match(/\*\*Body:\*\*([\s\S]*)/)

    // Extract the subject and body using the match groups
    const subjectMessage = subjectMatch ? subjectMatch[1].trim() : ''
    const bodyMessage = bodyMatch ? bodyMatch[1].trim() : ''

    if (responseText) {
        return { subject: subjectMessage, body: bodyMessage }
    } else {
        throw new ResponseError(
            errors.HTTP.CODE.INTERNAL_SERVER_ERROR,
            errors.HTTP.STATUS.INTERNAL_SERVER_ERROR,
            'failed to parse the json response from gemini api'
        )
    }
}
