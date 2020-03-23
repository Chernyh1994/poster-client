const initialState = {
  users:[]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        users: [
          ...state.users,
          {
            userName: action.userName,
            email: action.email,
            password: action.password,
            repeatPassword: action.repeatPassword
          }
        ]
      };
    default:
      return state;
  }
};

export default usersReducer;
