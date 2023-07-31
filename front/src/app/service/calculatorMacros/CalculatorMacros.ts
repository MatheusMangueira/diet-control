import { AxiosResponse } from "axios";
import api from "../api";
import { ICalculatorMacros } from "./types/ICalculatorMacros";


class CalculatorMacros {
   public static async createMacros(
      data: ICalculatorMacros
   ): Promise<AxiosResponse<ICalculatorMacros>> {
      return await api.post<ICalculatorMacros>("/calculator", data)
   }


   public static async listMacros(): Promise<AxiosResponse<ICalculatorMacros>> {
      return await api.get<ICalculatorMacros>("/calculator")
   }


}


export { CalculatorMacros }