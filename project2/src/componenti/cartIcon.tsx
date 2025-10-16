import { Link } from "react-router-dom"

function CartIcon() {
    return(<>
    <Link
className="transition-transform hover:bg-teal-700 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500"
  to="/carrello">
    
  <i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>
</Link>
    </>)
}

export default CartIcon