import { Calculator } from "../model/Calculator";
import { ICalculatorDTO, ICalculatorRepository } from "./implementations/ICalculatorRepository";

class CalculatorRepository implements ICalculatorRepository {
   private calculators: Calculator[]

   private static INSTANCE: CalculatorRepository

   private constructor() {
      this.calculators = []
   }

   public static getInstance(): CalculatorRepository {
      if (!CalculatorRepository.INSTANCE) {
         CalculatorRepository.INSTANCE = new CalculatorRepository()
      }

      return CalculatorRepository.INSTANCE
   }

   create({ activity, age, height, name, object, quantityFoods, sex, weight,
      carbohydrates, fat, protein }: ICalculatorDTO): void {
      const newCalculator = new Calculator();

      Object.assign(newCalculator, {
         name,
         object,
         activity,
         age,
         height,
         quantityFoods,
         sex,
         weight,
         carbohydrates,
         fat,
         protein
      })


      if (this.calculators.length > 0) {
         this.calculators.pop()
      }

      this.calculators.push(newCalculator);
   }

   list(): Calculator[] {
      return this.calculators
   }

   findByName(name: string): Calculator {
      const calculator = this.calculators.find(calculator => calculator.name === name)

      return calculator
   }

}

export { CalculatorRepository }