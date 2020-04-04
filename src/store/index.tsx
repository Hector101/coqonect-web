import React from 'react';
import { useStaticRendering } from 'mobx-react-lite';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

import callApi from 'src/lib/callApi';

import { UserStore } from './UserStore';
import { UIStore } from './UIStore';
import { SkillStore } from './SkillStore';

const storesContext = React.createContext({
  userStore: new UserStore(callApi),
  uiStore: new UIStore(callApi),
  skillStore: new SkillStore(callApi),
});

export const useStore = () => React.useContext(storesContext);
