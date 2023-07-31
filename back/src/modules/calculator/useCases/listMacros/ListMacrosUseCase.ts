import { Calculator } from "../../model/Calculator";
import { ICalculatorRepository } from "../../repositories/implementations/ICalculatorRepository";


class ListMacrosUseCase {
   constructor(private macrosRepository: ICalculatorRepository) { }

   execute(): Calculator[] {
      const listMarcos = this.macrosRepository.list()

      return listMarcos
   }
}

export { ListMacrosUseCase }