
//Dependencies
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';

//Componenets
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import { ISinglePoll } from '../models/allModels';
import ChoosePopup from '../components/ChoosePopup/popup';
import VotePopup from '../components/VoteModal/modal';
import AddWalletAddressPopup from '../components/AddWalletAddressPopup';


//Store
import secureVoteStore from '../stores';

export default function Presentpoll() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const isLogin = secureVoteStore((state) => state.authStore.isLogin);
  const getAllPollList = secureVoteStore((state) => state.statisticsStore.getAllPollList);
  const presentPolls = secureVoteStore((state) => state.statisticsStore.presentPolls);
  const setIsLoading = secureVoteStore((state) => state.uiStore.setIsLoading);
  const isLoading = secureVoteStore((state) => state.uiStore.isLoading);
  const setIsShowChoosePopup = secureVoteStore((state) => state.uiStore.setIsShowChoosePopup);

	useEffect(
		() => {
			if (!isLogin) {
				router.push('login');
			}
		},
		[ isLogin, router ]
	);

  useEffect(()=>{
    (async()=>{
      if(isLogin){
        setIsLoading(true);
        await getAllPollList();
        setIsLoading(false);
      }
    })();
  },[isLogin,setIsLoading,getAllPollList]);

  return (
    <>
      <Header />
      <div className="flex-auto">
        <div className="max-w-3xl mx-auto pt-10 pb-12 px-8">
          <div className="bg-white mt-8 mobile:p-6 p-5 border-t-4 border-orange-300 overflow-visible rounded-md border-x border border-[#e5e7eb] border-t-[#0a0a2f]">
            <div className="poll-title mb-4">
              <h1 className="text-2xl font-bold leading-7 mobile:text-xl mobile:truncate text-[#0A0A2F] ">
                Present Polls
              </h1>
              <p className="mt-1 text-sm text-[#0A0A2F]">Below are the Present polls create by the administrators:</p>
            </div>

            {!isLoading && presentPolls.length && presentPolls.map((item: ISinglePoll, index: number) => (
              <ul key={index} className="max-w-2xl mx-auto p-4  rounded-md border border-[#e5e7eb] cursor-pointer" onClick={() => setIsShowChoosePopup(true)}>
                <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">{item?.name}</li>
                <li className="text-right mobile:text-left mobile:text-xs text-sm">User Voter : {item?.voteCounted}</li>
                <li>
                  <ul className="space-x-20 content-center">
                    <li className="flex text-[#E7A808] text-sm mt-1">
                      <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#E7A808]"></span>
                      Onging
                    </li>
                  </ul>
                </li>
              </ul>
            ))}
            {!isLoading && !presentPolls.length ? <span>No present poll available!</span> : ''}


          </div>
        </div>
      </div>
      <Footer />
      <ChoosePopup />
      <VotePopup />
      <AddWalletAddressPopup />
    </>
  );
}
