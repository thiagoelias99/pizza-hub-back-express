import { TUnitFamily } from '../models/UnitFamily'
import InMemoryDatabase from '../infra/database/InMemoryDatabase'
import { TUnit } from '../models/Unit'
import { IdNotFoundError } from '../errors'

const database = new InMemoryDatabase()

export default class UnitRepository {

    public async createFamily(unitFamily: TUnitFamily) {
        return database.insertFamily(unitFamily)
    }

    public async selectFamilyById(id: string) {
        const unitFamily = await database.selectFamilyById(id)
        if (!unitFamily) {
            throw new IdNotFoundError(id)
        }
        return unitFamily
    }

    public async selectAllFamilies() {
        return database.selectAllFamilies()
    }

    public async createUnit(unit: TUnit) {
        return database.insertUnit(unit)
    }

    public async selectUnitById(id: string) {
        const unit = await database.selectUnitById(id)

        if (!unit) {
            throw new IdNotFoundError(id)
        }
        return unit
    }

    public async selectAllUnits() {
        return database.selectAllUnits()
    }
}