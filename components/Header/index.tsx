const index = () => {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0 truncate">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-2xl text-[#0A0A2F] font-bold">
                SecurePoll
              </a>
            </div>
            <div className="flex ml-6 flex space-x-8">
              <a
                href="#"
                className="border-transparent text-[#0A0A2F] hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium whitespace-nowrap"
              >
                Create Poll
              </a>
              <a
                href="#"
                className="border-transparent text-[#0A0A2F]  hover:border-gray-300 hover:text-gray-700  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium whitespace-nowrap"
              >
                Past Poll
              </a>
              <a
                href="#"
                className="border-transparent text-[#0A0A2F]  hover:border-gray-300 hover:text-gray-700  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium whitespace-nowrap"
              >
                Present Poll
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="btn bg-[#0A0A2F] text-white px-4 py-2 rounded-md">
              Connect Wallet
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
