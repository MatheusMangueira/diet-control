import { CalculatorRepository } from "../../repositories/CalculatorRepository"
import { listMacrosController } from "./ListMacrosController"
import { ListMacrosUseCase } from "./ListMacrosUseCase"


const calculatorMacrosRepository = CalculatorRepository.getInstance()
const listMacrosUseCase = new ListMacrosUseCase
   (calculatorMacrosRepository)
const listMacrosControler = new listMacrosController(listMacrosUseCase)

export { listMacrosControler }
