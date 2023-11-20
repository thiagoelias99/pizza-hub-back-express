import { TProduct } from '../models'

export interface IProductRepository {
    createProduct(product: TProduct): Promise<TProduct>
    selectProductById(id: string): Promise<TProduct | null>
    selectAllProducts(): Promise<TProduct[]>
}