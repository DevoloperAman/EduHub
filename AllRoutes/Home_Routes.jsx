import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../src/Components/Home'

function Home_Routes() {
  return (
     <>
     <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
     </Routes>
     </>
  )
}

export default Home_Routes