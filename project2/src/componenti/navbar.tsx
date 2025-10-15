import { Link, NavLink } from "react-router-dom"
import CartIcon from "./cartIcon"

function Navbar() {
    return(<>
    <header className="bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <NavLink className="block text-teal-600 dark:text-teal-600" to="/">
          <span className="sr-only">Home</span>
           <svg  version="1.0" xmlns="http://www.w3.org/2000/svg"  width="210.000000pt" height="70.000000pt" viewBox="0 0 300.000000 200.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#0d9488" stroke="none"> <path d="M480 1355 c-21 -25 5 -45 60 -45 26 0 52 -6 58 -12 6 -7 30 -83 55 -168 25 -85 46 -160 48 -165 2 -6 -4 -29 -15 -52 -20 -45 -16 -87 8 -96 28 -11 447 -10 458 1 6 6 8 18 5 26 -6 14 -35 16 -217 16 -142 0 -210 3 -210 11 0 6 5 19 10 30 10 18 23 19 205 19 248 0 230 -13 260 182 18 118 18 103 -1 122 -13 14 -52 16 -270 16 l-254 0 -11 45 c-16 63 -47 85 -119 85 -39 0 -62 -5 -70 -15z m387 -187 c-24 -62 -80 -194 -83 -197 -11 -12 -33 31 -54 104 -12 44 -25 86 -27 93 -4 9 16 12 82 12 66 0 86 -3 82 -12z m119 -90 l-42 -103 -47 -3 c-26 -2 -47 1 -47 5 0 5 15 44 33 88 19 44 36 88 40 98 5 13 18 17 56 17 l50 0 -43 -102z m169 80 c-3 -13 -10 -54 -15 -93 -6 -38 -16 -75 -22 -82 -6 -8 -33 -13 -64 -13 l-54 0 16 38 c9 20 28 67 42 104 27 67 28 68 65 68 34 0 37 -2 32 -22z"/> <path d="M1360 1179 c-19 -4 -45 -19 -57 -34 -50 -58 -15 -116 87 -143 67 -18 85 -37 60 -67 -25 -30 -110 -10 -110 26 0 5 -16 9 -35 9 -40 0 -40 -1 -20 -40 32 -61 132 -80 196 -37 27 18 35 30 37 59 5 56 -11 76 -76 93 -110 31 -127 48 -77 81 21 14 31 15 51 6 13 -7 27 -19 30 -27 4 -9 19 -15 40 -15 39 0 39 1 19 39 -21 41 -84 63 -145 50z"/> <path d="M1550 1025 l0 -155 33 3 32 3 -3 62 -4 62 72 0 71 0 -2 -62 -3 -62 32 -2 32 -2 0 154 0 154 -33 0 -33 0 4 -63 4 -63 -72 0 -72 0 5 63 5 63 -34 0 -34 0 0 -155z m50 5 c0 -11 -4 -20 -10 -20 -5 0 -10 9 -10 20 0 11 5 20 10 20 6 0 10 -9 10 -20z m175 -10 c-5 -8 -11 -8 -17 -2 -6 6 -7 16 -3 22 5 8 11 8 17 2 6 -6 7 -16 3 -22z"/> <path d="M1888 1084 c-15 -8 -32 -23 -38 -34 -13 -24 -13 -106 0 -131 14 -25 62 -49 100 -49 70 0 110 45 110 121 0 58 -51 109 -106 109 -22 -1 -51 -7 -66 -16z m93 -45 c31 -31 23 -98 -13 -119 -26 -14 -29 -13 -50 7 -31 31 -30 89 1 114 29 24 36 24 62 -2z"/> <path d="M2090 1098 c-1 -2 -2 -69 -3 -151 l-2 -147 30 0 c30 0 30 0 26 51 l-3 52 23 -17 c29 -20 61 -20 98 -1 65 33 66 170 2 205 -28 15 -73 12 -99 -6 -20 -14 -22 -14 -22 0 0 10 -9 16 -25 16 -14 0 -25 -1 -25 -2z m150 -67 c25 -47 -2 -121 -44 -121 -20 0 -56 48 -56 74 0 57 75 92 100 47z"/> <path d="M2381 1086 c-70 -39 -67 -172 4 -204 43 -20 90 -15 124 14 17 14 31 30 31 35 0 15 -57 10 -70 -6 -17 -21 -46 -19 -70 5 -34 34 -24 40 65 40 l85 0 -6 33 c-4 17 -13 42 -21 55 -25 40 -95 54 -142 28z m92 -48 l22 -23 -33 -3 c-18 -2 -45 -2 -60 0 l-27 3 23 23 c12 12 29 22 37 22 8 0 25 -10 38 -22z"/> <path d="M752 764 c-28 -19 -30 -74 -4 -97 27 -25 78 -22 96 5 22 31 20 64 -6 88 -26 24 -56 26 -86 4z m66 -48 c4 -21 -14 -37 -34 -29 -16 6 -26 32 -18 44 10 17 49 5 52 -15z"/> <path d="M1022 764 c-28 -19 -30 -74 -4 -97 64 -58 151 33 89 91 -27 26 -54 28 -85 6z m66 -37 c13 -15 4 -31 -20 -40 -19 -7 -39 19 -31 41 6 16 38 16 51 -1z"/> </g> 
           </svg> 
        </NavLink>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global" className="flex items-center gap-6">
  <ul className="flex items-center gap-6 text-sm">
    <li>
      <NavLink className="text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" to="/">Home</NavLink>
    </li>
    <li>
      <NavLink className="text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" to="/products">Prodotti</NavLink>
    </li>
    <li>
      <NavLink className="text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" to="/about">Preferiti</NavLink>
    </li>
    <li>
      <NavLink className="text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" to="/contact">Contatti</NavLink>
    </li>
  </ul>
</nav>
      </div>
      <div className="flex items-center gap-4">
        <CartIcon></CartIcon>
        <div className="sm:flex sm:gap-4">
          <Link
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500"
            to="/login"
          >
            Login
          </Link>

          <div className="hidden sm:flex">
            <Link
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              to="/registrazione"
            >
              Registrati
            </Link>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    </>)
}

export default Navbar