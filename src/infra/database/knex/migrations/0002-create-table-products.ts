import { Knex } from 'knex'

import { ETableNames } from '../../ETableNames'

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.products, table => {
            table.uuid('id').primary().index().notNullable()
            table.string('description').index().notNullable()
            table.uuid('unit_id').references('id').inTable(ETableNames.units).index().notNullable()
            table.decimal('value').index().notNullable()

            table.comment('Table used to store products')
        })
        .then(() => {
            console.log(`# Created table ${ETableNames.products}`)
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.products)
        .then(() => {
            console.log(`# Dropped table ${ETableNames.products}`)
        })
}