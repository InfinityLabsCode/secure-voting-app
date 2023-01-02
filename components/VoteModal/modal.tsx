//Dependencies
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//Store
import secureVoteStore from '../../stores';

//Service
import { getProposalList } from '../../services/getProposalList';
import { showToast, toastUpdate } from '../ToastMessage';
import { giveVote } from '../../services/giveVote';

const Modal = () => {
  const router = useRouter();
  const [proposals, setProposals] = useState<string[]>([]);
  const isShowVotePopup = secureVoteStore((state) => state.uiStore.isShowVotePopup);
  const setIsShowVotePopup = secureVoteStore((state) => state.uiStore.setIsShowVotePopup);
  const setIsLoading = secureVoteStore((state) => state.uiStore.setIsLoading);
  const selectedPoll = secureVoteStore((state) => state.statisticsStore.selectedPoll);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getProposalList(selectedPoll?.id as number);
      if (!response.success) {
        setIsLoading(false);
        return;
      }
      setProposals(response.data as string[]);
      setIsLoading(false);
    })();
  }, [router, selectedPoll?.id, setIsLoading]);

  const giveVoteHandler = async (index : number) =>{
    setIsLoading(true);
    const toastId = 'giveVote';
    showToast('processing','Processing','Please wait..',toastId);
    const response = await giveVote({electionIndex : selectedPoll?.id as number, candidateIndex : index});
    if(!response.success){
      toastUpdate(toastId,'error','Error','Transaction Error!');
      setIsLoading(false);
      return;
    }
    toastUpdate(toastId,'success','Success','Your vote is initiated!');
    setIsShowVotePopup(false);
    setIsLoading(false);
  }

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
                  <ul className="list-decimal pl-5 overflow-auto h-50">
                    {proposals.map((item: string, index: number) => (
                      <div key={index}>
                        <li>
                          <ul className="flex flex-auto justify-between mt-4 items-center">
                            <li>{item}</li>
                            <li>
                              <a
                                onClick={() => giveVoteHandler(index)}
                                className="cursor-pointer inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-400 focus:shadow-outline focus:outline-none"
                              >
                                Vote
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    ))}
                  </ul>
                  <div className="total-voted mt-6 border-t pt-6">
                    <p>
                      User Voted : <span>{selectedPoll?.voteCounted}</span>
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
