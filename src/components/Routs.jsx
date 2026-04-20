import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'

function Routs() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Routs