import { z } from 'zod'
import UnitFamily from './UnitFamily'

const Unit = z.object({
    id: z.string().uuid(),
    unitFamily: UnitFamily,
    unit: z.string(),
    isDefault: z.boolean(),
    conversionFactor: z.number(),
})

export type TUnit = z.infer<typeof Unit>

export default Unit