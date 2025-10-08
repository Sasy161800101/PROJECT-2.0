import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAuth } from "../context/authProvider";

export function FormLogin() {
    const [credenziali, setCredenziali] = useState({email: "", password: ""})
    const {loginUtente} = useAuth()

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        const chiave = e.target.name
        const proprieta = e.target.value
        setCredenziali(prev => ({...prev, [chiave] : proprieta}))
    }
    function handleLogin(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        loginUtente(credenziali)
    }
    return(<>
    <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          backgroundColor: "#f5f6fa",
        }}>
      <form style={{
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
      onSubmit={handleLogin}>
        <h2
            style={{
              textAlign: "center",
              marginBottom: "10px",
              color: "#0d9488", 
              fontWeight: "600",
            }}
          >
            Login
          </h2>
        <input style={{
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              outline: "none",
              transition: "0.2s",
            }}
             type="email" name="email" placeholder="inserisci la tua email" onChange={handleChange} required></input>
        <input style={{
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              outline: "none",
              transition: "0.2s",
            }}
             type="password" name="password" placeholder="inserisci la tua password" onChange={handleChange} required></input>
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
             type="submit">Login</button>
             <p style={{
                color: "#111827"
             }}>Non sei registrato? <a>Registrati!</a></p>
      </form>
    </div>
    </>)
}

