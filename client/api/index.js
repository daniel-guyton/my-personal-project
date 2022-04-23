import request from 'superagent'

export function getProducts() {
  return request
    .get('/v1/products')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log(err)
    })
}

export function addProduct(img, name, price) {
  return request
    .post('/v1/products')
    .send({ img, name, price })
    .then((res) => {
      res
    })
}
