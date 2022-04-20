const path = require('path')
const express = require('express')
const cors = require('cors')
const productsRoute = require('./routes/products')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

// const stripe = require('stripe')(STRIPE_TEST_KEY)
server.use('/v1/products', productsRoute)

// const calculateOrderAmount = (items) => {
// //   // Replace this constant with a calculation of the order's amount
// //   // Calculate the order total on the server to prevent
// //   // people from directly manipulating the amount on the client
// //   return 1400
// // }

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

// server.post('/create-payment-intent', async (req, res) => {
//   const { items } = req.body

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: 'nzd',
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   })

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   })
// })
module.exports = server
