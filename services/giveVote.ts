import { Contract } from "ethers";
import { IGiveVotePayload, IGiveVoteResponse } from "../models/allModels";
import { createSmartContractNode } from "./smartContract";


export const giveVote = async (payload : IGiveVotePayload) : Promise<IGiveVoteResponse> =>{
  try{
    const contractInstance : Contract = await createSmartContractNode();
    let _index : number = payload.electionIndex;
    let _proposal : number = payload.candidateIndex;
    const response =  await contractInstance.giveVote(_index,_proposal);
    return {success : true, transactionHash : response.hash};
  }catch(error){
    return {success : false, errorMessage : 'Transaction Error!'};
  }
}