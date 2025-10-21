import { useEffect, useState } from "react";
import "../index.css";
import { useAuth } from "../context/authProvider";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [ordine, setOrdine] = useState(JSON.parse(localStorage.getItem("ordine")) || null)
  const {currentUser, users} = useAuth()
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    indirizzo: "",
    citta: "",
    provincia: "",
    stato: "",
    paese: "",
    cap: "",
    cartaNumero: "",
    cartaNome: "",
    cartaScadenza: "",
    cartaCVV: "",
  });

  function validazioneStep1() {
  const requiredFields = ["nome", "cognome", "indirizzo", "citta", "provincia", "paese", "cap"];
  for (let field of requiredFields) {
    if (!formData[field]?.trim()) {
      toast.error("Compila tutti i campi obbligatori dello Step 1");
      return false;
    }
  }
  return true;
};

function validazioneStep2() {
  const { cartaNumero, cartaNome, cartaScadenza, cartaCVV } = formData;

  if (!cartaNumero?.trim() || !/^\d{12,19}$/.test(cartaNumero.replace(/\s+/g, ""))) {
    toast.error("Numero carta non valido (12-19 cifre)");
    return false;
  }
  if (!cartaNome?.trim()) {
    toast.error("Inserisci il nome sulla carta");
    return false;
  }
  if (!cartaScadenza?.trim() || !/^\d{2}\/\d{2}$/.test(cartaScadenza)) {
    toast.error("Formato scadenza non valido (MM/AA)");
    return false;
  }
  if (!cartaCVV?.trim() || !/^\d{3,4}$/.test(cartaCVV)) {
    toast.error("CVV non valido (3 o 4 cifre)");
    return false;
  }

  return true;
};

  const handleNext = () => {
  if (step === 1 && !validazioneStep1()) return;
  if (step === 2 && !validazioneStep2()) return;
  if (step < 3) setStep(step + 1);
};

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  function handlePaga(){
    setOrdine( prev => ({...prev, ...formData}) )
  }
useEffect(() => {localStorage.setItem("ordine", JSON.stringify(ordine)) 
    const userAggiornato = {...currentUser , ordini: []}
    userAggiornato.ordini.push(ordine)
    localStorage.setItem("currentUser",JSON.stringify(userAggiornato) )
    const userExist = users.find((user) => user.id == userAggiornato.id)
    if(userExist){
        const usersCopia = [...users]
        const index = usersCopia.indexOf(userExist)
        usersCopia.splice(index, 1, userAggiornato)
        localStorage.setItem("users", JSON.stringify(usersCopia))
        console.log("aggiornamento avvenuto con sucecsso")
    }

}, [ordine])

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between w-full gap-6">
    <div className="checkout-container flex-1">
        
      <div className="steps">
        {["Spedizione", "Pagamento", "Conferma"].map((label, index) => {
          const current = index + 1;
          return (
            <div key={label} className="step">
              <div className={`circle ${step >= current ? "active" : ""}`}>
                {current}
              </div>
              <div className="label">{label}</div>
            </div>
          );
        })}
      </div>
      {step === 1 && (
        <div className="form">
          <div className="row">
            <input
            className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <input
              className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
              type="text"
              name="cognome"
              placeholder="Cognome"
              value={formData.cognome}
              onChange={handleChange}
              required
            />
          </div>

          <input
            className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
            type="text"
            name="indirizzo"
            placeholder="Indirizzo"
            value={formData.indirizzo}
            onChange={handleChange}
            required
          />

          <div className="row">
            <input
              className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
              type="text"
              name="citta"
              placeholder="Città"
              value={formData.citta}
              onChange={handleChange}
              required
            />
            <input
              className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
              type="text"
              name="provincia"
              placeholder="Provincia"
              value={formData.provincia}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input
              className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
              type="text"
              name="paese"
              placeholder="Paese"
              value={formData.paese}
              onChange={handleChange}
              required
            />
          </div>

          <input
            className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
            type="text"
            name="cap"
            placeholder="Codice Postale"
            value={formData.cap}
            onChange={handleChange}
            required
          />

        

          <div className="buttons-row">
            <button className="continue-btn" onClick={handleNext}>
              Continua
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form">
          <input
            className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
            type="text"
            name="cartaNumero"
            placeholder="Numero Carta"
            value={formData.cartaNumero}
            onChange={handleChange}
            required
          />
          <input
            className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
            type="text"
            name="cartaNome"
            placeholder="Nome sul Carta"
            value={formData.cartaNome}
            onChange={handleChange}
            required
          />
          <div className="row">
            <input
              className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
              type="text"
              name="cartaScadenza"
              placeholder="MM/AA"
              value={formData.cartaScadenza}
              onChange={handleChange}
              required
            />
            <input
              className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium !border-none"
              type="text"
              name="cartaCVV"
              placeholder="CVV"
              value={formData.cartaCVV}
              onChange={handleChange}
              required
            />
          </div>

          <div className="buttons-row">
            <button className="flex-1 transition-transform hover:bg-gray-300 rounded-md bg-gray-200 text-sm font-bold cursor-pointer" onClick={handleBack}>
              Indietro
            </button>
            <button className="continue-btn" onClick={handleNext}>
              Continua
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step-placeholder">
          <h2>Conferma ordine</h2>
          <p>
            Nome: {formData.nome} {formData.cognome}
          </p>
          <p>
            Indirizzo: {formData.indirizzo}, {formData.citta}
          </p>
          <p>
            Spedizione:{" "}
            {formData.spedizione === "free" ? "Gratuita" : formData.spedizione}
          </p>
          <p>
            Pagamento con carta: **** **** ****{" "}
            {formData.cartaNumero.slice(-4)}
          </p>
          <div className="buttons-row">
            <button className="flex-1 transition-transform hover:bg-gray-300 rounded-md bg-gray-200 text-sm font-bold cursor-pointer" onClick={handleBack}>
              Indietro
            </button>
            <button
              className="continue-btn"
              onClick={handlePaga}
            >
              Conferma Ordine
            </button>
          </div>
        </div>
      )}
    </div>
    
    <div className="flex-1">
<div
  className="relative w-full border border-gray-300 rounded-md px-4 py-8 sm:px-6 lg:px-8"
  aria-modal="true"
  role="dialog"
  tabIndex="-1">


  <div className="mt-4 space-y-6">
    <ul className="space-y-4">
        {ordine && ordine.prodotti.map((prodotto)=> (      
        <li className="flex items-center gap-4">
        <img
          src= {prodotto.image}
          alt={prodotto.title}
          className="size-16 rounded-sm object-cover"
        />

        <div className="text-left">
          <h3 className="ftext-sm text-gray-900">{prodotto.title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Taglia: </dt>
              <dd className="inline font-bold">{prodotto.taglia}</dd>
            </div>

            <div>
              <dt className="inline">Quantità: </dt>
              <dd className="inline font-bold">{prodotto.quantity}</dd>
            </div>
          </dl>
        </div>
      </li>
    ))}

    </ul>

  </div>
</div>
    </div>
    </div>
  );
};

export default Checkout;
