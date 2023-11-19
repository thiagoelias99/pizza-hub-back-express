import { z } from 'zod'

export const UnitFamilyCreateDto = z.object({
    description: z.string(),
})

export type TUnitFamilyCreateDto = z.infer<typeof UnitFamilyCreateDto>

export const UnitCreateDto = z.object({
    unitFamilyId: z.string().uuid(),
    unit: z.string(),
    isDefault: z.boolean(),
    conversionFactor: z.number(),
})

export type TUnitCreateDto = z.infer<typeof UnitCreateDto>