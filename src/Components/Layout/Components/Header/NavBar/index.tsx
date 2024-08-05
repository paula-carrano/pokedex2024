export const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Poké_Ball_icon.svg"
              className="h-8"
              alt="Pokeball"
            />
            <span className="title_p text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pokedex
            </span>
          </div>
          <div className="mt-4 md:mt-0 md:flex-1 md:flex md:justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
