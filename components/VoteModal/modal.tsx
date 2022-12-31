//Dependencies
import React from 'react';

//Store
import secureVoteStore from '../../stores';

const Modal = () => {
  const isShowVotePopup = secureVoteStore((state) => state.uiStore.isShowVotePopup);
  const setIsShowVotePopup = secureVoteStore((state) => state.uiStore.setIsShowVotePopup);

  return (
    <>
      {isShowVotePopup &&
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={(e) => {
            e.stopPropagation();
          }}></div>
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
                    X
                  </button>
                </div>
              </div>
              <div className="pt-4 pb-2 flex-auto justify-center">
                <div className="modal-body">
                  <p className="mb-3">Proposals : </p>
                  <ul className="list-decimal pl-5">
                    <li>
                      <ul className="flex flex-auto justify-between">
                        <li>Nahid</li>
                        <li>
                          <button type="button" className="text-red-900 border rounded px-4 pt-1 pb-0.5">
                            Vote
                          </button>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex flex-auto justify-between mt-5">
                        <li>Imran</li>
                        <li>
                          <button type="button" className="text-red-900 border rounded px-4 pt-1 pb-0.5">
                            Vote
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="total-voted mt-6">
                    <p>
                      User Voted : <span>1020</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Modal;
