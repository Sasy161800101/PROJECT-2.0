import { Link } from "react-router-dom"

function CartIcon() {
    return(<>
    <Link
  className="inline-block border border-teal-600 bg-teal-600 p-2 text-gray-100 hover:bg-transparent hover:text-teal-600 focus:ring-3 focus:outline-hidden"
  to="/carrello"
>
  <span className="sr-only"> Download </span>
  <i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>
</Link>
    </>)
}

export default CartIcon