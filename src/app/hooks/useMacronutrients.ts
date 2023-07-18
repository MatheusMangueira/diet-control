import { useState } from "react";

type IUseMacronutrients = {
  totalCalories?: string;
};

const useMacronutrients = () => {
  const [resultMacros, setResultMacros] = useState<any>(null);

  const calculateMacronutrients = ({ totalCalories }: IUseMacronutrients) => {
    const proteinCalories = Number(totalCalories) * 0.2;
    const protein = proteinCalories / 4;

    const carbsCalories = Number(totalCalories) * 0.5;
    const carb = carbsCalories / 4;

    const fatCalories = Number(totalCalories) * 0.3;
    const fat = fatCalories / 9;

    setResultMacros({
      protein,
      carb,
      fat,
    });
  };

  return { calculateMacronutrients, resultMacros };
};

export default useMacronutrients;
