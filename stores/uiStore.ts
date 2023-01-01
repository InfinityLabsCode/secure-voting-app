//Store
import { ISecureVoteStore } from './index';

export interface IUiStore {
  isShowVotingPopup : boolean;
  setIsShowVotingPopup : (value : boolean) => void;
  isLoading : boolean;
  setIsLoading : (value : boolean) => void;
  isShowChoosePopup : boolean;
  setIsShowChoosePopup : (value : boolean) => void;
  isShowVotePopup : boolean;
  setIsShowVotePopup :(value : boolean) => void;
  isShowEndingPopup : boolean;
  setIsShowEndingPopup : (value : boolean) => void;
  isShowAddWalletAddressPopup : boolean;
  setIsShowAddWalletAddressPopup : (value : boolean) => void;
}

export const uiStore = (set: any, get: any): IUiStore => ({
  isShowVotingPopup: false,
  isLoading : false,
  isShowChoosePopup : false,
  isShowVotePopup : false,
  isShowEndingPopup : false,
  isShowAddWalletAddressPopup : false,
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
  },
  setIsShowChoosePopup: (value : boolean) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      uiStore: { ...state.uiStore, isShowChoosePopup : value },
    }));
  },
  setIsShowVotePopup: (value : boolean) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      uiStore: { ...state.uiStore, isShowVotePopup : value },
    }));
  },
  setIsShowEndingPopup: (value : boolean) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      uiStore: { ...state.uiStore, isShowEndingPopup : value },
    }));
  },
  setIsShowAddWalletAddressPopup: (value : boolean) => {
    set((state: ISecureVoteStore) => ({
      ...state,
      uiStore: { ...state.uiStore, isShowAddWalletAddressPopup : value },
    }));
  }
});