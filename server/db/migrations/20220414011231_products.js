exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('img')
    table.string('name')
    table.integer('price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('products')
}
