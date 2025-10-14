import { useState } from "react"
import Card from "../componenti/card"
import Filtro from "../componenti/filtro"
import prodottiJSON from "../prodotti.json"

type Prodotto = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  nazione: string
  quantità: number
}

function Products(){
  const [prodotti] = useState<Prodotto[]>(prodottiJSON)

  //STATO DEI FILTRI
  const [categoriaSelezionata, setCategoriaSelezionata] = useState<string>("all")
  const [nazioneSelezionata, setNazioneSelezionata] = useState<string>("all")

  // SQUADRA E NAZIONE
  const categorie = Array.from(new Set(prodotti.map(prod => prod.category)))
  const nazioni = Array.from(new Set(prodotti.map(prod => prod.nazione)))
  const prodottiFiltrati = prodotti.filter(prod => {
    const matchCategoria = categoriaSelezionata === "all" || prod.category === categoriaSelezionata
    const matchNazione = nazioneSelezionata === "all" || prod.nazione === nazioneSelezionata
    return matchCategoria && matchNazione
  })

  return (
    <>
      <Filtro
        categoriaSelezionata={categoriaSelezionata}
        setCategoriaSelezionata={setCategoriaSelezionata}
        nazioneSelezionata={nazioneSelezionata}
        setNazioneSelezionata={setNazioneSelezionata}
        categorie={categorie}
        nazioni={nazioni}
      />
      <div className='grid gap-5 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {prodottiFiltrati.map(prod => (
          <Card
          id= {prod.id}
          key={prod.id}
          nomeProdotto={prod.title}
          prezzoProdotto={prod.price}
          imgProdotto={prod.image}
          descrizioneProdotto={prod.description}
          />
        ))}
      </div>
      {prodottiFiltrati.length === 0 &&
        <p className="text-center text-gray-600 mt-8 text-lg">
          Nessun prodotto trovato, utilizza meno filtri o rimuovi tutto.
        </p>}
    </>
  )
}

export default Products
