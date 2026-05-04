import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'
import Signin from './formsValidation/Signin'
import Layout from './Layout'
import Signup from './formsValidation/Signup'
import UserList from './useContext/UserList'


function Routs() {
  return (
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route element={<Layout/>}>
        <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
      {/* <Route path='/about' element={<About/>}/> */}
      <Route path='/userlist' element={<UserList/>}/>
      </Route>
    </Routes>
  )
}

export default Routs