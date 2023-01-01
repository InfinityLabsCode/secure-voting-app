//Dependencies
import React from "react";

//Store
import secureVoteStore from "../../stores";

const Popup = () => {
  const isShowChoosePopup = secureVoteStore((state) => state.uiStore.isShowChoosePopup);
  const setIsShowChoosePopup = secureVoteStore((state) => state.uiStore.setIsShowChoosePopup);
  const setIsShowVotePopup = secureVoteStore((state) => state.uiStore.setIsShowVotePopup);
  const setIsShowAddWalletAddressPopup = secureVoteStore((state) => state.uiStore.setIsShowAddWalletAddressPopup);



  return (
    <>
      {isShowChoosePopup &&
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
              <div className="flex justify-between border-b">
                <div className="modal-title mb-4">
                  <h1 className="text-xl font-bold leading-7 desktop:text-lg tablet:text-base mobile:text-sm text-[#0A0A2F] ">
                    What do you want to do?
                  </h1>
                </div>
                <div className="modal-closs font-bold">
                  <button className="w-full mt-1 text-gray-800 text-right text-[#0A0A2F]" onClick={() => setIsShowChoosePopup(false)}>                    
                    <span>&#9587;</span>
                  </button>
                </div>
              </div>
              <div className="pt-4 pb-2 flex-auto justify-center">
                <div className="modal-body">
                  <ul className="flex flex-col leading-7 items-center">
                    <li onClick={()=> {setIsShowChoosePopup(false);setIsShowVotePopup(true);}} className="max-w-max bg-green-500 hover:bg-green-600 px-12 modile:px-10 py-2 rounded-[6px] text-white mobile:text-sm cursor-pointer">
                      Vote
                    </li>
                    <li onClick={()=> {setIsShowChoosePopup(false);}} className="max-w-max bg-red-500 hover:bg-red-600 mt-6 px-4 py-2 rounded-[6px] mobile:text-sm text-white cursor-pointer">
                      Stop Voting
                    </li>
                    <li onClick={()=> {setIsShowChoosePopup(false);setIsShowAddWalletAddressPopup(true);}} className="max-w-max bg-slate-400 hover:bg-slate-600 mt-6 px-4 py-2 rounded-[6px] mobile:text-sm text-white cursor-pointer text-center">
                      Give access to vote
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Popup;
