import { useEffect, useState } from "react";
import { useAuth } from "../context/authProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Accordion } from "../componenti/accordion";
import { Section } from "../componenti/section";
import { Prodotto } from "../componenti/prodotto";

export function Dashboard() {
  const { currentUser: userFromContext } = useAuth();

  const [currentUser, setCurrentUser] = useState(() => {
    const userLS = localStorage.getItem("currentUser");
    return userLS ? JSON.parse(userLS) : userFromContext;
  });

  const [modifica, setModifica] = useState(false);
  const [passwordAttuale, setPasswordAttuale] = useState("");
  const [passwordNuova, setPasswordNuova] = useState("");
  const [sezioneAttiva, setSezioneAttiva] = useState("profilo");
  const [ordini, setOrdini] = useState([]);

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
    const conferma = document.getElementById("confirmPassword").value;

    if (!currentUser) {
      toast.info("Devi essere loggato per modificare la password!");
      return;
    }

    if (currentUser.password !== passwordAttuale) {
      toast.info("❌ Password attuale errata!");
      return;
    }

    const regex = {
      length: /.{8,}/,
      upper: /[A-Z]/,
      number: /[0-9]/,
      symbol: /[!@#$%^&*]/,
    };

    if (!regex.length.test(passwordNuova)) {
      toast.info("La password deve avere almeno 8 caratteri");
      return;
    }
    if (!regex.upper.test(passwordNuova)) {
      toast.info("La password deve contenere almeno una lettera maiuscola");
      return;
    }
    if (!regex.number.test(passwordNuova)) {
      toast.info("La password deve contenere almeno un numero");
      return;
    }
    if (!regex.symbol.test(passwordNuova)) {
      toast.info("La password deve contenere almeno un simbolo (!@#$%^&*)");
      return;
    }
    if (passwordNuova !== conferma) {
      toast.info("Le password non coincidono!");
      return;
    }

    const utenteAggiornato = { ...currentUser, password: passwordNuova };
    localStorage.setItem("currentUser", JSON.stringify(utenteAggiornato));

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex((u) => u.id === utenteAggiornato.id);
    if (index !== -1) users[index] = utenteAggiornato;
    else users.push(utenteAggiornato);
    localStorage.setItem("users", JSON.stringify(users));

    setModifica(false);
    setPasswordAttuale("");
    setPasswordNuova("");

    toast.success("✅ Password modificata con successo!");
  }

  return (
    <div className="min-h-[80vh] bg-white p-10 text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-semibold text-teal-700">Dashboard Utente</h1>
        </div>

        <div className="grid md:gap-5 gap-2 grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          <div
            onClick={() => setSezioneAttiva(sezioneAttiva === "profilo" ? "" : "profilo")}
            className={`${sezioneAttiva === "profilo" ? "bg-gray-300" : "bg-gray-200"} hover:bg-gray-300 p-2 md:p-6 rounded-xl shadow-md cursor-pointer transition-colors`}
          >
            <h2 className="text-teal-700 text-md md:text-lg font-semibold md:mb-2">Benvenuto!</h2>
            <p className="hidden md:block text-gray-900">Visualizza i tuoi dati personali</p>
          </div>

          <div
            onClick={() => setSezioneAttiva(sezioneAttiva === "ordini" ? "" : "ordini")}
            className={`${sezioneAttiva === "ordini" ? "bg-gray-300" : "bg-gray-200"} hover:bg-gray-300 p-2 md:p-6 rounded-xl shadow-md cursor-pointer transition-colors`}
          >
            <h2 className="text-teal-700 text-md md:text-lg font-semibold md:mb-2">I miei ordini</h2>
            <p className="hidden md:block text-gray-900">Controlla gli ordini che hai effettuato</p>
          </div>

          <div
            onClick={() => setSezioneAttiva(sezioneAttiva === "impostazioni" ? "" : "impostazioni")}
            className={`${sezioneAttiva === "impostazioni" ? "bg-gray-300" : "bg-gray-200"} hover:bg-gray-300 p-2 md:p-6 rounded-xl shadow-md cursor-pointer transition-colors`}
          >
            <h2 className="text-teal-700 text-md md:text-lg font-semibold md:mb-2">Impostazioni</h2>
            <p className="hidden md:block text-gray-900">Gestisci il tuo account</p>
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
                  <Accordion>

                    {ordini.map((ordine) => (

                      <Section ordine={ordine}>

                        <Prodotto prodotti={ordine.prodotti}></Prodotto>

                      </Section>

                    ))}

                  </Accordion>
                </div>
              )}
            </div>
          )}

          {sezioneAttiva === "impostazioni" && (
            <div className="bg-gray-100 p-6 rounded-xl text-gray-900 w-full shadow-md">
              <h2 className="text-teal-700 text-xl font-semibold mb-6 text-center">
                Impostazioni Account
              </h2>

              {!modifica ? (
                <button
                  onClick={() => setModifica(true)}
                  className="cursor-pointer bg-teal-600 text-white py-3 px-3 rounded-md font-medium hover:bg-teal-700 transition-colors"
                >
                  Cambia Password
                </button>
              ) : (
                <form
                  onSubmit={handleModifica}
                  className="max-w-2xl mx-auto space-y-6 border-t border-gray-300 pt-6"
                >
                  <div className="space-y-2">
                    <label className="block font-medium text-gray-700">
                      Password Attuale
                    </label>
                    <input
                      type="password"
                      value={passwordAttuale}
                      onChange={(e) => setPasswordAttuale(e.target.value)}
                      placeholder="Inserisci la tua password attuale"
                      className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600 hover:bg-gray-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-medium text-gray-700">
                      Nuova Password
                    </label>
                    <input
                      type="password"
                      value={passwordNuova}
                      onChange={(e) => setPasswordNuova(e.target.value)}
                      placeholder="Minimo 8 caratteri, una maiuscola, un numero e un simbolo"
                      className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600 hover:bg-gray-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-medium text-gray-700">
                      Conferma Nuova Password
                    </label>
                    <input
                      type="password"
                      placeholder="Ripeti la nuova password"
                      className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600 hover:bg-gray-300"
                      required
                      id="confirmPassword"
                    />
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setModifica(false)}
                      className="cursor-pointer px-5 py-2.5 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                    >
                      Annulla
                    </button>
                    <button
                      type="submit"
                      className="cursor-pointer px-5 py-2.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
                    >
                      Salva Password
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}