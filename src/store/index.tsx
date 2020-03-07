import React from 'react';
import { useStaticRendering } from 'mobx-react-lite';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

import callApi from 'src/lib/callApi';

import { UserStore } from './UserStore';
import { UIStore } from './UIStore';

const storesContext = React.createContext({
  userStore: new UserStore(callApi),
  uiStore: new UIStore(callApi),
});

export const useStore = () => React.useContext(storesContext);
