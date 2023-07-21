"use client";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import ReactApexChart from "react-apexcharts";

export const Pie = () => {
  const getMacros = useLocalStorage("macros", {}).getLocalStorage();

  const pieOptions = {
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    labels: ["Proteina", "Carboidrato", "Gordura"],
  };

  const pieSeries = [
    getMacros.macros.protein,
    getMacros.macros.carb,
    getMacros.macros.fat,
  ];

  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 p-4 w-full">
      <h2 className="text-zinc-900 text-base font-medium">
        Macronutrientes do dia:
      </h2>
      <ReactApexChart
        options={pieOptions}
        series={pieSeries}
        type="donut"
        width={380}
      />
    </div>
  );
};
