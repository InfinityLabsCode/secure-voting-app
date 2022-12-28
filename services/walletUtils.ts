// Dependencies
import { ethers } from 'ethers';

declare let window: any;

/**
 *
 * @returns walletAddress of user
 */
export const getEthereumAccounts = async (): Promise<string | undefined> => {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const walletAddress: string =
      accounts && Array.isArray(accounts) && accounts[0] ? accounts[0] : '';
    if (!walletAddress) {
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const userAddress = await signer.getAddress();
    return userAddress;
  } catch (error) {
    return;
  }
};

/**
 *
 * @returns validity
 */
export const addEthereumChain = async (): Promise<boolean> => {
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: process.env.REACT_APP_CHAIN_ID,
          rpcUrl: process.env.REACT_APP_RPC_URL,
        },
      ],
    });
    return true;
  } catch (error) {
    return false;
  }
};

/**
 *
 * @returns validity
 */
export const switchEthereumChain = async (): Promise<boolean> => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: process.env.REACT_APP_CHAIN_ID }],
    });
    return true;
  } catch (switchError: any) {
    if (switchError.code === process.env.REACT_APP_CHAIN_SWITCH_ERROR_CODE) {
      try {
        const validity = await addEthereumChain();
        return validity;
      } catch (addError) {
        return false;
      }
    }
    return false;
  }
};