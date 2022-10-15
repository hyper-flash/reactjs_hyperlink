import { toast } from 'react-toastify';

export function ToastSuccess(alertMsg){
    toast.success(alertMsg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        });
    
}

export function ToastWarn(alertMsg){
    toast.warn(alertMsg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        });
}

