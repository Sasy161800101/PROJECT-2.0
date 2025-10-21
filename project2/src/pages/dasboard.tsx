import { useState } from "react";
import { useAuth } from "../context/authProvider";

export function Dashboard() {
  const { logoutUtente, currentUser, aggiornaEmail, aggiornaPassword, aggiornaIndirizzo } = useAuth();
  const [sezioneAttiva, setSezioneAttiva] = useState("");
  const[ordini, setOrdini] = useState(JSON.parse(localStorage.getItem("currentUser")).ordini || [])

  const statoClass = (stato) => {
    if (stato === "Consegna completata") return "text-green-600 font-semibold mt-1";
    if (stato === "Spedito") return "text-orange-500 font-semibold mt-1";
    return "text-gray-600 font-semibold mt-1";
  };

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
          {sezioneAttiva === "profilo" && currentUser && (
            <div className="bg-gray-100 p-6 rounded-xl text-gray-900">
              <h2 className="text-teal-700 text-xl font-semibold mb-5">I tuoi dati</h2>
              <p><strong>Nome:</strong> {currentUser.nome}</p>
              <p><strong>Email:</strong> {currentUser.email}</p>
              <p><strong>Indirizzo di spedizione:</strong> {currentUser.indirizzo || "Non specificato"}</p>
            </div>
          )}

          {sezioneAttiva === "ordini" && (
            <div className="bg-gray-100 p-6 rounded-xl text-gray-900">
              <h2 className="text-teal-700 text-xl font-semibold mb-5">I tuoi ordini</h2>
              <div className="flex flex-col gap-4">
                {ordini.map((ordine) => (
                  <div
                    key={ordine.id}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                  >
                    <img
                      src={ordine.img}
                      alt={ordine.nome}
                      className="w-16 h-16 object-cover rounded-md mr-5"
                    />
                    <div className="flex-1">
                      <div className="text-lg font-medium text-gray-900">{ordine.nome}</div>
                      <div className="text-gray-500">Taglia: {ordine.taglia}</div>
                      <div className={statoClass(ordine.stato)}>Stato: {ordine.stato}</div>
                    </div>
                    <div className="font-semibold text-teal-700 text-lg">{ordine.totale}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {sezioneAttiva === "impostazioni" && (
            <div className="bg-gray-100 p-6 rounded-xl text-gray-900">
              <h2 className="text-teal-700 text-xl font-semibold mb-5">Impostazioni account</h2>
              <ul className="list-none p-0 m-0 space-y-3">
                <li className="bg-gray-200 p-3 rounded-md font-medium cursor-pointer hover:bg-gray-300">📧 Cambia email</li>
                <li className="bg-gray-200 p-3 rounded-md font-medium cursor-pointer hover:bg-gray-300">🔒 Cambia password</li>
                <li className="bg-gray-200 p-3 rounded-md font-medium cursor-pointer hover:bg-gray-300">🏠 Cambia indirizzo di spedizione</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
