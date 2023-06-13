"use client";
import { useState } from "react";
import { IFormInputs } from "../components/PersonInformation/PersonInformation";

type TMBResult = string | undefined;

type TMBCalculator = {
  calculateTMB: (data: IFormInputs) => void;
  result: TMBResult;
};

const useTMBCalculation = (): TMBCalculator => {
  const [result, setResult] = useState<TMBResult>(undefined);

  const calculateTMB = (data: IFormInputs) => {
    const getActivityMultiplier = (activity: string): number => {
      const activityMultipliers: { [key: string]: number } = {
        Sedentário: 1.2,
        "Levemente ativo": 1.375,
        "Moderadamente ativo": 1.55,
        "Muito ativo": 1.725,
        "Extremamente ativo": 1.9,
      };

      return activityMultipliers[activity];
    };

    const getObjectiveValue = (objective: string): number => {
      const objectiveValues: { [key: string]: number } = {
        Emagrecer: -500,
        "Manter peso": 0,
        "Ganho de peso": 500,
      };

      return objectiveValues[objective];
    };

    const calculateTMBForMale = (): number => {
      const tmb =
        getActivityMultiplier(data.activity) *
        (66 +
          13.7 * Number(data.Weight) +
          5 * Number(data.height) -
          6.8 * Number(data.age));

      const result = tmb + getObjectiveValue(data.objective);

      return result;
    };

    const calculateTMBForFemale = (): number => {
      const tmb =
        getActivityMultiplier(data.activity) *
        (665 +
          9.6 * Number(data.Weight) +
          1.8 * Number(data.height) -
          4.7 * Number(data.age));

      const result = tmb + getObjectiveValue(data.objective);

      return result;
    };

    const tmb =
      data.sex === "Masculino"
        ? calculateTMBForMale()
        : calculateTMBForFemale();

    setResult(tmb.toFixed(2));
  };

  return { result, calculateTMB };
};

export default useTMBCalculation;
