//Dependencies
import React, { useState } from 'react';

//Service
import { createNewPoll } from '../../services/createNewPoll';

//Store
import secureVoteStore from '../../stores';
import { showToast, toastUpdate } from '../ToastMessage';

interface ISingleOption {
	optionNumber: number;
	addText: Function;
}

const SingleOption: React.FC<ISingleOption> = ({ optionNumber, addText }) => {
	return (
		<div className="mt-1 mb-2 relative flex items-center space-x-3">
			<input
				type="text"
				className="text-[#0A0A2F] border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
				name={`option-${optionNumber}`}
				id={`option-${optionNumber}`}
				placeholder={`Option ${optionNumber}`}
				onChange={(e) => addText(e.target.value, optionNumber - 1)}
			/>
		</div>
	);
};

const Pagebody = () => {
	const [ optionNumber, setOptionNumber ] = useState<number>(0);
	const [ showOption, setShowOption ] = useState<boolean>(false);

	const title = secureVoteStore((state) => state.createPollStore.title);
	const setTitle = secureVoteStore((state) => state.createPollStore.setTitle);
	const description = secureVoteStore((state) => state.createPollStore.description);
	const setDescription = secureVoteStore((state) => state.createPollStore.setDescription);
	const proposals = secureVoteStore((state) => state.createPollStore.proposals);
	const setIsLoading = secureVoteStore((state) => state.uiStore.setIsLoading);
	const setProposals = secureVoteStore((state) => state.createPollStore.setProposals);

	const handleCreatePoll = async () => {
		setIsLoading(true);
		const toastId = `createPoll`;
		showToast('processing', 'Processing', 'Please wait...', toastId);
		const response = await createNewPoll({ title, description, proposals } , optionNumber);
		if (!response.success) {
			toastUpdate(toastId, 'error', 'Error', response.errorMessage as string);
			setIsLoading(false);
		} else {
			toastUpdate(toastId, 'success', 'Completed', 'Creating new poll is initiated!');
			setIsLoading(false);
		}
	};

	return (
		<div className="flex-auto">
			<div className="max-w-3xl mx-auto pt-10 pb-12 px-8">
				<div className="text-center">
					<h1 className="text-2xl font-bold leading-7 mobile:text-3xl mobile:truncate text-[#0A0A2F]">
						Create a Poll
					</h1>
					<p className="mt-2 text-sm text-[#0A0A2F]">Complete the below fields to create your poll.</p>
				</div>
				<div className="bg-white mt-8 px-4 mobile:p-6 py-5 border-t-4 border-orange-300 overflow-visible rounded-md border-x border border-[#e5e7eb] border-t-[#0a0a2f]">
					<form className="mt-2 space-y-6" id="pollform" method="POST" action="/polls">
						<div className="space-y-6">
							<div className="title-name">
								<label className="block text-sm	font-medium text-[#0A0A2F]"> Title </label>
								<input
									className="border rounded w-full py-2 px-3 text-[#0A0A2F] leading-tight focus:outline-none focus:shadow-outline"
									type="text"
									onChange={(e) => setTitle(e.target.value)}
									placeholder="Type your question here"
								/>
							</div>
							<div className="description">
								<label className="block text-sm	font-medium text-[#0A0A2F]">Description </label>
								<textarea
									className="textarea  block p-2.5 w-full text-sm text-[#0A0A2F] bg-white rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline"
									rows={4}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>

							<div className="question-number-of-proposal">
								<label className="block text-sm	font-medium	text-[#0A0A2F]">
									How many proposals do you have?
								</label>
								<div className="mt-1 mb-2 relative flex items-center space-x-3">
									<input
										type="text"
										className="text-[#0A0A2F] border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
										placeholder="5"
										onChange={(e) => setOptionNumber(Number(e.target.value))}
										disabled={showOption}
									/>
								</div>
								<button
									onClick={() => {
										if (optionNumber) {
											setShowOption(true);
										}
									}}
									type="button"
									className="mt-2 border rounded text-[#0A0A2F] p-2 text-gray-700"
								>
									Generate Options
								</button>
							</div>
							{showOption && (
								<div className="answer-name">
									<label className="block text-sm	font-medium	text-[#0A0A2F]"> Answer Options </label>
									{[ ...Array(optionNumber) ].map((x, i) => (
										<SingleOption key={i} optionNumber={i + 1} addText={setProposals} />
									))}
								</div>
							)}
							<div className="py-3 border-t border-gray-200">
								<div className="flex-shrink-0 mt-4">
									<a
										onClick={handleCreatePoll}
										className="cursor-pointer bg-[#0a0a2f] text-white px-4 py-3 rounded-md"
									>
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
export default Pagebody;
