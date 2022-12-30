

//Store
import { ISecureVoteStore } from './index';
import { getPollList } from '../services/getPollList';
import { showToast } from '../components/ToastMessage';

export interface IStatisticsStore {
  allStatisticsList : any;
  getAllStatisticsList : () => void;
}

export const statisticsStore = (set: any, get: any): IStatisticsStore => ({
  allStatisticsList: '',
  getAllStatisticsList: async () => {
    const response = await getPollList();
    if(!response.success){
      showToast('error','Error','Transaction Error');
      return;
    }
    set((state: ISecureVoteStore) => ({
      ...state,
      statisticsStore: { ...state.statisticsStore,   allStatisticsList : response.data},
    }));
  },
});