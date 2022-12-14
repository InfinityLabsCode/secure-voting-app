//Dependencies
import { useRouter } from 'next/router';
import { useEffect } from 'react';

//Store
import secureVoteStore from '../stores';

//Componenets
import AddWalletAddressPopup from '../components/AddWalletAddressPopup';
import Popup from '../components/ChoosePopup/popup';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import Loader from '../components/Loader';
import ResultPopup from '../components/ResultPopup/index';
import { ISinglePoll } from '../models/allModels';

export default function Pastpoll() {
  const router = useRouter();
  const isLogin = secureVoteStore((state) => state.authStore.isLogin);
  const getAllPollList = secureVoteStore((state) => state.statisticsStore.getAllPollList);
  const setSelectedPoll = secureVoteStore((state) => state.statisticsStore.setSelectedPoll);

  const pastPolls = secureVoteStore((state) => state.statisticsStore.pastPolls);
  const setIsLoading = secureVoteStore((state) => state.uiStore.setIsLoading);
  const isLoading = secureVoteStore((state) => state.uiStore.isLoading);
  const setIsShowEndingPopup = secureVoteStore((state) => state.uiStore.setIsShowEndingPopup);

  useEffect(() => {
    if (!isLogin) {
      router.push('login');
    }
  }, [isLogin, router]);

  useEffect(() => {
    (async () => {
      if (isLogin) {
        setIsLoading(true);
        await getAllPollList();
        setIsLoading(false);
      }
    })();
  }, [isLogin, setIsLoading, getAllPollList]);

  return (
    <>
      <Header />
      <ResultPopup />
      <AddWalletAddressPopup />

      <div className="flex-auto">
        <div className="max-w-3xl mx-auto pt-10 pb-12 px-8">
          <div className="bg-white mt-8 mobile:p-6 p-5 border-t-4 border-orange-300 overflow-visible rounded-md border-x border border-[#e5e7eb] border-t-[#0a0a2f] mb-20">
            <div className="poll-title mb-4">
              <h1 className="text-2xl font-bold leading-7 mobile:text-xl mobile:truncate text-[#0A0A2F] ">
                Past Polls
              </h1>
              <p className="mt-1 text-sm mobile:text-xs text-[#0A0A2F]">
                Below are the Past Polls create by the administrators:
              </p>
            </div>

            {!isLoading &&
              pastPolls.length > 0 &&
              pastPolls.map((item: ISinglePoll, index: number) => (
                <ul
                  onClick={() => {setSelectedPoll(item);setIsShowEndingPopup(true)}}
                  key={index}
                  className="max-w-2xl mx-auto p-4 rounded-md border border-[#e5e7eb] cursor-pointer mb-4"
                >
                  <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">{item?.name}</li>
                  <li className="text-right mobile:text-left mobile:text-xs text-sm">
                    User Voter : {item?.voteCounted}
                  </li>
                  <li>
                    <ul className="space-x-20 content-center">
                      <li className="flex text-[#079D0D] text-sm mt-1">
                        <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#079D0D]"></span>
                        Completed
                      </li>
                    </ul>
                  </li>
                </ul>
              ))}

            {!isLoading && !pastPolls.length && <span>No past poll available!</span>}
          </div>
        </div>
      </div>
      <Footer />
      <Popup />
      <Loader />
    </>
  );
}
