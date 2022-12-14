import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

//Components
import Header from '../components/Header/index';
import Pagebody from '../components/Pagebody/index';

const CreatePoll: NextPage = () => {
  useEffect(() => {
    document.body.classList.add('bg-gray-50');
    document.body.classList.add('min-h-full');
    document.body.classList.add('flex');
    document.body.classList.add('flex-col');
    document.body.classList.add('text-gray-600');
  });

  return (
    <>
      <Head>
        <title>SecurePoll</title>
      </Head>
      <Header />
      <Pagebody />
    </>

  );
};

export default CreatePoll;
