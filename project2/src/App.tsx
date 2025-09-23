import { useEffect, useState } from 'react'
import './App.css'
import Card from './componenti/card'
import Footer from './componenti/footer'
import Navbar from './componenti/navbar'

function App() {
  const [prodotti, setProdotti] = useState(null)
  useEffect(()=> {
    async function fetchProdotti() {
      const data = await fetch("https://fakestoreapi.com/products")
      const result = await data.json()
      setProdotti(result)
    }
    fetchProdotti()
  }, [])

  return (
    <>
    <Navbar></Navbar>
    <div className='grid gap-5 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
    {prodotti && (
        prodotti.map((prod, index) => (
          <Card
            key={index}
            nomeProdotto={prod.title}
            prezzoProdotto={prod.price}
            imgProdotto={prod.image}
            className="h-full"
          />
        ))
      )}
      </div>
    <Footer></Footer>
    </>
  )
}

export default App
