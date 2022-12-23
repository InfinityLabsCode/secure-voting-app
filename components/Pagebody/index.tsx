const index = () => {
  return (
    <div className="flex-auto">
      <div className="max-w-3xl mx-auto pt-10 pb-12 px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate text-[#0A0A2F] dark:text-gray-100">
            Create a Poll
          </h1>
          <p className="mt-2 text-sm text-[#0A0A2F]">Complete the below fields to create your poll.</p>
        </div>
        <div className=" bg-white mt-8 px-4 sm:p-6 py-5 border-t-4 border-orange-300 overflow-visible rounded-md border-x border border-[#e5e7eb] border-t-[#fbbf24]">
          <form className="mt-2 space-y-6" id="pollform" method="POST" action="/polls">
            <div className="space-y-6">
              <div className="title-name">
                <label className="block text-sm	font-medium text-[#0A0A2F]"> Title </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Type your question here"
                />
              </div>
              <div className="description">
                <label className="block text-sm	font-medium text-[#0A0A2F]">Description </label>
                <textarea
                  className="textarea  block p-2.5 w-full text-sm text-[#0A0A2F] bg-white rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline"
                  rows={4}
                />
              </div>

              <div className="answer-name">
                <label className="block text-sm	font-medium	text-[#0A0A2F]"> Answer Options </label>
                <input
                  className="mt-1 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Option 1"
                />
                <input
                  className="mt-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Option 2"
                />
                <button type="button" className="mt-2 border rounded text-[#0A0A2F] p-2 text-gray-700">
                  + Add option
                </button>
              </div>
              <div className="voting-area">
                <label className="block text-sm	font-medium	text-[#0A0A2F]">Voting restrictions</label>
                <input
                  className="mt-1 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="One vote per  wallet address"
                />
              </div>
              <div className="py-3 border-t border-gray-200">
                <div className="flex-shrink-0 mt-4">
                  <a href="#" className=" bg-[#0a0a2f] text-white px-4 py-3 rounded-md">
                    Create poll
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default index;