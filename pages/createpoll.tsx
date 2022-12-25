import type { NextPage } from 'next';
import Head from 'next/head';

//Components
import Header from '../components/Header/index';
import Pagebody from '../components/Pagebody/index';
import Fotter from '../components/Footer/index'

const CreatePoll: NextPage = () => {

  return (
    <>
      <Head>
        <title>SecurePoll</title>
      </Head>
      <Header />
      <Pagebody />
      <Fotter />
    </>

  );
};

export default CreatePoll;
