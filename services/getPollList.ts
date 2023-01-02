
//Dependencies
import { BigNumber, Contract,ethers } from "ethers";
import { IGetPollListResponse , ISinglePoll} from "../models/allModels";

//Service
import { createSmartContractNode } from "./smartContract";

const processData =  (data : any) : ISinglePoll[] => {
  let processedList :ISinglePoll[] = []; 
  for(var i=0; i<data.length; i++){
    processedList.push({id : i ,name : data[i].name, description : data[i].description,voteCounted : Number(BigNumber.from(data[i].voteCounted)),voteEnded : data[i].voteEnded,winningProposalName : data[i].winningProposalName});
  }
  return processedList;
} 

export const getPollList = async () : Promise<IGetPollListResponse> => {
  try{
    const contractInstance : Contract = await createSmartContractNode();
    const response =  await contractInstance.getStatisticsOfAllVote();
    return {success : true, data : processData(response)};
  }catch(error){
    return {success : false, errorMessage : 'Transaction Error!'};
  }
}

export const pastPolls = (data : ISinglePoll[]) =>{
  const response = data.filter((item : ISinglePoll,index : Number) => {
    if(item.voteEnded === true){
      return item;
    }
  })
  return response;
}

export const presentPolls = (data : ISinglePoll[]) =>{
  const response = data.filter((item : ISinglePoll,index : Number) => {
    if(item.voteEnded === false){
      return item;
    }
  })
  return response;
}