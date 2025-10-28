import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import prodottiJSON from "../prodotti.json"
import { useAuth } from "../context/authProvider"

type CardProp = {
  nomeProdotto: string
  prezzoProdotto: number
  imgProdotto: string
  descrizioneProdotto: string
  id: number
}

function Card({ id, nomeProdotto, prezzoProdotto, imgProdotto }: CardProp) {
  const [carrello, setCarrello] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [taglia, setTaglia] = useState(null)
  const prodotto = prodottiJSON.find((x) => x.id == id)
  const { currentUser, togglePreferito } = useAuth()

  const èPreferito = currentUser?.preferiti?.some((p: any) => p.id === id)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrello))
  }, [carrello])

  function addToCart() {
    if (!taglia) {
      toast.info("Seleziona una taglia!")
      return
    }
    const productExist = carrello.find((x) => x.id === prodotto.id && x.taglia === taglia)
    if (productExist) {
      productExist.quantity++
      setCarrello((prev) => [...prev])
    } else {
      setCarrello((prev) => [...prev, { ...prodotto, quantity: 1, taglia: taglia }])
    }
    toast.success(`${prodotto.title} aggiunto al carrello!`)
  }

  function handleTaglia(e) {
    const tagliaSelezionata = e.target.value
    setTaglia(tagliaSelezionata)
  }

  function handleTogglePreferito(e) {
    e.stopPropagation()
    e.preventDefault()
    if (!currentUser) {
      toast.info("Devi accedere per aggiungere ai preferiti!")
      return
    }
    togglePreferito({
      id,
      title: nomeProdotto,
      price: prezzoProdotto,
      image: imgProdotto,
      description: prodotto.description,
    })
  }

  return (
    <div className="group relative block h-full p-3">
      <button
        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:scale-110"
        onClick={handleTogglePreferito}
      >
        <span className="sr-only">Wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={èPreferito ? "red" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <Link onClick={() =>window.scrollTo({ top: 0 })} to={`/prodotto/${id}`} className="block">
        <img
          src={imgProdotto}
          alt={nomeProdotto}
          className="w-full h-48 object-contain transition duration-500 group-hover:scale-105"
        />
        <h3 className="mt-4 text-lg font-medium text-gray-900 line-clamp-2 px-4">
          {nomeProdotto}
        </h3>
        <p className="mt-1.5 text-sm text-gray-700 px-4">{prezzoProdotto.toFixed(2)} €</p>
      </Link>

      <div onClick={(e) => e.stopPropagation()} className="px-6">
        <form className="flex items-end gap-4">
          <div className="flex-1">
            <select
              onChange={handleTaglia}
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

          <button
            onClick={addToCart}
            type="button"
            className="cursor-pointer self-end rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition-transform hover:bg-teal-700"
          >
            <i className="fa fa-shopping-cart" style={{ fontSize: "18px" }}></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Card