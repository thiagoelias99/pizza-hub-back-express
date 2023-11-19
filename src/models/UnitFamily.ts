import { z } from 'zod'

const UnitFamily = z.object({
    id: z.string().uuid(),
    description: z.string(),
})

export type TUnitFamily = z.infer<typeof UnitFamily>

export default UnitFamily