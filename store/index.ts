import create, { StoreApi, UseBoundStore } from 'zustand';
import { IAuthStore, authStore } from './authStore';
import { IUiStore, uiStore } from './uiStore';
import { ICreatePollStore, createPollStore } from './createPollStore';


import { devtools } from 'zustand/middleware';

export interface ISecureVoteStore {
  authStore: IAuthStore;
  uiStore : IUiStore;
  createPollStore : ICreatePollStore;
}

const secureVoteStore: UseBoundStore<StoreApi<ISecureVoteStore>> = create(
  devtools((set, get) => ({
    authStore: authStore(set, get),
    uiStore : uiStore(set, get),
    createPollStore : createPollStore(set,get)
  }))
);

export default secureVoteStore;