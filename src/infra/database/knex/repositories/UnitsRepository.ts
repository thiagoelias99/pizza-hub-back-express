import Knex from '..'
import { TUnit, TUnitFamily } from '../../../../models'
import { IUnitRepository } from '../../../../repositories'
import { ETableNames } from '../../ETableNames'
import { TUnitKnexDto } from '../dto/UnitKnexDto'

export default class UnitsRepository implements IUnitRepository {

    public async createFamily(unitFamily: TUnitFamily) {
        const [result] = await Knex(ETableNames.unitFamilies).insert(unitFamily).returning('*')	
        
        if (!result) {
            throw new Error(`Error creating unit family ${JSON.stringify(unitFamily)}`)
        }
        return result   
    }

    public async selectFamilyById(id: string) {
        const result = await Knex(ETableNames.unitFamilies).select('*').where({ id }).first()

        if (!result) {
            return null
        }
        return result
    }

    public async selectAllFamilies() {
        return Knex(ETableNames.unitFamilies).select('*')
    }

    public async createUnit(unit: TUnit) {

        const unitDto: TUnitKnexDto = {
            id: unit.id,
            unit_family_id: unit.unitFamily.id,
            unit: unit.unit,
            is_default: unit.isDefault,
            conversion_factor: unit.conversionFactor
        }

        const [result] = await Knex(ETableNames.units).insert(unitDto).returning('*')

        if (!result) {
            throw new Error(`Error creating unit ${JSON.stringify(unitDto)}`)
        }
        return unit
    }

    public async selectUnitById(id: string) {
        const unitKnexDto = await Knex(ETableNames.units).select('*').where({ id }).first()

        if (!unitKnexDto) {
            return null
        }

        const unitFamily = await this.selectFamilyById(unitKnexDto.unit_family_id)

        if (!unitFamily) {
            throw new Error(`Error finding unit family for unit ${JSON.stringify(unitKnexDto)}`)
        }

        const unit: TUnit = {
            id: unitKnexDto.id,
            unitFamily,
            unit: unitKnexDto.unit,
            isDefault: unitKnexDto.is_default ? true : false,
            conversionFactor: unitKnexDto.conversion_factor
        }

        return unit
    }

    public async selectAllUnits() {
        const unitsKnexDto = await Knex(ETableNames.units).select('*')

        const units = await Promise.all(unitsKnexDto.map(async unitKnexDto => {
            const unitFamily = await this.selectFamilyById(unitKnexDto.unit_family_id)

            if (!unitFamily) {
                throw new Error(`Error finding unit family for unit ${JSON.stringify(unitKnexDto)}`)
            }

            const unit: TUnit = {
                id: unitKnexDto.id,
                unitFamily,
                unit: unitKnexDto.unit,
                isDefault: unitKnexDto.is_default ? true : false,
                conversionFactor: unitKnexDto.conversion_factor
            }

            return unit
        }))

        return units
    }
}