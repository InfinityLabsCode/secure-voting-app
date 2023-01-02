//Dependencies

//Store
import secureVoteStore from '../../stores';

const Modal = () => {
  const isShowVotePopup = secureVoteStore((state) => state.uiStore.isShowVotePopup);
  const setIsShowVotePopup = secureVoteStore((state) => state.uiStore.setIsShowVotePopup);

  return (
    <>
      {isShowVotePopup && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
              <div className="flex justify-between border-b">
                <div className="modal-title mb-4">
                  <h1 className="text-xl font-bold leading-7 mobile:text-base mobile:truncate text-[#0A0A2F] ">
                    CEO Election
                  </h1>
                  <p className="mt-1 text-sm mobile:text-xs text-[#0A0A2F]">
                    The Employees will choose their CEO for the company:
                  </p>
                </div>
                <div className="modal-closs font-bold">
                  <button className="w-full mt-1 text-gray-800 text-right" onClick={() => setIsShowVotePopup(false)}>
                    <span>&#9587;</span>
                  </button>
                </div>
              </div>
              <div className="pt-4 pb-2 flex-auto justify-center">
                <div className="modal-body">
                  <p>Proposals : </p>
                  <ul className="list-decimal pl-5 overflow-auto h-72">
                    <li>
                      <ul className="flex flex-auto justify-between mt-4">
                        <li>Nahid</li>
                        <li>
                          <a
                            href="#_"
                            className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-400 focus:shadow-outline focus:outline-none"
                          >
                            Vote
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex flex-auto justify-between mt-5">
                        <li>Imran</li>
                        <li>
                          <a
                            href="#_"
                            className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-400 focus:shadow-outline focus:outline-none"
                          >
                            Vote
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex flex-auto justify-between mt-4">
                        <li>Nahid</li>
                        <li>
                          <a
                            href="#_"
                            className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-400 focus:shadow-outline focus:outline-none"
                          >
                            Vote
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex flex-auto justify-between mt-5">
                        <li>Imran</li>
                        <li>
                          <a
                            href="#_"
                            className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-400 focus:shadow-outline focus:outline-none"
                          >
                            Vote
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex flex-auto justify-between mt-4">
                        <li>Nahid</li>
                        <li>
                          <a
                            href="#_"
                            className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-400 focus:shadow-outline focus:outline-none"
                          >
                            Vote
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex flex-auto justify-between mt-5">
                        <li>Imran</li>
                        <li>
                          <a
                            href="#_"
                            className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-400 focus:shadow-outline focus:outline-none"
                          >
                            Vote
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="total-voted mt-6 border-t pt-6">
                    <p>
                      User Voted : <span>1020</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
