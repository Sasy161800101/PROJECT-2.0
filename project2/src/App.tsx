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
import Preferiti from "./pages/preferiti";
import Contact from './pages/contact'
import Prodotto from './pages/prodotto'
import Checkout from './componenti/checkout'
import ConfermaOrdine from './pages/confermaOrdine'



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
      <Route path='/carrello' element={<Cart></Cart>}></Route>
      <Route path='*' element={<Navigate to={"/"}></Navigate>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path="/preferiti" element={<Preferiti />} />
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/prodotto/:id' element={<Prodotto></Prodotto>}></Route>
      <Route path='/checkout' element={<Private><Checkout></Checkout></Private>}></Route>
      <Route path='/confermaOrdine' element={<Private><ConfermaOrdine></ConfermaOrdine></Private>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer position="top-right" autoClose={2000} />
    </AuthProvider>
    </BrowserRouter> 
  )
}

export default App
