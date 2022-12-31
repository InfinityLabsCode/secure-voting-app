

//Store
import { ISecureVoteStore } from './index';
import { getPollList, pastPolls, presentPolls } from '../services/getPollList';
import { showToast } from '../components/ToastMessage';
import { ISinglePoll } from '../models/allModels';

export interface IStatisticsStore {
  allPolls : ISinglePoll[];
  getAllPollList : () => void;
  pastPolls : ISinglePoll[];
  presentPolls : ISinglePoll[];
}

export const statisticsStore = (set: any, get: any): IStatisticsStore => ({
  allPolls: [],
  pastPolls : [],
  presentPolls : [],
  getAllPollList: async () => {
    const response = await getPollList();
    if(!response.success){
      showToast('error','Error','Transaction Error');
      return;
    }
    set((state: ISecureVoteStore) => ({
      ...state,
      statisticsStore: { ...state.statisticsStore,   allPolls : response.data , pastPolls : pastPolls(response.data as ISinglePoll[]), presentPolls : presentPolls(response.data as ISinglePoll[])},
    }));
  },
});