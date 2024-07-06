import { toast } from 'react-toastify';

export const alertToast = (type,text) => {
    switch (type) {
        case 'success':
            toast.success(text, { autoClose: 2000 });
            break;
        case 'error':
            toast.error(text, { autoClose: 2000 });
            break;
    
        default:
            toast(text, { autoClose: 2000 });
            break;
    }
}
