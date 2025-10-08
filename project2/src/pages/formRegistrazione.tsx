import { useState } from "react"
import { useAuth } from "../context/authProvider"

function FormRegistrazione() {
    const [user, setUser] = useState({nome:"", cognome:"", emai:"", password:""})
    const {registrazioneUtente} = useAuth()
    function handleChange(e) {
        setUser(prev=> ({...prev, [e.target.name] : e.target.value}))
    }
    function handleRegistrati(e) {
        e.preventDefault()
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
             }}><a>Accedi al tuo account!</a></p>
    </form>
    </div>
    </>)
}

export default FormRegistrazione