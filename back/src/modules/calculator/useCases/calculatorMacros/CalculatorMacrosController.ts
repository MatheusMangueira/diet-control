import { Request, Response } from "express";
import { CalculatorMacrosUseCase } from "./CalculatorMacrosUseCase";

class CalculatorMacrosController {
   constructor(private calculatorMacrosUseCase: CalculatorMacrosUseCase) { }

   handle(req: Request, res: Response): Response {
      const { name,
         object,
         sex,
         height,
         age,
         weight,
         activity,
         quantityFoods,
         protein,
         fat,
         carbohydrates,


      } = req.body

      this.calculatorMacrosUseCase.execute({
         name,
         object,
         sex,
         height,
         age,
         weight,
         activity,
         quantityFoods,
         protein,
         fat,
         carbohydrates,
      })
      return res.status(201).send()
   }
}

export { CalculatorMacrosController }