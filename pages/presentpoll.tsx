import { useState } from 'react';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
export default function Presentpoll() {
  const [showModal, setShowModal] = useState(false);
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

            <ul
              className="max-w-2xl mx-auto p-4 rounded-md border border-[#e5e7eb] cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">CEO Election</li>
              <li className="text-right mobile:text-left mobile:text-xs  text-sm">User Voter : 1050</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#E7A808] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#E7A808]"></span>
                    Onging
                  </li>
                </ul>
              </li>
            </ul>

            <ul
              className="max-w-2xl mx-auto p-4 rounded-md border border-[#e5e7eb] cursor-pointer mt-4"
              onClick={() => setShowModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">Manager Election</li>
              <li className="text-right mobile:text-left mobile:text-xs  text-sm ">User Voter : 1050</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#E7A808] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#E7A808]"></span>
                    Onging
                  </li>
                </ul>
              </li>
            </ul>

            <ul
              className="max-w-2xl mx-auto p-4 rounded-md border border-[#e5e7eb] cursor-pointer mt-4"
              onClick={() => setShowModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">MD Election</li>
              <li className="text-right mobile:text-left mobile:text-xs  text-sm">User Voter : 1050</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#E7A808] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#E7A808]"></span>
                    Onging
                  </li>
                </ul>
              </li>
            </ul>

            <ul
              className="max-w-2xl mx-auto p-4  rounded-md border border-[#e5e7eb] cursor-pointer mt-4"
              onClick={() => setShowModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">Others Election</li>
              <li className="text-right mobile:text-left mobile:text-xs text-sm">User Voter : 1050</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#E7A808] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#E7A808]"></span>
                    Onging
                  </li>
                </ul>
              </li>
            </ul>

            <ul
              className="max-w-2xl mx-auto p-4  rounded-md border border-[#e5e7eb] cursor-pointer mt-4"
              onClick={() => setShowModal(true)}
            >
              <li className="text-base text-[#0A0A2F] mobile:text-lg font-bold">Others Election</li>
              <li className="text-right mobile:text-left mobile:text-xs text-sm">User Voter : 1050</li>
              <li>
                <ul className="space-x-20 content-center">
                  <li className="flex text-[#E7A808] text-sm mt-1">
                    <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-[#E7A808]"></span>
                    Onging
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />

      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setShowModal(false)}></div>
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
                    <button className="w-full mt-1 text-gray-800 text-right" onClick={() => setShowModal(false)}>
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
        </>
      ) : null}
    </>
  );
}
