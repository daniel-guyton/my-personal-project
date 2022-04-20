import request from 'superagent'

export default function getProducts() {
  return request
    .get('/v1/products')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log(err)
    })
}
