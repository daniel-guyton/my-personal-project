const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getProducts,
}

function getProducts(db = connection) {
  return db('products').select()
}
