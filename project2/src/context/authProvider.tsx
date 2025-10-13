import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
export const AuthContext = createContext()

export function AuthProvider({children}){
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)
    const navigate = useNavigate()
        function registrazioneUtente(user){
        const userExist = users.find((x) => x.email === user.email)
        if(userExist){
            toast.error("utente già registrato")
            setTimeout(() => {navigate("/login")}, 3000)
        }else{
            setUsers(prev => [...prev, user] )
            toast.success("registrazione avvenuta con successo")
        }

    }
    function loginUtente({email, password}){
        const user = users.find((x) => x.email === email && x.password === password)
        if(user){
            setCurrentUser(user)
            toast.success("accesso effettuato")
            setTimeout( ()=> {navigate("/dashboard")}, 3000)
        }else{
            toast.error("credenziali errate")
        }

    }

    function logoutUtente(){
        setCurrentUser(null)
        toast.info("logout effettuato")
        localStorage.removeItem("currentUser")

    }

    useEffect(() => localStorage.setItem("users", JSON.stringify(users)), [users])
    useEffect(() => localStorage.setItem("currentUser", JSON.stringify(currentUser)), [currentUser])


    return(
       <AuthContext.Provider value={{registrazioneUtente, loginUtente, logoutUtente, currentUser}}>{children}</AuthContext.Provider>
    )


}
export function useAuth(){
    return useContext(AuthContext)
}