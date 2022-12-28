const index = () => {
  return (
    <header className="sticky top-0 z-30 bg-white  ring-1 ring-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 mobile:px-4 desktop:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 desktop:px-0 truncate">
            <a href="#" className="flex-shrink-0 flex items-center text-[#0A0A2F] text-3xl mobile:text-2xl font-bold">
              SecureVote
            </a>
            <div className="hidden desktop:ml-8 desktop:flex desktop:space-x-8">
              <a
                href="#"
                className="border-transparent text-[#0A0A2F] hover:border-[#0A0A2F] hover:text-[#0A0A2F] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium whitespace-nowrap"
              >
                Create Poll
              </a>
              <a
                href="#"
                className="border-transparent text-[#0A0A2F] hover:border-[#0A0A2F] hover:text-[#0A0A2F] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium whitespace-nowrap"
              >
                Past Poll
              </a>
              <a
                href="#"
                className="border-transparent text-[#0A0A2F] hover:border-[#0A0A2F] hover:text-[#0A0A2F] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium whitespace-nowrap"
              >
                Present Poll
              </a>
            </div>
          </div>
          <div className="flex items-center desktop:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0A0A2F] hover:text-[#0A0A2F] hover:bg-[#0A0A2F]  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="hidden desktop:ml-4 desktop:flex desktop:items-center">
            <a href="#" className="button is-transparent text-[#0A0A2F]">
              Connected Wallet:- 123456
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-gray-300  bg-white divide-y-2 divide-gray-50 ">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between flex-row-reverse">
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div>
                <a href="#" className="flex-shrink-0 flex items-center text-gray-900">
                  SecurePoll
                </a>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-6">
                <a
                  href="#"
                  className="-m-3 p-3 items-center rounded-md hover:bg-gray-50 "
                >
                  <span className="ml-3 text-base font-medium text-gray-900">Create Poll</span>
                </a>

                <a
                  href="#"
                  className="-m-3 p-3 items-center rounded-md hover:bg-gray-50 "
                >
                  <span className="ml-3 text-base font-medium text-gray-900 ">Past Poll</span>
                </a>

                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900 ">Present Poll</span>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                <a href="#" className="link">
                  Connected Wallet:- 123456
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
