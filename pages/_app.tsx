import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import Image from 'next/image';
import closeIcon from '../public/assets/images/icon-close.svg';

export default function App({ Component, pageProps }: AppProps) {
  const CloseButton = () => {
    return <Image src={closeIcon} alt="Close" />;
  };
  return (
    <>
      <Head>
        <title>SecureVote</title>
        <meta
          name="description"
          content="Simple Secure Voting App"
        />
      </Head>

      <Component {...pageProps} />

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={<CloseButton />}
      />
    </>
  );
}

