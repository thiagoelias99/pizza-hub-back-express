import { randomUUID } from 'node:crypto'
import { TUnitCreateDto, TUnitFamilyCreateDto } from '../server/dto/UnitDto'
import { TUnitFamily } from '../models/UnitFamily'
import UnitRepository from '../repositories/UnitsRepository'
import Unit from '../models/Unit'

const unitRepository = new UnitRepository()

export default class UnitsServices {
    static async postFamily(dto: TUnitFamilyCreateDto) {

        const unitFamily: TUnitFamily = {
            id: randomUUID(),
            ...dto
        }
        return unitRepository.createFamily(unitFamily)
    }

    static async getFamilyById(id: string) {
        return unitRepository.selectFamilyById(id)
    }

    static async getFamilies() {
        return unitRepository.selectAllFamilies()
    }

    static async post(dto: TUnitCreateDto) {

        const unitFamily = await unitRepository.selectFamilyById(dto.unitFamilyId)
        if (!unitFamily) {
            throw new Error('Unit Family not found')
        }

        const unit = Unit.parse({
            id: randomUUID(),
            unitFamily,
            ...dto
        })

        return unitRepository.createUnit(unit)
    }

    static async getById(id: string) {
        return unitRepository.selectUnitById(id)
    }

    static async getAll() {
        return unitRepository.selectAllUnits()
    }
}