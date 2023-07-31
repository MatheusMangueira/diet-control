import { Calculator } from "../../model/Calculator";

interface ICalculatorDTO {
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
}

interface ICalculatorRepository {
   findByName(name: string): Calculator;
   list(): Calculator[];
   create({
      activity,
      age,
      height,
      name,
      object,
      quantityFoods,
      sex,
      weight,
      carbohydrates,
      fat,
      protein
   }: ICalculatorDTO): void
}

export { ICalculatorRepository, ICalculatorDTO }