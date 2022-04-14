const path = require('path')
const express = require('express')
const cors = require('cors')
const productsRoute = require('./routes/products')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/v1/products', productsRoute)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})
module.exports = server
