import { NavLink } from "react-router-dom";

export function HeroSection() {
  return (
    <section className=" bg-gradient-to-br from-teal-50 to-teal-100 py-10 relative flex items-center justify-center overflow-hidden">
  <div className="text-center px-4">
    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
      Maglie da Calcio Ufficiali
    </h1>
    <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
      Scopri la collezione 2023/2025 delle squadre più iconiche d'Europa.  
      Acquista ora le maglie originali e vivi la tua passione.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <NavLink
        to="/products"
        className="group inline-flex items-center justify-center rounded-md bg-teal-600 px-8 py-3 text-white text-lg font-medium transition-transform hover:bg-teal-700"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </NavLink>
    </div>
  </div>
</section>
  )
}
