import {
  COMMENTS_SUCCESS,
} from '../../constants/commentConstants';

function addComments(state, action) {

  const { comments } = action.response.data;

  return {
    ...state,        
    byId: comments.data.reduce((accumulator, item) => {
      return { ...accumulator, [item.id]: item };
    }, {}),
    allIds: [ ...comments.data.map(comment => comment.id) ],
    parentIds: comments.data.reduce((accumulator, item) => {
      if(item.parent_id === null) {
        accumulator.push(item.id);
      }
      return accumulator;
    },[]),
  }
}

export default function comments(state = {}, action) {
  switch (action.type) {
    case COMMENTS_SUCCESS:
      return addComments(state, action);
    default: return state;      
  }
}