import React, { useState } from "react";
import "../index.css";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    indirizzo: "",
    citta: "",
    provincia: "",
    stato: "",
    paese: "",
    cap: "",
    spedizione: "free",
    cartaNumero: "",
    cartaNome: "",
    cartaScadenza: "",
    cartaCVV: "",
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="checkout-container">
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
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cognome"
              placeholder="Cognome"
              value={formData.cognome}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="indirizzo"
            placeholder="Indirizzo"
            value={formData.indirizzo}
            onChange={handleChange}
          />

          <div className="row">
            <input
              type="text"
              name="citta"
              placeholder="Città"
              value={formData.citta}
              onChange={handleChange}
            />
            <input
              type="text"
              name="provincia"
              placeholder="Provincia"
              value={formData.provincia}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              name="stato"
              placeholder="Stato"
              value={formData.stato}
              onChange={handleChange}
            />
            <input
              type="text"
              name="paese"
              placeholder="Paese"
              value={formData.paese}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="cap"
            placeholder="Codice Postale"
            value={formData.cap}
            onChange={handleChange}
          />

          <div className="shipping-methods">
            {["free", "express", "1day"].map((method) => {
              const labelText =
                method === "free"
                  ? "Spedizione gratuita"
                  : method === "express"
                  ? "Express"
                  : "In un giorno";
              return (
                <label
                  key={method}
                  className={`shipping-label ${
                    formData.spedizione === method ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="spedizione"
                    value={method}
                    checked={formData.spedizione === method}
                    onChange={handleChange}
                  />
                  {labelText}
                </label>
              );
            })}
          </div>

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
            type="text"
            name="cartaNumero"
            placeholder="Numero Carta"
            value={formData.cartaNumero}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cartaNome"
            placeholder="Nome sul Carta"
            value={formData.cartaNome}
            onChange={handleChange}
          />
          <div className="row">
            <input
              type="text"
              name="cartaScadenza"
              placeholder="MM/AA"
              value={formData.cartaScadenza}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cartaCVV"
              placeholder="CVV"
              value={formData.cartaCVV}
              onChange={handleChange}
            />
          </div>

          <div className="buttons-row">
            <button className="back-btn" onClick={handleBack}>
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
            <button className="back-btn" onClick={handleBack}>
              Indietro
            </button>
            <button
              className="continue-btn"
              onClick={() => alert("Ordine completato!")}
            >
              Conferma Ordine
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
