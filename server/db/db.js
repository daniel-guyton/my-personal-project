const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getProducts,
  addProduct,
}

function getProducts(db = connection) {
  return db('products').select()
}

function addProduct(product, db = connection) {
  return db('products').insert({
    img: product.img,
    name: product.name,
    price: product.price,
  })
}
