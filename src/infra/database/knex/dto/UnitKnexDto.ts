import { z } from 'zod'

export const UnitKnexDto = z.object({
    id: z.string().uuid(),
    unit_family_id: z.string().uuid(),
    unit: z.string(),
    is_default: z.boolean(),
    conversion_factor: z.number()
})

export type TUnitKnexDto = z.infer<typeof UnitKnexDto>