import React from 'react'

export default function Products(props) {
  return (
    <>
      {props?.products?.map((product) => (
        <div key={product.id}>
          <img src={product.img} className="product"></img>
          <div className="productdetails">
            <p>{product.name}</p>
            <p>{`$${product.price}`}</p>
          </div>
          <button className="additem">Add item</button>
          <style jsx="true">
            {`
              p {
                text-align: left;
                padding-left: 10px;
              }
            `}
          </style>
        </div>
      ))}
    </>
  )
}
