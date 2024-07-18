
import * as React from 'react'

export const useToggle = (initialState: boolean = false) => {
  const [state, setState] = React.useState(initialState);

  const toggle = React.useCallback(() => setState((state) => !state), []);

  return [state, toggle] as const;
};