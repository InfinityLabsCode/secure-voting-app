//Dependencies
import { toast } from 'react-toastify';

export const showInfo = (value: string) => {
  toast(value, {
    position: 'top-right',
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    type: 'info'
  });
};