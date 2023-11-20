import Knex from '..'
import { TProduct } from '../../../../models'
import { IProductRepository } from '../../../../repositories'
import { ETableNames } from '../../ETableNames'
import { TProductKnexDto } from '../dto/ProductKnexDto'
import UnitsRepository from './UnitsRepository'

const unitsRepository = new UnitsRepository()

export default class ProductsRepository implements IProductRepository {
    public async createProduct(product: TProduct) {

        const productDto: TProductKnexDto = {
            id: product.id,
            description: product.description,
            unit_id: product.unit.id,
            value: product.value,
        }

        const [result] = await Knex(ETableNames.products).insert(productDto).returning('*')

        if (!result) {
            throw new Error(`Error creating product ${JSON.stringify(productDto)}`)
        }

        return product
    }

    public async selectProductById(id: string) {
        const productKnexDto = await Knex(ETableNames.products).select('*').where({ id }).first()

        if (!productKnexDto) {
            return null
        }

        const unit = await unitsRepository.selectUnitById(productKnexDto.unit_id)

        if (!unit) {
            throw new Error(`Error selecting unit for product ${JSON.stringify(productKnexDto)}`)
        }

        const product: TProduct = {
            id: productKnexDto.id,
            description: productKnexDto.description,
            unit,
            value: productKnexDto.value,
        }

        return product
    }

    public async selectAllProducts() {
        const productsKnexDto = await Knex(ETableNames.products).select('*')

        const products: TProduct[] = []

        for (const productKnexDto of productsKnexDto) {
            const unit = await unitsRepository.selectUnitById(productKnexDto.unit_id)

            if (!unit) {
                throw new Error(`Error selecting unit for product ${JSON.stringify(productKnexDto)}`)
            }

            const product: TProduct = {
                id: productKnexDto.id,
                description: productKnexDto.description,
                unit,
                value: productKnexDto.value,
            }

            products.push(product)
        }

        return products
    }
}