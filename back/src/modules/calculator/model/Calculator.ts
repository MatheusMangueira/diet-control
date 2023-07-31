import { v4 as uuidv4 } from 'uuid';

class Calculator {
   id?: string;
   name: string;
   object: string;
   sex: string;
   height: number;
   age: number;
   weight: number;
   activity: string;
   quantityFoods: string;
   protein: number;
   fat: number;
   carbohydrates: number;

   constructor() {
      if (!this.id) {
         this.id = uuidv4()
      }
   }
}

export { Calculator }