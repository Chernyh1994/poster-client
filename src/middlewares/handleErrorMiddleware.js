import { toast } from 'react-toastify';

// eslint-disable-next-line import/prefer-default-export
export const handleErrorMiddleware = () => (next) => (action) => {
  if (action.type.endsWith('_ERROR')) {
    toast.error(action.error.message);
  }

  return next(action);
};
