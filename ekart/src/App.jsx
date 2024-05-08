import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Detail from './pages/Detail'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/det/:id' element={<Detail/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
