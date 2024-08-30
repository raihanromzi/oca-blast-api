import * as z from 'zod'

export class TemplateMessageValidation {
    static INPUT = z.object({
        campaignName: z.string().min(5).max(100),
        contentDetail: z.object({
            templateType: z.string().min(5).max(100),
            audience: z.object({
                segment: z.string().min(5).max(100),
                age: z.object({
                    min: z.number().min(0).max(100),
                    max: z.number().min(0).max(100),
                }),
                preference: z.object({
                    tone: z.string().min(5).max(50),
                    language: z.string().min(5).max(50),
                }),
            }),
            productDetail: z.object({
                productName: z.string().min(5).max(100),
                description: z.string().min(5).max(100),
            }),
            additionalNote: z.string().min(5).max(100),
            length: z.string().min(5).max(100),
        }),
    })
}
