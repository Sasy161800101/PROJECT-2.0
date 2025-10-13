import { useEffect, useState } from 'react'
import './App.css'
import Card from './componenti/card'
import Footer from './componenti/footer'
import Navbar from './componenti/navbar'
import { HeroSection } from './componenti/heroSection'
import Filtro from './componenti/filtro'
import { FormLogin } from './pages/formLogin'
import { AuthProvider, useAuth } from './context/authProvider'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FormRegistrazione from './pages/formRegistrazione'
import { Dashboard } from './pages/dasboard'
import Cart from './pages/cart'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Private from './componenti/private'




function App() {


  return (
    
    <BrowserRouter>
    <AuthProvider>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<FormLogin></FormLogin>}></Route>
      <Route path='/registrazione' element={<FormRegistrazione></FormRegistrazione>}></Route>
      <Route path='/dashboard' element={<Private><Dashboard></Dashboard></Private>}></Route>
      <Route path='/carrello' element={<Private><Cart></Cart></Private>}></Route>
      <Route path='*' element={<Navigate to={"/"}></Navigate>}></Route>
    </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    <Footer></Footer>
    </AuthProvider>
    </BrowserRouter>
    
  )
}

export default App
