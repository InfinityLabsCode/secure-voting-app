//Store
import { ISecureVoteStore } from './index';

export interface IUiStore {
  isShowVotingPopup : boolean;
  setIsShowVotingPopup : (value : boolean) => void;
  isLoading : boolean;
  setIsLoading : (value : boolean) => void;
}

export const uiStore = (set: any, get: any): IUiStore => ({
  isShowVotingPopup: false,
  isLoading : false,
  setIsShowVotingPopup: async (value : boolean) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      uiStore: { ...state.uiStore, isShowVotingPopup : value },
    }));
  },
  setIsLoading: (value : boolean) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      uiStore: { ...state.uiStore, isLoading : value },
    }));
  }
});