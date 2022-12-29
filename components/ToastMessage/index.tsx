import { toast, TypeOptions } from 'react-toastify';
import Image from 'next/image';
import { ToastOptions } from 'react-toastify/dist/types';

//Assets
import successIcon from '../../public/assets/images/icon-success.svg';
import closeSuccessIcon from '../../public/assets/images/icon-close-success.svg';

export const showToast = (
	type: 'success' | 'error' | 'processing' | 'congratulation' = 'success',
	label: string,
	message: string | JSX.Element,
	toastId?: string,
	options?: ToastOptions
) => {
	if (type === 'success') {
		toast.success(MessageDetails('success', label, message), {
			toastId: toastId,
			icon: ({ theme, type }) => <Image src={successIcon} alt="Success" />,
			...options
		});
	} else if (type === 'congratulation') {
		toast.success(MessageDetails('congratulation', label, message), {
			toastId: toastId,
			icon: ({ theme, type }) => <Image src={closeSuccessIcon} alt="Success" />,
			...options
		});
	} else if (type === 'error') {
		toast.error(MessageDetails('error', label, message), {
			autoClose: false,
			toastId: toastId
		});
	} else if (type === 'processing') {
		toast(MessageDetails('processing', label, message), {
			autoClose: false,
			toastId: toastId,
			isLoading: true,
			closeButton: false,
			closeOnClick: false,
			...options
		});
	}

	return toastId;
};

export const toastUpdate = (toastId: string, type: TypeOptions, label: string, message: string) => {
	toast.update(toastId, {
		render: MessageDetails(type === 'success' ? 'success' : 'error', label, message),
		type: type,
		autoClose: 5000,
		isLoading: false,
		closeButton: true,
		closeOnClick: true
	});
};

const MessageDetails = (
	type: 'success' | 'error' | 'processing' | 'congratulation' = 'success',
	label: string,
	message: string | JSX.Element
) => {
	return (
		<div className="flex flex-col">
			{type === 'processing' && <div className={`text-white text-[16px]`}>{label}</div>}
			{type === 'success' && <div className={`text-success text-[16px]`}>{label}</div>}
			{type === 'congratulation' && <div className={`text-primary text-[16px]`}>{label}</div>}
			{type === 'error' && <div className={`text-error text-[16px]`}>{label}</div>}
			<div className={'text-white7 text-[14px]'}>{message}</div>
		</div>
	);
};
