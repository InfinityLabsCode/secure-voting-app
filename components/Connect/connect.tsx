const Connect = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
            <div className="flex justify-between border-b">
              <div className="modal-title mb-4">
                <h1 className="text-xl font-bold leading-7 mobile:text-base mobile:text-sm text-[#0A0A2F] ">
                  Add the wallet address of the voter here.
                </h1>
              </div>
              <div className="modal-closs font-bold mobile:text-xs">
                <button className="w-full mt-1 text-gray-800 text-right">
                  <span>&#9587;</span>
                </button>
              </div>
            </div>
            <div className="pt-4 pb-2 flex-auto justify-center">
              <div className="modal-body mt-3">
                <form>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="wallet_address"
                    type="text"
                    placeholder="Wallet address"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-[6px] mt-6"
                    type="button"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
