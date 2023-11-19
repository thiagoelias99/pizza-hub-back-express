import { z } from 'zod'
import Unit from './Unit'

const Product = z.object({
    id: z.string().uuid(),
    description: z.string(),
    unit: Unit,
    value: z.number(),
})

export type TProduct = z.infer<typeof Product>

export default Product