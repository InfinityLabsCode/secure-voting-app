
//Dependencies
import { Contract } from "ethers";
import { IGetPollList } from "../models/createPoll";

//Service
import { createSmartContractNode } from "./smartContract";

export const getPollList = async () : Promise<IGetPollList> => {
  try{
    const contractInstance : Contract = await createSmartContractNode();
    const response =  await contractInstance.getStatisticsOfAllVote();
    console.log(response);
    return {success : true, data : response.data};
  }catch(error){
    return {success : false, errorMessage : 'Transaction Error!'};
  }
}