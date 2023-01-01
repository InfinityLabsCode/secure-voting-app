const Popup = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
            <div className="flex justify-between border-b">
              <div className="modal-title mb-4">
                <h1 className="text-xl font-bold leading-7 desktop:text-lg tablet:text-base mobile:text-sm text-[#0A0A2F] ">
                  Do you want to vote or ending voting?
                </h1>
              </div>
              <div className="modal-closs font-bold">
                <button className="w-full mt-1 text-gray-800 text-right text-[#0A0A2F]">X</button>
              </div>
            </div>
            <div className="mt-6 pb-2 flex-auto justify-center">
              <div className="modal-body">
                <ul className="pl-5 flex flex-col leading-7">
                  <li className="bg-green-500 max-w-fit px-8 py-2 rounded-[6px] hover:bg-green-600 cursor-pointer text-white -ml-5 mb-2">Vote</li>
                  <li className="bg-red-500 max-w-fit px-4 py-2 rounded-[6px] hover:bg-red-600 cursor-pointer text-white mt-3 -ml-5">Stop Voting</li>                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
