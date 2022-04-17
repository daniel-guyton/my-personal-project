import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const handleNavigate = () => navigate('/shop')
  return (
    <>
      <div>
        <Header />
      </div>
      <h1 className="shop">Home</h1>
      <div className="alpha">
        <img src="https://melmagazine.com/wp-content/uploads/2021/01/Gigachad.jpg"></img>
        <div className="alpha-content">
          <h2 className="chad-clothing">Chad Clothing</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            assumenda delectus. Numquam, tempora? Tempore deserunt plac eat,
            consequatur iusto eaque maxime suscipit alias quisquam cupiditate
            reprehenderit at libero, asperiores, modi eveniet?'
          </p>
          <button className="start-shopping" onClick={() => handleNavigate()}>
            Start Shopping
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
