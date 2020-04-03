import { toast } from 'react-toastify';

export const handleErrorMiddleware = (store) => (next) => (action) => {
    if(RegExp('_ERROR').test(action.type)){ 
        toast.error(action.error.message);
    };
    
    return next(action);
};