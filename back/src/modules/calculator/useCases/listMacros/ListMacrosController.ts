import { Request, Response } from "express";
import { ListMacrosUseCase } from "./ListMacrosUseCase";


class listMacrosController {
   constructor(private ListMacrosUseCase: ListMacrosUseCase) { }

   handle(req: Request, res: Response): Response {
      const all = this.ListMacrosUseCase.execute()
      console.log(all)

      return res.json(all)
   }
}

export { listMacrosController }