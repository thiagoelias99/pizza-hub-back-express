import { Knex } from 'knex'

import { ETableNames } from '../../ETableNames'

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.units, table => {
            table.uuid('id').primary().index().notNullable()
            table.uuid('unit_family_id').references('id').inTable(ETableNames.unitFamilies).index().notNullable()
            table.string('unit').index().notNullable()
            table.boolean('is_default').index().notNullable()
            table.float('conversion_factor').index().notNullable()

            table.comment('Table used to store units')
        })
        .then(() => {
            console.log(`# Created table ${ETableNames.units}`)
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.units)
        .then(() => {
            console.log(`# Dropped table ${ETableNames.units}`)
        })
}