import { IdNotFoundError } from '../errors'
import InMemoryDatabase from '../infra/database/InMemoryDatabase'
import { TProduct } from '../models/Product'

const database = new InMemoryDatabase()

export default class ProductRepository {
    public async createProduct(product: TProduct) {
        return database.insertProduct(product)
    }

    public async selectProductById(id: string) {
        const product = await database.selectProductById(id)

        if (!product) {
            throw new IdNotFoundError(id)
        }
        return product
    }

    public async selectAllProducts() {
        return database.selectAllProducts()
    }
}
