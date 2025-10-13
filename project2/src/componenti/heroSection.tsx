import { NavLink } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Maglie da Calcio Ufficiali
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Scopri la collezione 2023/2025 delle squadre più iconiche d'Europa.
                Acquista ora le maglie originali e vivi la tua passione.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/products"
                className="group inline-flex items-center justify-center rounded-md bg-teal-600 px-50 py-3 text-white text-lg font-medium transition-transform hover:bg-teal-700"
              >
                Scopri le Maglie
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NavLink>

              {/* <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-teal-600 px-6 py-3 text-lg font-medium text-teal-600 hover:bg-teal-50"
              >
                Filtra per Squadra
              </a> */}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex justify-center">
  <img
    src="https://images.unsplash.com/photo-1668791160369-d20b8175eab2?crop=entropy&cs=tinysrgb&fit=max&f"
    alt="Maglie da calcio"
    className="h-80 w-auto object-cover rounded-xl shadow-lg"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  )
}
