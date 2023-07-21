const useLocalStorage = (key: string, initialValue: any) => {
   const isBrowser = typeof window !== 'undefined';

   const getLocalStorage = () => {
      if (isBrowser) {
         const item = localStorage.getItem(key);
         if (item) {
            return JSON.parse(item);
         }
      }
      return initialValue;
   }

   const setLocalStorage = (value: any) => {
      if (isBrowser) {
         const item = localStorage.setItem(key, JSON.stringify(value));
         return item;
      }
   }

   return { getLocalStorage, setLocalStorage };

}

export default useLocalStorage;