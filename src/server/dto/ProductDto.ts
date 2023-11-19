import { z } from 'zod'

export const ProductCreateDto = z.object({
    description: z.string(),
    unitId: z.string().uuid(),
    value: z.number(),
})

export type TProductCreateDto = z.infer<typeof ProductCreateDto>