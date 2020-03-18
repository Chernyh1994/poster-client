export const ADD_USER = 'ADD_USER';

export default function addUser(username, email, password) {
  return {
    type: ADD_USER,
    username,
    email,
    password
  };
}
