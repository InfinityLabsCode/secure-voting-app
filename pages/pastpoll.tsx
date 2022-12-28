
import { useState } from 'react';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import Modal from '../components/Modal/modal';
export default function Pastpoll() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className="flex-auto">
        <div className="max-w-3xl mx-auto pt-10 pb-12 px-8">
          <div className="bg-white mt-8 mobile:p-6 p-5 border-t-4 border-orange-300 overflow-visible rounded-md border-x border border-[#e5e7eb] border-t-[#0a0a2f]">
            <div className="poll-title mb-4">
              <h1 className="text-2xl font-bold leading-7 mobile:text-xl mobile:truncate text-[#0A0A2F] ">
                Past Polls
              </h1>
              <p className="mt-1 text-sm mobile:text-xs text-[#0A0A2F]">
                Below are the Past Polls create by the administrators:
              </p>
            </div>

            <ul
              className="max-w-2xl mx-auto p-4  rounded-md border border-[#e5e7eb] cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">CEO Election</li>
              <li className="text-right mobile:text-left mobile:text-xs text-sm">User Voter : 1205</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#079D0D] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#079D0D]"></span>
                    Completed
                  </li>
                </ul>
              </li>
            </ul>

            <ul
              className="max-w-2xl mx-auto p-4 rounded-md border border-[#e5e7eb] cursor-pointer mt-4"
              onClick={() => setOpenModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">Manager Election</li>
              <li className="text-right mobile:text-left mobile:text-xs text-sm">User Voter : 1250</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#079D0D] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#079D0D]"></span>
                    Completed
                  </li>
                </ul>
              </li>
            </ul>

            <ul
              className="max-w-2xl mx-auto p-4 rounded-md border border-[#e5e7eb] cursor-pointer mt-4"
              onClick={() => setOpenModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">MD Election</li>
              <li className="text-right mobile:text-left mobile:text-xs text-sm">User Voter : 1850</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#079D0D] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#079D0D]"></span>
                    Completed
                  </li>
                </ul>
              </li>
            </ul>
            <ul
              className="max-w-2xl mx-auto p-4 rounded-md border border-[#e5e7eb] cursor-pointer mt-4"
              onClick={() => setOpenModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">Others Election</li>
              <li className="text-right mobile:text-left mobile:text-xs text-sm">User Voter : 1950</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#079D0D] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#079D0D]"></span>
                    Completed
                  </li>
                </ul>
              </li>
            </ul>

            <ul
              className="max-w-2xl mx-auto p-4 rounded-md border border-[#e5e7eb] cursor-pointer mt-4"
              onClick={() => setOpenModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">Others Election</li>
              <li className="text-right mobile:text-left mobile:text-xs text-sm">User Voter : 1950</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#079D0D] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#079D0D]"></span>
                    Completed
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
