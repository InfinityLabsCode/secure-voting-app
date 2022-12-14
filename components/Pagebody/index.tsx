const index = () => {
  return (
    <div className="flex-auto">
      <div className="max-w-3xl mx-auto pt-10 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate text-gray-900 dark:text-gray-100">
            Create a Poll
          </h1>
          <p className="mt-2 text-sm text-gray-500">Complete the below fields to create your poll.</p>
        </div>
        <div className=" bg-white mt-8 px-4 sm:p-6 py-5 border-t-4 border-orange-300 overflow-visible rounded-md border-x border box-border">
          <form className="mt-2 space-y-6" id="pollform" method="POST" action="/polls">
            <div className="space-y-6">
              <div className="title-name">
                <label className="block text-sm	font-medium	label-color"> Title </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Type your question here"
                />
              </div>
              <div className="description">
                <label className="block text-sm	font-medium	label-color">Description </label>
                <textarea
                  id="message"
                  rows="3"
                  className="textarea  block p-2.5 w-full text-sm label-color bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline"></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default index;
