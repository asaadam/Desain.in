import React from 'react';

export default React.createContext({
  token: null,
  userId: null,
  login: (token, status, userId, tokenExp) => {},
  logout: () => {}
});