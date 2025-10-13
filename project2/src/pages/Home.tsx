import { useEffect, useState } from "react"
import Card from "../componenti/card"
import Filtro from "../componenti/filtro"
import { HeroSection } from "../componenti/heroSection"
import Cart from "./cart"
type Prodotto = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

function Home(){
    const [prodotti, setProdotti] = useState<Prodotto[] | null>(null)
  const [categoriaSelezionata, setCategoriaSelezionata] = useState<string>("all")
  useEffect(()=> {
    async function fetchProdotti() {
      const data = await fetch("https://fakestoreapi.com/products")
      const result = await data.json()
      setProdotti(result)
    }
    fetchProdotti()
  }, [])

  const prodottiFiltrati = categoriaSelezionata === "all"
    ? prodotti
    : prodotti?.filter(prod => prod.category === categoriaSelezionata)

    return(
        <>
           <HeroSection></HeroSection>
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
      </div> 
       </>
    )
}

export default Home