import {
    COMMENTS_SUCCESS,
} from '../../constants/commentConstants';

  function addSubComments(state, action) {

    const { comments } = action.response.data;
    const subComments = comments.data.reduce((accumulator, item) => {
      if(item.comments.length) {
        accumulator = accumulator.concat(item.comments);
      }
      return accumulator;
    },[]);
  
    return {
      ...state,        
      byId: subComments.reduce((accumulator, item) => {
        return { ...accumulator, [item.id]: item };
      }, {}),
      allIds: [ ...subComments.map(comment => comment.id) ],
    }
  }
  
 export default function subComments(state = {}, action) {
    switch (action.type) {
      case COMMENTS_SUCCESS:
        return addSubComments(state, action);
      default: return state;      
    }
  }