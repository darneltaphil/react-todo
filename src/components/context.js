import {createContext} from 'react';

export const AppContext = createContext({
  isLoggedIn: false, 
  theme : 'dark',
  login: () => { }, 
  logout: () => { } 

})
 