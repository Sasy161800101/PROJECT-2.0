import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "./cartIcon";
import { useAuth } from "../context/authProvider";

function Navbar() {
  const { currentUser, logoutUtente } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 relative">
      <div className="mx-auto px-0">
        <div className="flex h-16 items-center justify-between relative">
          <div className="flex-shrink-0">
            <NavLink className="block text-teal-600 dark:text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <svg
                width="200"
                height="70"
                viewBox="0 0 200 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.698234 1.44425C-1.32367 3.85134 1.17964 5.77701 6.4751 5.77701C8.9784 5.77701 11.4817 6.35471 12.0594 6.93241C12.6371 7.60639 14.9478 14.9239 17.3549 23.108C19.7619 31.2921 21.7838 38.5134 21.9763 38.9948C22.1689 39.5725 21.5912 41.787 20.5321 44.0015C18.6065 48.3343 18.9916 52.3782 21.3024 53.2447C23.9982 54.3038 64.34 54.2076 65.3991 53.1484C65.9768 52.5707 66.1693 51.4153 65.8805 50.6451C65.3028 49.2971 62.5107 49.1045 44.9875 49.1045C31.3156 49.1045 24.7685 48.8157 24.7685 48.0454C24.7685 47.4677 25.2499 46.216 25.7313 45.1569C26.6941 43.4238 27.9458 43.3275 45.4689 43.3275C69.3466 43.3275 67.6136 44.5792 70.502 25.804C72.235 14.4425 72.235 15.8868 70.4057 14.0574C69.1541 12.7094 65.3991 12.5168 44.4098 12.5168H19.9544L18.8954 8.18409C17.3549 2.11824 14.3701 2.55005e-06 7.43791 2.55005e-06C3.68295 2.55005e-06 1.46848 0.48142 0.698234 1.44425ZM37.959 19.4492C35.6483 25.4188 30.2565 38.1282 29.9677 38.4171C28.9086 39.5725 26.7904 35.4323 24.7685 28.4036C23.6131 24.1671 22.3615 20.1232 22.1689 19.4492C21.7838 18.5827 23.7094 18.2938 30.064 18.2938C36.4185 18.2938 38.3441 18.5827 37.959 19.4492ZM49.4164 28.1148L45.3726 38.0319L40.8474 38.3208C38.3441 38.5134 36.3222 38.2245 36.3222 37.8394C36.3222 37.358 37.7664 33.6029 39.4995 29.3664C41.3288 25.13 42.9656 20.8935 43.3507 19.9307C43.8321 18.679 45.0838 18.2938 48.7425 18.2938H53.5565L49.4164 28.1148ZM65.6879 20.4121C65.3991 21.6638 64.7251 25.6114 64.2437 29.3664C63.666 33.0252 62.7032 36.5877 62.1255 37.2617C61.5479 38.0319 58.9483 38.5134 55.9636 38.5134H50.7644L52.3049 34.8546C53.1714 32.9289 55.0007 28.4036 56.3487 24.8411C58.9483 18.3901 59.0445 18.2938 62.6069 18.2938C65.8805 18.2938 66.1693 18.4864 65.6879 20.4121Z"
                  fill="#0D9488"
                />
                <path
                  d="M85.4254 18.3901C83.596 18.7752 81.0927 20.2194 79.9374 21.6637C75.1233 27.2481 78.4931 32.8326 88.3138 35.4322C94.7646 37.1653 96.4977 38.9947 94.0907 41.8832C91.6837 44.7717 83.4998 42.846 83.4998 39.3798C83.4998 38.8984 81.9593 38.5133 80.1299 38.5133C76.2787 38.5133 76.2787 38.6096 78.2043 42.3646C81.2853 48.2379 90.9134 50.0673 97.0754 45.9271C99.675 44.194 100.445 43.0386 100.638 40.2464C101.119 34.8545 99.5787 32.9289 93.3204 31.292C82.7295 28.3072 81.0927 26.6704 85.9068 23.4931C87.9287 22.1451 88.8915 22.0488 90.8171 22.9154C92.0688 23.5894 93.4167 24.7448 93.7056 25.515C94.0907 26.3816 95.5349 26.9593 97.5568 26.9593C101.312 26.9593 101.312 26.863 99.3861 23.2042C97.3642 19.2566 91.2985 17.1384 85.4254 18.3901Z"
                  fill="#0D9488"
                />
                <path
                  d="M103.719 33.2178V48.1417L106.896 47.8529L109.977 47.564L109.688 41.5945L109.303 35.6249H116.235H123.071L122.879 41.5945L122.59 47.564L125.671 47.7566L128.752 47.9492V33.1215V18.2939H125.575H122.397L122.782 24.3597L123.168 30.4256H116.235H109.303L109.784 24.3597L110.266 18.2939H106.992H103.719V33.2178ZM108.533 32.7364C108.533 33.7955 108.148 34.6621 107.57 34.6621C107.089 34.6621 106.607 33.7955 106.607 32.7364C106.607 31.6773 107.089 30.8107 107.57 30.8107C108.148 30.8107 108.533 31.6773 108.533 32.7364ZM125.382 33.6992C124.901 34.4695 124.323 34.4695 123.745 33.8918C123.168 33.3141 123.071 32.3512 123.456 31.7735C123.938 31.0033 124.515 31.0033 125.093 31.581C125.671 32.1587 125.767 33.1215 125.382 33.6992Z"
                  fill="#0D9488"
                />
                <path
                  d="M136.262 27.5371C134.818 28.3073 133.181 29.7516 132.603 30.8107C131.352 33.1215 131.352 41.0168 132.603 43.4238C133.951 45.8309 138.573 48.1417 142.231 48.1417C148.971 48.1417 152.822 43.809 152.822 36.4914C152.822 30.907 147.912 25.9965 142.617 25.9965C140.498 26.0928 137.706 26.6705 136.262 27.5371ZM145.216 31.8698C148.201 34.8546 147.431 41.3056 143.964 43.3276C141.461 44.6755 141.172 44.5792 139.15 42.6536C136.166 39.6688 136.262 34.0843 139.247 31.6773C142.039 29.3665 142.713 29.3665 145.216 31.8698Z"
                  fill="#0D9488"
                />
                <path
                  d="M155.711 26.189C155.615 26.3816 155.518 32.8326 155.422 40.7278L155.229 54.8815H158.118C161.006 54.8815 161.006 54.8815 160.621 49.971L160.332 44.9643L162.547 46.6011C165.339 48.5268 168.42 48.5268 171.982 46.6974C178.241 43.52 178.337 30.3292 172.175 26.9593C169.479 25.515 165.146 25.8039 162.643 27.537C160.718 28.885 160.525 28.885 160.525 27.537C160.525 26.5742 159.658 25.9965 158.118 25.9965C156.77 25.9965 155.711 26.0927 155.711 26.189ZM170.153 32.64C172.56 37.1653 169.96 44.2903 165.917 44.2903C163.991 44.2903 160.525 39.6687 160.525 37.1653C160.525 31.6772 167.746 28.3073 170.153 32.64Z"
                  fill="#0D9488"
                />
                <path
                  d="M183.729 27.3444C176.989 31.0994 177.278 43.9051 184.114 46.9862C188.254 48.9119 192.779 48.4304 196.053 45.6382C197.689 44.2903 199.037 42.7497 199.037 42.2683C199.037 40.8241 193.549 41.3055 192.298 42.846C190.661 44.868 187.869 44.6754 185.558 42.3646C182.284 39.091 183.247 38.5133 191.816 38.5133H200L199.422 35.3359C199.037 33.6991 198.171 31.292 197.4 30.0403C194.993 26.189 188.254 24.841 183.729 27.3444ZM192.586 31.966L194.705 34.1805L191.527 34.4694C189.794 34.6619 187.195 34.6619 185.75 34.4694L183.151 34.1805L185.365 31.966C186.521 30.8106 188.158 29.8477 188.928 29.8477C189.698 29.8477 191.335 30.8106 192.586 31.966Z"
                  fill="#0D9488"
                />
                <path
                  d="M26.8865 58.3477C24.1907 60.1771 23.9981 65.4727 26.5014 67.6872C29.101 70.0943 34.0113 69.8054 35.7444 67.2058C37.8626 64.221 37.67 61.0436 35.1667 58.7328C32.6634 56.422 29.775 56.2295 26.8865 58.3477ZM33.2411 62.9693C33.6262 64.9912 31.8932 66.5318 29.9675 65.7615C28.427 65.1838 27.4642 62.6804 28.2345 61.525C29.1973 59.8882 32.9523 61.0436 33.2411 62.9693Z"
                  fill="#0D9488"
                />
                <path
                  d="M52.8826 58.3476C50.1868 60.177 49.9942 65.4726 52.4975 67.6871C58.6595 73.2716 67.036 64.5098 61.0665 58.9253C58.4669 56.422 55.8674 56.2294 52.8826 58.3476ZM59.2372 61.9101C60.4888 63.3544 59.6223 64.8949 57.3116 65.7615C55.4822 66.4354 53.5566 63.9321 54.3269 61.8138C54.9045 60.2733 57.9855 60.2733 59.2372 61.9101Z"
                  fill="#0D9488"
                />
              </svg>
            </NavLink>
          </div>

          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <NavLink
              className="text-gray-500 hover:text-gray-500/75 dark:text-white"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="text-gray-500 hover:text-gray-500/75 dark:text-white"
              to="/products"
            >
              Prodotti
            </NavLink>
            <NavLink
              className="text-gray-500 hover:text-gray-500/75 dark:text-white"
              to="/preferiti"
            >
              Preferiti
            </NavLink>
            <NavLink
              className="text-gray-500 hover:text-gray-500/75 dark:text-white"
              to="/contact"
            >
              Contatti
            </NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <CartIcon />
            {!currentUser ? (
              <>
                <Link
                  className="transition-transform hover:bg-teal-700 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  to="/registrazione"
                >
                  Registrati
                </Link>
              </>
            ) : (
              <>
                <button
                  className="cursor-pointer transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  onClick={logoutUtente}
                >
                  Logout
                </button>
                <Link
                  className="transition-transform hover:bg-gray-300 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>
          <div className="lg:hidden flex gap-3 items-center">
          <div>
            <CartIcon />
          </div>

          <div>
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer inline-flex items-center justify-center h-10 w-10 rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute w-full shadow-sm z-40 lg:hidden px-4 pt-16 pb-4 space-y-2 bg-white dark:bg-gray-900"
        >
          <NavLink
            className="block text-gray-500 hover:text-gray-700 dark:text-white"
            to="/"
            onClick={() =>{
              setIsOpen(false)
              window.scrollTo({ top: 0 })
            }}
          >
            Home
          </NavLink>
          <NavLink
            className="block text-gray-500 hover:text-gray-700 dark:text-white"
            to="/products"
            onClick={() =>{
              setIsOpen(false)
              window.scrollTo({ top: 0 })
            }}
          >
            Prodotti
          </NavLink>
          <NavLink
            className="block text-gray-500 hover:text-gray-700 dark:text-white"
            to="/preferiti"
            onClick={() =>{
              setIsOpen(false)
              window.scrollTo({ top: 0 })
            }}
          >
            Preferiti
          </NavLink>
          <NavLink
            className="block text-gray-500 hover:text-gray-700 dark:text-white"
            to="/contact"
            onClick={() =>{
              setIsOpen(false)
              window.scrollTo({ top: 0 })
            }}
          >
            Contatti
          </NavLink>

          {!currentUser ? (
            <>
              <Link
                className="block text-teal-600 px-4 rounded text-center"
                to="/login"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                className="block text-teal-600 px-4 rounded text-center"
                to="/registrazione"
                onClick={() => setIsOpen(false)}
              >
                Registrati
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  logoutUtente();
                  setIsOpen(false);
                }}
                className="block bg-white text-teal-600 px-4 rounded text-center w-full cursor-pointer"
              >
                Logout
              </button>
              <Link
                className="block bg-white text-teal-600 px-4 rounded text-center"
                to="/dashboard"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
