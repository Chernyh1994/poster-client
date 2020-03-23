export const addUser = (userName, email, password, repeatPassword) => ({
  type: 'ADD_USER',
  userName,
  email,
  password,
  repeatPassword,
});

