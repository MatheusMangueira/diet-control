import { Router } from 'express';
import { calculatorRoutes } from "./calculator.routes";

const router = Router();


router.use("/calculator", calculatorRoutes)


export { router }
