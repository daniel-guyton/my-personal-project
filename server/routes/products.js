const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getProducts()
    .then((products) => {
      res.json(products)
    })
    .catch((err) => {
      return res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addProduct(req.body)
    .then((product) => {
      console.log(product)
      res.json(product)
    })
    .catch((err) => console.log(err))
})

module.exports = router
