//Dependencies
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

//Store
import secureVoteStore from '../stores';

export default function Login() {
	const router = useRouter();
	const signIn = secureVoteStore((state) => state.authStore.signIn);
	const isLogin = secureVoteStore((state) => state.authStore.isLogin);

	useEffect(
		() => {
			if (isLogin) {
				router.push('/all');
			}
		},
		[ isLogin, router ]
	);

	return (
		<div className="bg-black min-h-screen flex flex-col">
			<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
				<div className="login-box py-2 rounded shadow-md w-full text-center text-white bg-[#0a0a2f]">
					<div className="login-log font-bold uppercase tracking-wide text-3xl border-b	border-slate-600 py-8">
						<h1>SecureVote</h1>
					</div>
					<div className="login-body p-8">
						<h2 className="uppercase font-black	text-3xl mb-4 leading-9 ">Wallet Connected</h2>
						<p className="mb-11 text-white font-normal text-sm px-2.5">
							In order to vote your choices in the secure vote site, connect your wallet to proceed.
						</p>
						<div className="bg-[#ffffff0d] text-center">
							<button
								type="button"
								className="h-12 w-full px-5 rounded-sm text-xs leading-10	font-black text-white"
								onClick={() => signIn()}
							>
								<picture>
									<img
										src="https://theme.zdassets.com/theme_assets/2313093/fe875eef30ee9649f253e8188f3438bb3be27e96.png"
										className="inline-block mr-4 w-6 h-6"
										alt="Landscape picture"
									/>
								</picture>
								METAMASK
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
