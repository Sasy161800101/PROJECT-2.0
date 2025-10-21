import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Prodotto from "./prodotto"

function Cart() {
  const [carrello, setCarrello] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [totale, setTotale] = useState(0)
  const [spedizione, setSpedizione] = useState(0)
  const navigate = useNavigate()
  useEffect(()=> {
    const t = carrello.reduce((acc, cur)=> acc + cur.price * cur.quantity, 0)
    localStorage.setItem("cart", JSON.stringify(carrello))
    setTotale(t)
    if (t > 150) {
      setSpedizione("GRATIS")
    } else if (t > 0) {
      setSpedizione(10)
    } else {
      setSpedizione(0)
    }
  }, [carrello])

  function handleRemove(id) {
    const index = carrello.findIndex((x)=> x.id === id)
    if(index >= 0) {
      const copiaCarrello = [...carrello] //metodo splice serve una copia dell'array perche non riesce a utilizzare metodi sull'array originale
      copiaCarrello.splice(index, 1)
      setCarrello(copiaCarrello)
    }
  }

  function handleIncrement(id, taglia) {
  setCarrello(carrello.map(item =>
    item.id === id && item.taglia === taglia
      ? { ...item, quantity: item.quantity + 1 }
      : item
  ));
}

  function handleDecrement(id, taglia) {
  setCarrello(carrello.map(item =>
    item.id === id && item.taglia === taglia && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  ));
}
  

function handleCheckout() {
  const currentUser =JSON.parse(localStorage.getItem("currentUser"))

  if(!currentUser) {
    toast.info("Registrati o entra nel tuo account per comprare!")
  } else {
    const ordine = {id: Math.floor(Math.random() * 10000), stato:"in elaborazione", totale: totale, spedizione: spedizione, corriere: "", prodotti: carrello}
    localStorage.setItem("ordine", JSON.stringify(ordine))
    console.log("ordine salvato con successo")
    navigate("/checkout")
    
  }
}
  return(<>
  <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Il tuo Carrello</h1>
      </header>

      <div className="mt-8">
        <ul className="space-y-4">
          {carrello.map((prodotto)=> (
            <li
            key={`${prodotto.id}-${prodotto.taglia}`}
            className="flex items-center gap-4">
            <img
              src={prodotto.image}
              alt={prodotto.title}
              className="size-16 rounded-sm object-cover"
            />

            <div>
              <h3 className="text-sm text-gray-900">{prodotto.title}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-start text-gray-600">
                <div>
                  <dt className="inline font-bold">Prezzo: </dt>
                  <dd className="inline">{prodotto.price.toFixed(2)}</dd>
                </div>
                <div>
                  <dt className="inline font-bold">Size: </dt>
                  <dd className="inline">{prodotto.taglia}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
            <div>
              <label htmlFor="Quantity" className="sr-only">Quantity</label>

              <div className="flex items-center rounded-sm border border-gray-200">
                <button onClick={() => handleDecrement(prodotto.id, prodotto.taglia)} type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
                -
                </button>

                <input
                  type="number"
                  id="Quantity"
                  value={prodotto.quantity}
                  className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm
                            [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none
                            [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />

                <button onClick={() => handleIncrement(prodotto.id, prodotto.taglia)} type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
                +
                </button>
              </div>
            </div>
              <button onClick={() => handleRemove(prodotto.id)} className="text-gray-600 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Spedizione</dt>
                <dd>{spedizione === "GRATIS" ? spedizione : `€ ${spedizione.toFixed(2)}`}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Articoli</dt>
                <dd>
                € {totale.toFixed(2)}
              </dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Totale</dt>
                <dd>
                {spedizione === "GRATIS" ? `€ ${totale.toFixed(2)}` : `€ ${(totale + spedizione).toFixed(2)}`}
              </dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <button
              onClick={handleCheckout}
              className="block cursor-pointer rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>)
}

export default Cart