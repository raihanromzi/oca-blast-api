import * as z from 'zod'

export class CampaignValidation {
    static EmailTemplateSchema = z.object({
        subject: z.string().min(5).max(150),
        body: z.string().min(10).max(5000),
    })

    static WhatsAppTemplateSchema = z.object({
        message: z.string().min(5).max(1000),
    })

    static ConditionSchema = z.object({
        type: z.enum(['always', 'afterClick', 'afterTime']),
        previousStageIndex: z.number().min(0).optional(),
        waitTime: z.number().min(0).optional(),
    })

    static StageSchema = z.object({
        stageName: z.string().min(5).max(100),
        channel: z.enum(['email', 'whatsapp']),
        template: z.union([this.EmailTemplateSchema, this.WhatsAppTemplateSchema]),
        condition: this.ConditionSchema,
    })

    static UserSchema = z.object({
        email: z.string().email(),
        phoneNumber: z.string().min(10).max(15),
    })

    static CampaignSchema = z.object({
        campaignName: z.string().min(5).max(100),
    })

    static BlastSchema = z.object({
        campaignId: z.number().min(1),
        users: z.array(this.UserSchema).nonempty(),
        stages: z.array(this.StageSchema).nonempty(),
    })
}
