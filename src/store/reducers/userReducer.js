import { ADD_USER } from '../actions/usersAction';

const initialState = {
  users: []
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [
          ...state.users,
          {
            username: action.username,
            email: action.email,
            password: action.password
          }
        ]
      };

    default:
      return state;
  }
}

export default userReducer;
