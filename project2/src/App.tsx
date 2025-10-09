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

type Prodotto = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

function App() {
  // LOGICA HOMEPAGE

  // const [prodotti, setProdotti] = useState<Prodotto[] | null>(null)
  // const [categoriaSelezionata, setCategoriaSelezionata] = useState<string>("all")
  // useEffect(()=> {
  //   async function fetchProdotti() {
  //     const data = await fetch("https://fakestoreapi.com/products")
  //     const result = await data.json()
  //     setProdotti(result)
  //   }
  //   fetchProdotti()
  // }, [])

  // const prodottiFiltrati = categoriaSelezionata === "all"
  //   ? prodotti
  //   : prodotti?.filter(prod => prod.category === categoriaSelezionata)

  return (
    <>
    <AuthProvider>
    <Navbar></Navbar>
    {/* <HeroSection></HeroSection>
    <Filtro categoriaSelezionata={categoriaSelezionata} setCategoriaSelezionata={setCategoriaSelezionata}></Filtro>
    <div className='grid gap-5 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
    {prodottiFiltrati && (
        prodottiFiltrati.map((prod: Prodotto, index:number) => (
          <Card
            key={index}
            nomeProdotto={prod.title}
            prezzoProdotto={prod.price}
            imgProdotto={prod.image}
          />
        ))
      )}
      </div> */}
      <Cart></Cart>
      {/* <Dashboard></Dashboard> */}
      {/* <FormLogin></FormLogin>  */}
      {/* <FormRegistrazione></FormRegistrazione> */}
      <ToastContainer position="top-right" autoClose={2000} />
    <Footer></Footer>
    </AuthProvider>
    </>
  )
}

export default App
