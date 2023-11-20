import { TUnitFamily } from '../models'
import { TUnit } from '../models'

export interface IUnitRepository {
    createFamily(unitFamily: TUnitFamily): Promise<TUnitFamily>
    selectFamilyById(id: string): Promise<TUnitFamily | null>
    selectAllFamilies(): Promise<TUnitFamily[]>
    createUnit(unit: TUnit): Promise<TUnit>
    selectUnitById(id: string): Promise<TUnit | null>
    selectAllUnits(): Promise<TUnit[]>
}