import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import Home from '../pages/Home'
import About from '../pages/About'


function Routs() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
    </>
  )
}

export default Routs
