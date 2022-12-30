export interface ICreatePollPayload{
  title : string;
  description : string;
  proposals : string[]
}

export interface ICreatePollResponse{
  success : boolean;
  errorMessage ? : string;
  transactionHash ? : any;
}

export interface IGetPollList{
  success : boolean;
  errorMessage ? : string;
  data? : any
}