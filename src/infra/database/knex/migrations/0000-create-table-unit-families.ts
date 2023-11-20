import { Knex } from 'knex'

import { ETableNames } from '../../ETableNames'

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.unitFamilies, table => {
            table.uuid('id').primary().index().notNullable()
            table.string('description').index().notNullable()

            table.comment('Table used to store unit families')
        })
        .then(() => {
            console.log(`# Created table ${ETableNames.unitFamilies}`)
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.unitFamilies)
        .then(() => {
            console.log(`# Dropped table ${ETableNames.unitFamilies}`)
        })
}