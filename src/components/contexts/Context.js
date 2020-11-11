import {createContext} from 'react';

export const Context = createContext({
  bg : 'dark',
  color : 'white',
  settingBg: () => { }, 
  settingColor: () => { }, 
})
 