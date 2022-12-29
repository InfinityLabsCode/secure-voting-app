import { showToast } from "../components/ToastMessage";
import { ICreatePollPayload } from "../models/createPoll";

export const createNewPoll = async (payload : ICreatePollPayload) => {
  if(!payload.title.length){
    const toastId = `titleError`;
    showToast('error', 'Error', 'Title can not be empty!', toastId);
    return ;
  }
  if(!payload.description.length){
    const toastId = `descriptionError`;
    showToast('error', 'Error', 'Description can not be empty!', toastId);
    return ;
  }
  for(var i=0; i<100000; i++){
    console.log('hi')
  }
  return ;
}