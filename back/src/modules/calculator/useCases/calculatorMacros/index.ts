import { CalculatorRepository } from "../../repositories/CalculatorRepository";
import { CalculatorMacrosController } from "./CalculatorMacrosController";
import { CalculatorMacrosUseCase } from "./CalculatorMacrosUseCase";

const calculatorMacrosRepository = CalculatorRepository.getInstance()
const calculatorMacrosUseCase = new CalculatorMacrosUseCase(calculatorMacrosRepository)
const calculatorMacrosController = new CalculatorMacrosController(calculatorMacrosUseCase)

export { calculatorMacrosController }
