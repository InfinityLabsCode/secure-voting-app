//Dependencies
import { ethers } from "ethers"
import SECURE_VOTE_ABI_JSON from '../artifacts/SecureVote.abi.json';


declare let window: any;

export const createSmartContractNode = async () =>{
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const SECURE_VOTE_CONTRACT_ADDRESS = process.env.REACT_APP_NFT_VOTING_SMART_CONTRACT || '';
  const SecureVoteContractInstance = await new ethers.Contract(SECURE_VOTE_CONTRACT_ADDRESS, SECURE_VOTE_ABI_JSON, signer);

  return SecureVoteContractInstance;
}