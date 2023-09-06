import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "./Home"
import Products from "../Components/Products/Products"
import Cart from './Cart'

const Main = () => {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:product' element={<Products/>} />
      </Routes>
    </div>
  )
}

export default Main