//Service
import { walletConnect } from '../services/walletConnection';

//Store
import { ISecureVoteStore } from './index';

export interface IAuthStore {
  walletAddress: string;
  isLogin: boolean;
  signIn: () => void;
}

export const authStore = (set: any, get: any): IAuthStore => ({
  walletAddress: '',
  isLogin: false,
  signIn: async () => {
    const response = await walletConnect();
    if(!response.success)return;
    set((state: ISecureVoteStore) => ({
      ...state,
      authStore: { ...state.authStore, walletAddress: response.account, isLogin: true },
    }));
  }
});
//
//
//