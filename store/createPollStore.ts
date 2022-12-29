//Service
import { walletConnect } from '../services/walletConnection';

//Store
import { ISecureVoteStore } from './index';

export interface ICreatePollStore {
  title: string;
  setTitle : (value : string) => void;
  description : string;
  setDescription : (value : string) => void;
  proposals : string[],
  setProposals : (value : string) => void;
}

export const createPollStore = (set: any, get: any): ICreatePollStore => ({
  title: '',
  description: '',
  proposals : [],
  setTitle: async (value : string) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      createPollStore: { ...state.createPollStore, title : value },
    }));
  },
  setDescription: async (value : string) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      createPollStore: { ...state.createPollStore, setDescription : value },
    }));
  },
  setProposals: async (value : string) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      createPollStore: { ...state.createPollStore, proposals : [...state.createPollStore.proposals,value] },
    }));
  }
});