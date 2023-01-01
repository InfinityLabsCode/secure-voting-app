const Result = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto hidden">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
            <div className="flex justify-between border-b">
              <div className="modal-title mb-4">
                <h1 className="text-xl font-bold leading-7 mobile:text-base mobile:truncate text-[#0A0A2F] ">
                  Details of this poll:
                </h1>
              </div>
              <div className="modal-closs font-bold">
                <button className="w-full mt-1 text-gray-800 text-right">
                  <span>&#9587;</span>
                </button>
              </div>
            </div>
            <div className="pt-4 pb-2 flex-auto justify-center">
              <div className="modal-body">
                <ul className="leading-7">
                  <li>
                    Winning proposal :- <span>Anik</span>
                  </li>
                  <li className="mt-6">
                    Vote Counted - <span>10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
