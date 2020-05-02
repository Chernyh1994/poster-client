import { combineReducers } from 'redux';

import comments from './comments';
import subComments from './subComments';
import settings from './settings';

export const commentReducer= combineReducers({
    comments: comments,
    subComments: subComments,
    settings: settings
  })