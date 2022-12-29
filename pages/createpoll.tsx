import type { NextPage } from 'next';
import Head from 'next/head';
import React,{useEffect} from 'react';
import { useRouter } from 'next/router';

//Components
import Header from '../components/Header/index';
import Pagebody from '../components/Pagebody/index';
import Fotter from '../components/Footer/index'

//Store
import secureVoteStore from '../stores';
import Loader from '../components/Loader';


const CreatePoll: NextPage = () => {
  const router = useRouter();
  const isLogin = secureVoteStore((state) => state.authStore.isLogin);


	useEffect(
		() => {
			if (!isLogin) {
				router.push('login');
			}
		},
		[ isLogin, router ]
	);

  return (
    <>
      <Header />
      <Pagebody />
      <Fotter />
      <Loader />
    </>

  );
};

export default CreatePoll;
