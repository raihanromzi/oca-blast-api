import { z } from 'zod'

export class UserValidation {
    static ID = z.number()

    static REGISTER = z.object({
        email: z.string().email(),
        phoneNumber: z.string().min(10).max(15).optional(),
    })

    static UPDATE = z.object({
        email: z.string().email().optional(),
        phoneNumber: z.string().min(10).max(15).optional(),
    })
}
