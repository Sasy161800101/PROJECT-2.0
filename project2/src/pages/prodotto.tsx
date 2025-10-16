import { Navigate, useParams } from "react-router-dom"
import prodottiJSON from "../prodotti.json"
import { useEffect, useState } from "react"

function Prodotto () {
    const [carrello, setCarrello] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const { id } = useParams()
    const prodotto = prodottiJSON.find((x)=> x.id == id) //(x.id === parseInt(id))
    useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(carrello))
    }, [carrello])
    if (!prodotto) {
        return (<Navigate to={"/products"}></Navigate>)
    }
    function addToCart() {
        const productExist = carrello.find((x)=> x.id === prodotto.id)
        if (productExist) {
            productExist.quantity ++
            // const nuovoProdotto = {...productExist, quantity: quantity}
            setCarrello((prev)=> [...prev])
            // console.log(carrello)
        } else {
            setCarrello((prev) => [...prev, {...prodotto, quantity: 1}])
        }
    }
    return(<>
    <div className="max-w-4xl mx-auto bg-white  rounded-2xl overflow-hidden flex flex-col sm:flex-row items-start gap-8 p-6 sm:p-10">

  <div className="flex-shrink-0 w-full sm:w-1/3">
    <img
      src={prodotto.image}
      alt={prodotto.title}
      className="w-full h-64 sm:h-full object-cover rounded-xl"
    />
  </div>

  <div className="flex-1 text-left">
    <h2 className="text-2xl font-bold text-gray-700 mb-2">{prodotto.title}</h2>

    <dl className="divide-y divide-gray-200 text-sm">
      <div className="py-3 grid grid-cols-3 gap-2 sm:gap-4">
        <dt className="font-medium text-gray-900">Campionato</dt>
        <dd className="col-span-2 text-gray-700">{prodotto.campionato}</dd>
      </div>

      <div className="py-3 grid grid-cols-3 gap-2 sm:gap-4">
        <dt className="font-medium text-gray-900">Prezzo</dt>
        <dd className="col-span-2 text-gray-700 font-semibold text-lg">
          € {prodotto.price.toFixed(2)}
        </dd>
      </div>

      <div className="py-3 grid grid-cols-3 gap-2 sm:gap-4">
        <dt className="font-medium text-gray-900">Descrizione</dt>
        <dd className="col-span-2 text-gray-700 leading-relaxed">
          {prodotto.description}
        </dd>
      </div>
    </dl>

    <div className="mt-6 flex flex-wrap gap-4">
      <button onClick={addToCart} className="cursor-pointer transition-transform hover:bg-teal-700  bg-teal-600 text-white px-5 py-2 rounded-lg shadow-md transition-colors">
        Aggiungi al carrello
      </button>
    <div>
    <label htmlFor="Quantity" className="sr-only"> Quantity </label>
    <div className="flex items-center gap-1">
      <button type="button" className="cursor-pointer size-10 leading-10 text-gray-600 transition hover:opacity-75">
        -
      </button>
      <input
        type="number"
        id="Quantity"
        value="1"
        className="h-10 w-16 rounded-sm border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button onClick={addToCart} type="button" className="cursor-pointer size-10 leading-10 text-gray-600 transition hover:opacity-75">
        +
      </button>
      <select
              name={`Headline-${id}`}
              id={`Headline-${id}`}
              className="cursor-pointer mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            >
              <option value="">Seleziona la taglia</option>
                <option value="XXS">XXS</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
    </div>
   </div>
  </div>
 </div>
</div>
    </>)
}

export default Prodotto