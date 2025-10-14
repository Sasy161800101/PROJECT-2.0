import { Link } from "react-router-dom"

type CardProp = {
    nomeProdotto: string
    prezzoProdotto: number
    imgProdotto: string
    descrizioneProdotto: string // da aggiungere!
    id: number
}

function Card({id, nomeProdotto, prezzoProdotto, imgProdotto}: CardProp) {
  return (
    <Link to={`/prodotto/${id}`} className={`group relative block h-full `}>
      <button
        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
      >
        <span className="sr-only">Wishlist</span>
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
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <div className="flex flex-col h-full">
        <img
          src={imgProdotto}
          alt={nomeProdotto}
          className="w-full h-48 object-contain transition duration-500 group-hover:scale-105"
        />

        <div className="relative bg-white p-6 flex flex-col flex-1"> 
          <h3 className="mt-4 text-lg font-medium text-gray-900 line-clamp-2">{nomeProdotto}</h3>
          <p className="mt-1.5 text-sm text-gray-700 mt-auto">{prezzoProdotto} €</p>
          <form className="mt-4">
            <button
              className="block w-full rounded-sm bg-teal-600 p-4 text-white font-medium transition hover:scale-105"
            >
              Aggiungi al carrello
            </button>
          </form>
        </div>
      </div>
    </Link>
  )
}

export default Card