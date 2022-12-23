export default function login() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="login-box py-2 rounded shadow-md w-full text-center text-white bg-[#0a0a2f]">
        <div className="login-log font-bold uppercase tracking-wide text-3xl border-b	border-slate-600 py-8">
          <h1>SecurePoll</h1>
        </div>
        <div className="login-body p-8">
          <h2 className="uppercase font-black	text-3xl mb-4 leading-9 ">
          Wallet Connected
          </h2>
          <p className="mb-11 text-white font-normal text-sm px-2.5">
            In order to stake your pixelmon in the staking pools, connect
            your wallet to proceed.
          </p>
          <div className="bg-[#ffffff0d] text-center">
            <button
              type="button"
              className="h-12 w-full px-5 rounded-sm text-xs leading-10	  font-black text-white"
            >
              <img
                src="https://d6my8ruk4egie.cloudfront.net/_next/static/media/metamask.c1e445c9.svg"
                className="inline-block mr-4"
                alt="img not found"
              />{" "}
              METAMASK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
