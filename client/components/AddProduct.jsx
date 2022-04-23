import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { addProduct } from '../api'

// eslint-disable-next-line react/display-name
const AddProduct = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({ img: '', name: '', price: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    addProduct(data.img, data.name, data.price)
    navigate('/shop')
  }

  const handleDataChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input name="name" value={data.name} onChange={handleDataChange} />
      <label htmlFor="img">Image</label>
      <input name="img" value={data.img} onChange={handleDataChange} />
      <label htmlFor="price">Price</label>
      <input name="price" value={data.price} onChange={handleDataChange} />
      <button type="submit">Add Product</button>
    </form>
  )
}

export default AddProduct
