import { Contract } from "ethers";
import { IGetProposalsResponse} from "../models/allModels";
import { createSmartContractNode } from "./smartContract";


export const getProposalList = async (_index : number) : Promise<IGetProposalsResponse> =>{
  try{
    const contractInstance : Contract = await createSmartContractNode();
    const response =  await contractInstance.getProposalNames(_index);
    return {success : true, data : response};
  }catch(error){
    return {success : false, errorMessage : 'Transaction Error!'};
  }
}