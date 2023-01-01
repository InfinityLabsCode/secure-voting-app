import { Contract } from "ethers";
import { IGiveRightToVotePayload, IGiveRightToVoteResponse} from "../models/allModels";
import { createSmartContractNode } from "./smartContract";


export const giveRightToVote = async (payload : IGiveRightToVotePayload) : Promise<IGiveRightToVoteResponse> =>{
  try{
    const contractInstance : Contract = await createSmartContractNode();
    let _index : number = payload.electionIndex;
    let _voter : string = payload.voterAddress;
    const response =  await contractInstance.giveRightToVote(_index,_voter);
    return {success : true, transactionHash : response.hash};
  }catch(error){
    return {success : false, errorMessage : 'Transaction Error!'};
  }
}