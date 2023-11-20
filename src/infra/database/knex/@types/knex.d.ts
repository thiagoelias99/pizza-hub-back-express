import { TUnitFamily } from '../../../../models/UnitFamily'
import { ETableNames } from '../../ETableNames'
import { TUnitKnexDto } from '../dto/UnitKnexDto'
import { TProductKnexDto } from '../dto/ProductKnexDto'

declare module 'knex/types/tables' {
    interface Tables {
        [ETableNames.unitFamilies]: TUnitFamily
        [ETableNames.units]: TUnitKnexDto
        [ETableNames.products]: TProductKnexDto
    }
}