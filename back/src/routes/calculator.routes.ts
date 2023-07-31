import { Router } from 'express';
import { calculatorMacrosController } from "../modules/calculator/useCases/calculatorMacros";

import { listMacrosControler } from '../modules/calculator/useCases/listMacros'

const calculatorRoutes = Router();

calculatorRoutes.post("/", (req, res) => {
   // console.log(req.body)
   return calculatorMacrosController.handle(req, res)
})

calculatorRoutes.get("/", (req, res) => {


   return listMacrosControler.handle(req, res)
})

export { calculatorRoutes }