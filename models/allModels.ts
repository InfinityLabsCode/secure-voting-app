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

export interface IGetPollListResponse{
  success : boolean;
  errorMessage ? : string;
  data? : ISinglePoll[];
}

export interface ISinglePoll{
  description : string;
  name : string;
  voteCounted : number;
  voteEnded : boolean;
  winningProposalName : string;
}