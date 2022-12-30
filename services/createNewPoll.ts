
//Dependencies
import { Contract } from "ethers";
import { ICreatePollPayload, ICreatePollResponse } from "../models/createPoll";

//Service
import { createSmartContractNode } from "./smartContract";

export const createNewPoll = async (payload : ICreatePollPayload , optionNumber : number) : Promise<ICreatePollResponse> => {
  if(!payload.title.length){
    return {success : false, errorMessage : 'Title can not be empty!'};
  }
  if(!payload.description.length){
    return {success : false, errorMessage : 'Description can not be empty!'};
  }
  if(optionNumber === 1){
    return {success : false, errorMessage : 'Need to have at least 2 proposals!'};
  }
  if(optionNumber !== payload.proposals.length){
    return {success : false, errorMessage : 'Fill the proposals properly!'};
  }
  if(payload.proposals.includes('')){
    return {success : false, errorMessage : 'Proposals can not be empty!'};
  }

  try{
    const contractInstance : Contract = await createSmartContractNode();

    let _electionName : string = payload.title;
    let _electionDescription : string = payload.description;
    let _proposalsName : string[] = payload.proposals;
    
    const response =  await contractInstance.createNewElection(_electionName,_electionDescription,_proposalsName);
    return {success : true, transactionHash : response.hash};
  }catch(error){
    return {success : false, errorMessage : 'Transaction Error!'};
  }
}