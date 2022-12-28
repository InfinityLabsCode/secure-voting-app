// Utils
import { showInfo } from '../utils/toast';
import { switchEthereumChain, getEthereumAccounts } from './walletUtils';

declare let window: any;
/**
 *
 * @returns walletAddress
 */
export const walletConnect = async () => {
  //To verify if the browser is running MetaMask
  //we will check the window.ethereum global variable
  if (typeof window.ethereum !== 'undefined') {
    const validity = await switchEthereumChain();
    if (validity) {
      const account = await getEthereumAccounts();
      return { success: true, account: account };
    }
  }
  showInfo('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
  return { success: false, errorMessage: 'MetaMask is not installed' };
};