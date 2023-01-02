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
  id : number;
  description : string;
  name : string;
  voteCounted : number;
  voteEnded : boolean;
  winningProposalName : string;
}

export interface IGiveVotePayload{
  electionIndex : number;
  candidateIndex : number;
}

export interface IGiveVoteResponse{
  success : boolean;
  errorMessage ? : string;
  transactionHash ? : any;
}

export interface IGiveRightToVotePayload{
  electionIndex : number;
  voterAddress : string;
}

export interface IGiveRightToVoteResponse{
  success : boolean;
  errorMessage ? : string;
  transactionHash ? : any;
}

export interface IEndingVotingResponse{
  success : boolean;
  errorMessage ? : string;
  transactionHash ? : any;
}

export interface IGetProposalsResponse{
  success : boolean;
  errorMessage ? : string;
  data ? : string[];
}