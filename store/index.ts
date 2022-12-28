import create, { StoreApi, UseBoundStore } from 'zustand';
import { IAuthStore, authStore } from './authStore';
import { devtools } from 'zustand/middleware';

export interface ISecureVoteStore {
  authStore: IAuthStore;
}

const secureVoteStore: UseBoundStore<StoreApi<ISecureVoteStore>> = create(
  devtools((set, get) => ({
    authStore: authStore(set, get),
  }))
);

export default secureVoteStore;