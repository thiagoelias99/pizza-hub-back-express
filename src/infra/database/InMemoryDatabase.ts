import { TProduct } from '../../models/Product'
import { TUnit } from '../../models/Unit'
import { TUnitFamily } from '../../models/UnitFamily'

export default class InMemoryDatabase {
    private unitsFamilies: TUnitFamily[] = []
    private units: TUnit[] = []
    private products: TProduct[] = []

    public async insertFamily(unitFamily: TUnitFamily) {
        this.unitsFamilies.push(unitFamily)
        console.log(this.unitsFamilies)
        return unitFamily
    }

    public async selectFamilyById(id: string) {
        return this.unitsFamilies.find((unitFamily) => unitFamily.id === id)
    }

    public async selectAllFamilies() {
        return this.unitsFamilies
    }

    public async insertUnit(unit: TUnit) {
        this.units.push(unit)
        return unit
    }

    public async selectUnitById(id: string) {
        return this.units.find((unit) => unit.id === id)
    }

    public async selectAllUnits() {
        return this.units
    }

    public async insertProduct(product: TProduct) {
        this.products.push(product)
        return product
    }

    public async selectProductById(id: string) {
        return this.products.find((product) => product.id === id)
    }

    public async selectAllProducts() {
        return this.products
    }
}