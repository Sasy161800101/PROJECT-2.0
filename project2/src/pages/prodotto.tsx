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
            console.log(carrello)
        } else {
            setCarrello((prev) => [...prev, {...prodotto, quantity: 1}])
        }
    }
    return(<>
    <div>
    <h2>{prodotto.title}</h2>
    <p>{prodotto.description}</p>
    <img src={prodotto.image}></img>
    <button onClick={addToCart}
    className="block w-full rounded-sm bg-teal-600 p-4 text-white font-medium transition hover:scale-105">
        Aggiungi al carrello
    </button>
    </div>
    </>)
}

export default Prodotto