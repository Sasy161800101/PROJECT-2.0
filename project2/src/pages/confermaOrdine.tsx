import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ConfermaOrdine() {
    const navigate = useNavigate()
    useEffect(()=> {
        localStorage.removeItem("ordine")
        localStorage.removeItem("cart")
        setTimeout(() => {
            navigate("/dashboard")
        }, 3000);
    }, [])
    return(<>
    <div>
        <h3>Complimenti, il tuo ordine è stato confermato!</h3>
        <p>A breve riceverai un'email riepilogativa del tuo ordine.</p>
    </div>
    </>)
}

export default ConfermaOrdine