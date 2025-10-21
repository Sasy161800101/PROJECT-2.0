import { useState, type ChangeEvent, type FormEvent } from "react"
import { useAuth } from "../context/authProvider"
import { Link } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"


function FormRegistrazione() {
    const [user, setUser] = useState({nome:"", cognome:"", email:"", password:""})
    const [confirmPassword, setConfirmPassword] = useState("")
    const {registrazioneUtente} = useAuth()

    function validatePassword(pwd: string) {
        if (pwd.length < 8) return "La password deve avere almeno 8 caratteri"
        if (!/[A-Z]/.test(pwd)) return "La password deve contenere almeno una lettera maiuscola"
        if (!/[a-z]/.test(pwd)) return "La password deve contenere almeno una lettera minuscola"
        if (!/[0-9]/.test(pwd)) return "La password deve contenere almeno un numero"
        if (!/[!@#$%^&*]/.test(pwd)) return "La password deve contenere almeno un carattere speciale"
        return ""
      }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        if (name === "password") {
          setUser(prev => ({ ...prev, password: value }))
        } else if (name === "confirmPassword") {
          setConfirmPassword(value)
        } else {
          setUser(prev => ({ ...prev, [name]: value }))
        }
      }

    function handleRegistrati(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const passwordError = validatePassword(user.password)
        if (passwordError) {
          toast.error(passwordError)
          return
        }
        if (user.password !== confirmPassword) {
          toast.error("Le password non coincidono")
          return
        }

        registrazioneUtente(user)
      }
    return(<>
    <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          backgroundColor: "#f5f6fa",
        }}>
    <form  style={{
            backgroundColor: "#ffffff",
            padding: "40px 50px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
           onSubmit={handleRegistrati}>
            <h2
            style={{
              textAlign: "center",
              marginBottom: "10px",
              color: "#0d9488", 
              fontWeight: "600",
            }}
          >
            Registrazione
          </h2>
        <input  style={{
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              outline: "none",
              transition: "0.2s",
            }}
             type="text" name="nome" placeholder="inserisci nome" onChange={handleChange} required></input>
        <input  style={{
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              outline: "none",
              transition: "0.2s",
            }}
             type="text" name="cognome" placeholder="inserisci cognome" onChange={handleChange} required></input>
        <input  style={{
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              outline: "none",
              transition: "0.2s",
            }}
             type="email" name="email" placeholder="inserisci email" onChange={handleChange} required></input>
        <input  style={{
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              outline: "none",
              transition: "0.2s",
            }}
             type="password" name="password" placeholder="inserisci password" onChange={handleChange} required></input>
        <input style={{
              padding: "12px 15px",
              borderRadius: "8px", border: "1px solid #ccc",
              fontSize: "16px" 
            }}
              type="password" name="confirmPassword" placeholder="Conferma password" onChange={handleChange} required />
        <button style={{
              backgroundColor: "#0d9488",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
             type="submit">Registrati</button>
             <p style={{
                color: "#111827"
             }}> Sei registrato?
              <Link className="text-teal-600" to="/login">Accedi</Link> al tuo account!</p>
    </form>
    </div>
    </>)
}

export default FormRegistrazione