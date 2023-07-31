import { ICalculatorRepository } from "../../repositories/implementations/ICalculatorRepository";


type IRequest = {
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

class CalculatorMacrosUseCase {
   constructor(private calculatorRepository: ICalculatorRepository) { }
   execute({ activity, age, height, name, object, quantityFoods, sex, weight,
      protein,
      fat,
      carbohydrates }: IRequest): void {
      if (this.calculatorRepository.findByName(name)) {
         throw new Error("Calculator already exists!")
      }
      this.calculatorRepository.create({
         activity,
         age,
         height,
         name,
         object,
         quantityFoods,
         sex,
         weight,
         protein,
         fat,
         carbohydrates,
      })
   }
}

export { CalculatorMacrosUseCase }