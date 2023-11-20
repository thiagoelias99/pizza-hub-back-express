import { z } from 'zod'

export const ProductKnexDto = z.object({
    id: z.string().uuid(),
    description: z.string(),
    unit_id: z.string().uuid(),
    value: z.number(),
})

export type TProductKnexDto = z.infer<typeof ProductKnexDto>