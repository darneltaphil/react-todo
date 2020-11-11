import {createContext} from 'react';

export const Context = createContext({
  bg : 'light',
  color : 'dark',
  settingBg: () => { }, 
  settingColor: () => { }, 
})
 