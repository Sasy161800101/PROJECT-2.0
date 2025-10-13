import { useAuth } from "../context/authProvider";
import { FormLogin } from "./formLogin";

export function Dashboard() {
  const { currentUser, logoutUtente } = useAuth();

  // SE NON ESISTE CURRENTUSER ESCE FORMLOGIN
  // if (!currentUser) {
  //   return <FormLogin />;
  // }

  // ALTRIMENTI DASHBOARD
  return (
    <>
      <div
        style={{
          minHeight: "80vh",
          backgroundColor: "white",
          padding: "40px 20px",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#0d9488",
              }}
            >
              Dashboard Utente
            </h1>

            <button
              onClick={logoutUtente}
              style={{
                backgroundColor: "#0d9488",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#14b8a6") 
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#0d9488")
              }
            >
              Logout
            </button>
          </div>

          {/* CORPO */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1f2937",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#374151")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1f2937")
              }
            >
              <h2
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "#0d9488",
                }}
              >
                Benvenuto!
              </h2>
              <p style={{ color: "#d1d5db" }}>
                Qui puoi visualizzare le informazioni principali del tuo profilo
                e le ultime attività.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#1f2937",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#374151")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1f2937")
              }
            >
              <h2
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "#0d9488",
                }}
              >
                Statistiche
              </h2>
              <p style={{ color: "#d1d5db" }}>
                Visualizza i tuoi progressi, grafici e dati principali delle
                ultime settimane.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#1f2937",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#374151")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1f2937")
              }
            >
              <h2
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "#0d9488",
                }}
              >
                Impostazioni
              </h2>
              <p style={{ color: "#d1d5db" }}>
                Aggiorna le tue preferenze, modifica le credenziali o esegui il
                logout dal tuo account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}