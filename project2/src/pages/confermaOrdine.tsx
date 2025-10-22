import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authProvider";

function ConfermaOrdine() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [ordine, setOrdine] = useState(null);

  useEffect(() => {
    const ordineSalvato = JSON.parse(localStorage.getItem("ordine"));
    setOrdine(ordineSalvato);

    const utenteLS = localStorage.getItem("currentUser");
    if (utenteLS && ordineSalvato) {
      const parsedUser = JSON.parse(utenteLS);

      const ordiniAggiornati = [...(parsedUser.ordini || []), ordineSalvato];
      const utenteAggiornato = {
        ...parsedUser,
        ordini: ordiniAggiornati,
      };

      localStorage.setItem("currentUser", JSON.stringify(utenteAggiornato));
    }

    const timer = setTimeout(() => {
      localStorage.removeItem("ordine");
      localStorage.removeItem("cart");
      navigate("/dashboard");
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!ordine) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold">Caricamento ordine...</h3>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Ordine Confermato!
      </h1>
      <p className="text-gray-700 mb-6">
        Grazie per il tuo acquisto,{" "}
        <strong>{currentUser?.nome || ordine.nome}</strong>!
      </p>

      <div className="bg-gray-100 rounded-lg p-6 text-left shadow-md">
        <h2 className="text-xl font-semibold mb-4">Riepilogo ordine</h2>
        <p><strong>Nome:</strong> {ordine.nome} {ordine.cognome}</p>
        <p><strong>Indirizzo:</strong> {ordine.indirizzo}, {ordine.cap}, {ordine.citta} ({ordine.provincia}), {ordine.paese}</p>
        <p><strong>Pagamento:</strong> Carta **** {ordine.cartaNumero?.slice(-4)}</p>

        <div className="mt-4">
          <h3 className="font-bold mb-2">Prodotti acquistati:</h3>
          <ul className="space-y-3">
            {ordine.prodotti?.map((prodotto, idx) => (
              <li key={idx} className="flex items-center gap-4 border-b pb-2">
                <img
                  src={prodotto.image}
                  alt={prodotto.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{prodotto.title}</p>
                  <p className="text-sm text-gray-600">
                    Taglia: {prodotto.taglia} | Quantità: {prodotto.quantity}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Verrai reindirizzato alla tua dashboard tra pochi secondi...
      </p>
    </div>
  );
}

export default ConfermaOrdine;
