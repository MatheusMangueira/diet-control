"use client";

const useLocalStorage = (key: string, initialValue: any) => {

   const getLocalStorage = () => {

      const item = localStorage.getItem(key);
      if (item) {
         return JSON.parse(item);
      }

      return initialValue;
   }

   const setLocalStorage = (value: any) => {

      const item = localStorage.setItem(key, JSON.stringify(value));
      return item;

   }

   return { getLocalStorage, setLocalStorage };

}

export default useLocalStorage;