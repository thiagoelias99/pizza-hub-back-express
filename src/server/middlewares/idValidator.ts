import { z } from 'zod'
import { Request, Response, NextFunction } from 'express'

const id = z.object({
    id: z.string().uuid()
})

export default function idValidator(req: Request, res: Response, next: NextFunction) {
    try {
        id.parse({id: req.params.id})
        next()
    } catch (error) {
        next(error)
    }
}