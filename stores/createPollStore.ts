//Service
import { walletConnect } from '../services/walletConnection';

//Store
import secureVoteStore, { ISecureVoteStore } from './index';

export interface ICreatePollStore {
  title: string;
  setTitle : (value : string) => void;
  description : string;
  setDescription : (value : string) => void;
  proposals : string[],
  setProposals : (value : string , index : number) => void;
}

export const createPollStore = (set: any, get: any): ICreatePollStore => ({
  title: '',
  description: '',
  proposals : [],
  setTitle: (value : string) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      createPollStore: { ...state.createPollStore, title : value },
    }));
  },
  setDescription: (value : string) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      createPollStore: { ...state.createPollStore, description : value },
    }));
  },
  setProposals: (value : string, index : number) => {
    const oldProposals = secureVoteStore.getState().createPollStore.proposals;
    oldProposals[index] = value;
    set((state: ISecureVoteStore) => ({
      ...state,
      createPollStore: { ...state.createPollStore, proposals : oldProposals },
    }));
  },
});