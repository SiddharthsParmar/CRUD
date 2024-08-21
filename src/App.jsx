import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import { Routes ,Route } from 'react-router-dom'
import Create from './Pages/Create'
import Update from './Pages/Update'
import Read from './Pages/Read'

function App() {
 

  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>

    </>
  )
}

export default App
