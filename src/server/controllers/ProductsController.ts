import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

import ProductServices from '../../services/ProductServices'
import { ProductCreateDto } from '../dto/ProductDto'


export default class ProductsController {
    static async post(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = ProductCreateDto.parse(req.body)

            const product = await ProductServices.post(dto)
            res.status(StatusCodes.CREATED).json(product)
        } catch (error) {
            next(error)
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await ProductServices.getById(req.params.id)
            res.json(product)
        } catch (error) {
            next(error)
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await ProductServices.getAll()
            res.json(products)
        } catch (error) {
            next(error)
        }
    }
}