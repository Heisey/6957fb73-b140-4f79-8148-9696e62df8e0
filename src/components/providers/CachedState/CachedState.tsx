
import * as React from 'react'

import * as Core from 'core'
import * as Hooks from 'hooks'

interface CachedState {
  state: Core.I.StoredState;
  setState: (args: Core.I.StoredState) => void;
}

interface CacheStateProps extends React.PropsWithChildren {}

const CachedStateContext = React.createContext<CachedState | undefined>(undefined);

const CachedStateProvider: React.FC<CacheStateProps> = (props) => {
  const [state, setState] = Hooks.common.useLocalStorage<Core.I.StoredState>({ key: 'stored_state', initialValue: { theme: 'dark', ranTutorial: true }});

  return (
    <CachedStateContext.Provider value={{ state, setState }}>
      {props.children}
    </CachedStateContext.Provider>
  );
};

export const useCachedState = () => {
  const context = React.useContext(CachedStateContext);
  if (context === undefined) {
    throw new Error('useCachedState must be used within a CachedStateProvider');
  }
  return context;
};

export default CachedStateProvider