import { Contract } from "ethers";
import { IEndingVotingResponse} from "../models/allModels";
import { createSmartContractNode } from "./smartContract";


export const endingVoting = async (_index : number) : Promise<IEndingVotingResponse> =>{
  try{
    const contractInstance : Contract = await createSmartContractNode();
    const response =  await contractInstance.endingVoting(_index);
    return {success : true, transactionHash : response.hash};
  }catch(error){
    return {success : false, errorMessage : 'Transaction Error!'};
  }
}