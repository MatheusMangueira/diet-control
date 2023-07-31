"use client";

import { useState, useEffect } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  }

  useEffect(() => {
    const item = localStorage.getItem(key);

    if (!item) {
      localStorage.setItem(key, JSON.stringify(initialValue))
      setStoredValue(initialValue);
      return
    }

    setStoredValue(JSON.parse(item));
  }, [])

  return [storedValue, setValue];
}

export default useLocalStorage;
