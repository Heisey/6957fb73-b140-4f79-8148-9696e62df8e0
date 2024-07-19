
import * as React from 'react'

export interface UseLocalStorageArgs<T> {
  key: string
  initialValue: T
}

export const useLocalStorage = <T>(args: UseLocalStorageArgs<T>) => {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(args.key);
      return item ? JSON.parse(item) : args.initialValue;
    } catch (error) {
      console.error(error);
      return args.initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(args.key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
