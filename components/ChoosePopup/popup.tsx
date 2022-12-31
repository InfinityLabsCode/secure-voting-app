//Dependencies
import React from "react";

//Store
import secureVoteStore from "../../stores";

const Popup = () => {
  const isShowChoosePopup = secureVoteStore((state) => state.uiStore.isShowChoosePopup);
  const setIsShowChoosePopup = secureVoteStore((state) => state.uiStore.setIsShowChoosePopup);

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
                    Do you want to vote or ending voting?
                  </h1>
                </div>
                <div className="modal-closs font-bold">
                  <button className="w-full mt-1 text-gray-800 text-right text-[#0A0A2F]" onClick={() => setIsShowChoosePopup(false)}>X</button>
                </div>
              </div>
              <div className="pt-4 pb-2 flex-auto justify-center">
                <div className="modal-body">
                  <ul className="list-decimal pl-5">
                    <li className="desktop:text-base tablet:text-base	mobile:text-sm text-[#0A0A2F]">Vote</li>
                    <li className="desktop:text-base tablet:text-base	mobile:text-sm mt-4 text-[#0A0A2F]">
                      Stop Voting ( Only owner)
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
