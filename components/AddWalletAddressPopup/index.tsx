import React,{useState} from "react";
import { showToast, toastUpdate } from "../ToastMessage";

//Store
import secureVoteStore from "../../stores";

//Service
import { giveRightToVote } from "../../services/giveRightToVote";

const AddWalletAddressPopup = () => {
  const [wallet,setWallet] = useState<string>('');
  const isShowAddWalletAddressPopup = secureVoteStore((state) => state.uiStore.isShowAddWalletAddressPopup);
  const setIsShowAddWalletAddressPopup = secureVoteStore((state) => state.uiStore.setIsShowAddWalletAddressPopup);
  const selectedPoll = secureVoteStore((state) => state.statisticsStore.selectedPoll);
  const setIsLoading = secureVoteStore((state) => state.uiStore.setIsLoading);


  const handleSubmit = async () =>{
    setIsLoading(true);
    const toastId = 'giveRightToVote';
    if(!wallet.length){
      showToast('error','Error','Please add proper wallet address!',toastId);
      setIsLoading(false);
      return;
    }
    showToast('processing','Processing','Please wait!...',toastId);
    const response = await giveRightToVote({electionIndex : selectedPoll?.id as number,voterAddress : wallet});
    if(!response.success){
      toastUpdate(toastId,'error','Error','Transaction Error!');
      setIsLoading(false);
      return;
    }
    toastUpdate(toastId,'success','Success','Giving access transaction initiated!');
    setIsShowAddWalletAddressPopup(false);
    setIsLoading(false);
  }

  return (
    <>
      {isShowAddWalletAddressPopup &&
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
              <div className="flex justify-between border-b">
                <div className="modal-title mb-4">
                  <h1 className="text-xl font-bold leading-7 mobile:text-base mobile:text-sm text-[#0A0A2F] ">
                    Add the wallet address of the voter here.
                  </h1>
                  <span className="text-[14px] text-[#e12020]">Only the owner of Smart Contract can do it!</span>
                </div>
                <div className="modal-closs font-bold mobile:text-xs">
                  <button className="w-full mt-1 text-gray-800 text-right" onClick={() => {setIsShowAddWalletAddressPopup(false); setWallet('')}}>
                    <span>&#9587;</span>
                  </button>
                </div>
              </div>
              <div className="pt-4 pb-2 flex-auto justify-center">
                <div className="modal-body mt-3">
                  <form>
                    <input
                      onChange={(e) => setWallet(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="wallet_address"
                      type="text"
                      placeholder="Wallet address"
                    />
                    <button
                      onClick={() => handleSubmit()}
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
      }
    </>
  );
};

export default AddWalletAddressPopup;
