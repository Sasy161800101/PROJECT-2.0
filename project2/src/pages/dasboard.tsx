import { useEffect, useState } from "react";
import { useAuth } from "../context/authProvider";

export function Dashboard() {
  const { currentUser: userFromContext, aggiornaPassword } = useAuth();

  
  const [currentUser, setCurrentUser] = useState(() => {
    const userLS = localStorage.getItem("currentUser");
    return userLS ? JSON.parse(userLS) : userFromContext;
  });

  const [modifica, setModifica] = useState(false);
  const [passwordNuova, setPasswordNuova] = useState("");
  const [sezioneAttiva, setSezioneAttiva] = useState("");
  const [ordini, setOrdini] = useState([]);
  const [dettagli, setDettagli] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.ordini) {
      setOrdini(currentUser.ordini);
    }
  }, [currentUser]);

  const statoClass = (stato) => {
    if (stato === "Consegna completata") return "text-green-600 font-semibold mt-1";
    if (stato === "Spedito") return "text-orange-500 font-semibold mt-1";
    return "text-gray-600 font-semibold mt-1";
  };

  function handleModifica(e) {
    e.preventDefault();
    setModifica(false);
    aggiornaPassword(passwordNuova);
  }

  if (!currentUser) {
    return <div className="p-10 text-center">Caricamento dati utente...</div>;
  }

  return (
    <div className="min-h-[80vh] bg-white p-10 text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-semibold text-teal-700">Dashboard Utente</h1>
        </div>

        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          <div
            onClick={() => setSezioneAttiva("profilo")}
            className="bg-gray-200 hover:bg-gray-300 p-6 rounded-xl shadow-md cursor-pointer transition-colors"
          >
            <h2 className="text-teal-700 text-lg font-semibold mb-2">Benvenuto!</h2>
            <p className="text-gray-900">Visualizza i tuoi dati personali</p>
          </div>

          <div
            onClick={() => setSezioneAttiva("ordini")}
            className="bg-gray-200 hover:bg-gray-300 p-6 rounded-xl shadow-md cursor-pointer transition-colors"
          >
            <h2 className="text-teal-700 text-lg font-semibold mb-2">I miei ordini</h2>
            <p className="text-gray-900">Controlla gli ordini che hai effettuato</p>
          </div>

          <div
            onClick={() => setSezioneAttiva("impostazioni")}
            className="bg-gray-200 hover:bg-gray-300 p-6 rounded-xl shadow-md cursor-pointer transition-colors"
          >
            <h2 className="text-teal-700 text-lg font-semibold mb-2">Impostazioni</h2>
            <p className="text-gray-900">Gestisci il tuo account</p>
          </div>
        </div>

        <div className="mt-10">
          {sezioneAttiva === "profilo" && (
            <div className="bg-gray-100 p-6 rounded-xl text-gray-900">
              <h2 className="text-teal-700 text-xl font-semibold mb-5">I tuoi dati</h2>
              <p><strong>Nome:</strong> {currentUser.nome}</p>
              <p><strong>Email:</strong> {currentUser.email}</p>
              <p>
                <strong>Indirizzo di spedizione:</strong>{" "}
                {currentUser.ordini?.[0]
                  ? `${currentUser.ordini[0].indirizzo}, ${currentUser.ordini[0].citta} (${currentUser.ordini[0].provincia}) ${currentUser.ordini[0].cap}`
                  : "Non specificato"}
              </p>
            </div>
          )}

          {sezioneAttiva === "ordini" && (
            <div className="bg-gray-100 p-6 rounded-xl text-gray-900">
              <h2 className="text-teal-700 text-xl font-semibold mb-5">I tuoi ordini</h2>
              {ordini.length === 0 ? (
                <p>Non hai ancora effettuato ordini.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {ordini.map((ordine) => (
                    <div
                      key={ordine.id}
                      className="flex-col flex items-center bg-white p-4 rounded-lg shadow-sm w-full gap-3"
                    >
                      <div className="flex items-center bg-white w-full">
                        <img
                          src={ordine.prodotti[0].image}
                          alt={ordine.nome}
                          className="w-16 h-16 object-cover rounded-md mr-5"
                        />
                        <div className="flex-1">
                          <div className="text-lg font-medium text-gray-900">{ordine.nome}</div>
                          <div className="text-gray-500">Numero d'ordine: {ordine.id}</div>
                          <div className={statoClass(ordine.stato)}>Stato: {ordine.stato}</div>
                        </div>
                        <div className="font-semibold text-teal-700 text-lg">{ordine.totale.toFixed(2)} €</div>
                        <button
                          className="text-teal-600 cursor-pointer px-6"
                          onClick={() => setDettagli((prev) => !prev)}
                        >
                          Dettagli
                        </button>
                      </div>
                      {dettagli && (
                        <div className="flex flex-col justify-between w-full">
                          <hr className="text-gray-300 py-2" />
                          {ordine.prodotti.map((prodotto, index) => (
                            <div key={index} className="flex justify-between w-full items-center pr-6">
                              <img
                                className="w-16 h-16 object-cover rounded-md mr-5"
                                src={prodotto.image}
                                alt={prodotto.title}
                              />
                              <p>{prodotto.title}</p>
                              <p>Taglia: {prodotto.taglia}</p>
                              <p>Prezzo: {prodotto.price.toFixed(2)} €</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {sezioneAttiva === "impostazioni" && (
            <div className="bg-gray-100 p-6 rounded-xl text-gray-900">
              <h2 className="text-teal-700 text-xl font-semibold mb-5">Impostazioni account</h2>
              <ul className="list-none p-0 m-0 space-y-3">
                {!modifica ? (
                  <li
                    onClick={() => setModifica(true)}
                    className="bg-gray-200 p-3 rounded-md font-medium cursor-pointer hover:bg-gray-300"
                  >
                    🔒 Cambia password
                  </li>
                ) : (
                  <form onSubmit={handleModifica} className="flex flex-col gap-4">
                    <input
                      onChange={(e) => setPasswordNuova(e.target.value)}
                      type="password"
                      placeholder="Nuova password"
                      className="p-2 rounded border"
                      required
                    />
                    <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
                      Modifica
                    </button>
                  </form>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
