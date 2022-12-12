import type { NextPage } from 'next';
import Head from 'next/head';

//Components
import Header from '../components/Header/index';

const CreatePoll: NextPage = () => {

  return (
    <>
      <Head>
        <title>SecurePoll</title>
      </Head>
      <Header />
    </>
  );
};

export default CreatePoll;
