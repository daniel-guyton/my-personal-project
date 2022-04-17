import React from 'react'

export default function Product(props) {
  const { id, img, name, price } = props.product

  return (
    <div>
      <div key={id}>
        <img src={img} className="product"></img>
        <div className="productdetails">
          <p>{name}</p>
          <p>{`$${price}`}</p>
        </div>
        <button
          className="additem"
          onClick={() => {
            props.handleAddItem(props.product)
          }}
        >
          Add item
        </button>
        <style jsx="true">
          {`
            p {
              text-align: left;
              padding-left: 10px;
            }
          `}
        </style>
      </div>
    </div>
  )
}
