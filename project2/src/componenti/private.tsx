import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authProvider";

function Private({children}){
    const {currentUser} = useAuth()
    return (
        <>
        {currentUser ? children : <Navigate to={"/login"}></Navigate>}
        </>
    )
}
export default Private