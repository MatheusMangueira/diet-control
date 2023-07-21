"use client";
import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
   const [storedValue, setStoredValue] = useState(() => {
      try {
         const item = localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.error(`Error while getting '${key}' from localStorage: ${error}`);
         return initialValue;
      }
   });

   useEffect(() => {
      try {
         const serializedValue = JSON.stringify(storedValue);
         localStorage.setItem(key, serializedValue);
      } catch (error) {
         console.error(`Error while setting '${key}' to localStorage: ${error}`);
      }
   }, [key, storedValue]);

   return [storedValue, setStoredValue];
}

export default useLocalStorage;
