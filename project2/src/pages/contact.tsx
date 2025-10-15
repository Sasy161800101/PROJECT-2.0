import React from "react";

const recensioniFinte = [
  {
    id: 1,
    nome: "Marco R.",
    valutazione: 5,
    commento: "Maglie di altissima qualità, spedizione velocissima! Super soddisfatto.",
  },
  {
    id: 2,
    nome: "Giulia S.",
    valutazione: 4,
    commento: "Servizio clienti gentilissimo, le maglie sono davvero belle e comode.",
  },
  {
    id: 3,
    nome: "Luca P.",
    valutazione: 5,
    commento: "Ottimo rapporto qualità-prezzo, tornerò sicuramente a comprare!",
  },
  {
    id: 4,
    nome: "Sara M.",
    valutazione: 5,
    commento: "Consigliatissimo! Ottima esperienza d'acquisto e prodotti originali.",
  },
];

function AboutContatti() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      <section className="rounded-lg bg-teal-50 p-10 shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-teal-900 text-center">Chi siamo</h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-teal-700">
          Benvenuti su SHope, il tuo negozio online di maglie da calcio ufficiali.
          La nostra passione per il calcio ci guida nella selezione delle migliori maglie, pensate per veri tifosi che vogliono indossare la propria squadra del cuore con orgoglio.
          Da anni offriamo prodotti di qualità, un servizio affidabile e un’esperienza di acquisto semplice e sicura.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Perché scegliere noi?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside text-gray-700 space-y-3">
          <li>🚚 Spedizioni rapide e sicure in tutta Italia, con tracciabilità completa.</li>
          <li>💎 Maglie ufficiali di alta qualità, con materiali tecnici e design esclusivi per veri tifosi.</li>
          <li>📞 Assistenza clienti sempre disponibile per aiutarti in ogni fase dell'acquisto.</li>
          <li>🔄 Resi semplici e veloci, per una completa soddisfazione post-acquisto.</li>
          <li>⚽ Collaborazioni ufficiali con club e brand per garantirti prodotti autentici e aggiornati.</li>
        </ul>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Cosa dicono i nostri clienti</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recensioniFinte.map(({ id, nome, valutazione, commento }) => (
            <div
              key={id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white max-w-md mx-auto"
            >
              <div className="flex items-center mb-2 justify-between">
                <div className="font-semibold text-teal-600 text-sm">{nome}</div>
                <div className="flex space-x-1 text-yellow-400 items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${i < valutazione ? "fill-current" : "stroke-current"}`}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill={i < valutazione ? "currentColor" : "none"}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm">{commento}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Contattaci</h2>
        <div className="flex items-center gap-4 text-gray-700 text-lg">
          <span role="img" aria-label="email" className="text-teal-600 text-2xl">✉️</span>
          <a href="mailto:info@calciomaglie.com" className="hover:underline">
            info@calciomaglie.com
          </a>
        </div>
        <div className="flex items-center gap-4 text-gray-700 text-lg">
          <span role="img" aria-label="telefono" className="text-teal-600 text-2xl">📞</span>
          <a href="tel:+390123456789" className="hover:underline">
            +39 012 345 6789
          </a>
        </div>
      </section>

      <section className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-teal-900 mb-4 text-center">Iscriviti alla newsletter</h2>
        <form className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Inserisci la tua email"
            className="flex-grow p-3 rounded border border-teal-300 focus:outline-none focus:border-teal-500"
            required
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
          >
            Iscriviti
          </button>
        </form>
      </section>
    </div>
  );
}

export default AboutContatti;

