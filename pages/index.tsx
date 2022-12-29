import React,{useEffect} from 'react';
import { useRouter } from "next/router"

//Store
import secureVoteStore from '../store';

export default function Home() {
  const router = useRouter();
  const isLogin = secureVoteStore((state) => state.authStore.isLogin);

  useEffect(() => {
    if (!isLogin) {
      router.push('/login')
    }
  }, [isLogin,router])

  return (
    <><div>Index</div></>
  )
}
