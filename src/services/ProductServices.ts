import { randomUUID } from 'node:crypto'
import { IdNotFoundError } from '../errors'
import Product, { TProduct } from '../models/Product'
import ProductRepository from '../infra/database/knex/repositories/ProductRepository'
import UnitRepository from '../infra/database/knex/repositories/UnitsRepository'
import { TProductCreateDto } from '../server/dto/ProductDto'


const productRepository = new ProductRepository()
const unitRepository = new UnitRepository()

export default class ProductServices {
    static async post(dto: TProductCreateDto) {

        const unit = await unitRepository.selectUnitById(dto.unitId)
        if (!unit) {
            throw new IdNotFoundError(dto.unitId)
        }

        const product: TProduct = Product.parse({
            id: randomUUID(),
            unit,
            ...dto
        })


        await productRepository.createProduct(product)
        return product
    }

    static async getById(id: string) {
        return productRepository.selectProductById(id)
    }

    static async getAll() {
        return productRepository.selectAllProducts()
    }
}