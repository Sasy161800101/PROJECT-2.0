import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
export const AuthContext = createContext()

export function AuthProvider({children}){
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)

    function togglePreferito(prodotto) {
  if (!currentUser) {
    toast.info("Devi accedere per aggiungere ai preferiti!");
    return;
  }

  const utenteAggiornato = { ...currentUser };
  const preferiti = utenteAggiornato.preferiti || [];
  const esiste = preferiti.find((p) => p.id === prodotto.id);

  let nuoviPreferiti;
  if (esiste) {
    nuoviPreferiti = preferiti.filter((p) => p.id !== prodotto.id);
    toast.info(`${prodotto.title} rimosso dai preferiti`);
  } else {
    nuoviPreferiti = [...preferiti, prodotto];
    toast.success(`${prodotto.title} aggiunto ai preferiti`);
  }

  utenteAggiornato.preferiti = nuoviPreferiti;
  setCurrentUser(utenteAggiornato);
  localStorage.setItem("currentUser", JSON.stringify(utenteAggiornato));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((u) => u.id === utenteAggiornato.id);
  if (index !== -1) users[index] = utenteAggiornato;
  else users.push(utenteAggiornato);
  localStorage.setItem("users", JSON.stringify(users));
}

    const navigate = useNavigate()

        function registrazioneUtente(user) {
  const userExist = users.find((x) => x.email === user.email)
  if (userExist) {
    toast.error("Utente già registrato")
    setTimeout(() => navigate("/login"), 3000)
    return
  }


  const nuovoUtente = {
    ...user,
    id: Date.now(),
    ordini: [],
  }

  setUsers(prev => [...prev, nuovoUtente])
  localStorage.setItem("users", JSON.stringify([...users, nuovoUtente]))

  toast.success("Registrazione avvenuta con successo")
  setTimeout(() => navigate("/login"), 3000)
}

    function loginUtente({ email, password }) {
  const usersLS = JSON.parse(localStorage.getItem("users")) || []
  const user = usersLS.find((x) => x.email === email && x.password === password)

  if (user) {
    setUsers(usersLS)
    setCurrentUser(user)
    localStorage.setItem("currentUser", JSON.stringify(user))
    toast.success("Accesso effettuato")
    setTimeout(() => { navigate("/dashboard") }, 3000)
  } else {
    toast.error("Credenziali errate o utente non presente!")
  }
}

    function logoutUtente(){
        localStorage.removeItem("currentUser")
        setCurrentUser(null)
        toast.info("logout effettuato")
    }

    function aggiornaPassword(psw) {
        setCurrentUser((prev)=> ({...prev, password: psw}))
    }

    useEffect(() => localStorage.setItem("users", JSON.stringify(users)), [users])
    useEffect(() => {
  if (!currentUser) {
    localStorage.removeItem("currentUser")
    return
  }

  localStorage.setItem("currentUser", JSON.stringify(currentUser))

  const userExist = users.find((x) => x.id === currentUser.id)
  if (userExist) {
    const index = users.indexOf(userExist)
    const copia = [...users]
    copia.splice(index, 1, currentUser)
    setUsers(copia)
  }
}, [currentUser])

    return(
       <AuthContext.Provider value={{registrazioneUtente, loginUtente, logoutUtente, currentUser, users, aggiornaPassword, togglePreferito}}>{children}</AuthContext.Provider>
    )


}
export function useAuth(){
    return useContext(AuthContext)
}