import { toast } from 'react-toastify';

// eslint-disable-next-line import/prefer-default-export
export const handleErrorMiddleware = () => (next) => (action) => {
  if (RegExp('_ERROR').test(action.type)) {
    toast.error(action.error.message);
  }

  return next(action);
};
