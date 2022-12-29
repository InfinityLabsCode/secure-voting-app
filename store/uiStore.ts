//Store
import { ISecureVoteStore } from './index';

export interface IUiStore {
  isShowVotingPopup : boolean;
  setIsShowVotingPopup : (value : boolean) => void;
}

export const uiStore = (set: any, get: any): IUiStore => ({
  isShowVotingPopup: false,
  setIsShowVotingPopup: async (value : boolean) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      IUiStore: { ...state.uiStore, isShowVotingPopup : value },
    }));
  }
});