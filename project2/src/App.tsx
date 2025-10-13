import './App.css'
import Footer from './componenti/footer'
import Navbar from './componenti/navbar'
import { FormLogin } from './pages/formLogin'
import { AuthProvider } from './context/authProvider'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FormRegistrazione from './pages/formRegistrazione'
import { Dashboard } from './pages/dasboard'
import Cart from './pages/cart'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Private from './componenti/private'
import Products from './pages/products'
import About from './pages/about'
import Contact from './pages/contact'



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
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    <Footer></Footer>
    </AuthProvider>
    </BrowserRouter> 
  )
}

export default App
