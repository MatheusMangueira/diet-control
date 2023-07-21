"use client";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import Link from "next/link";
import ReactApexChart from "react-apexcharts";

export const Pie = () => {
  const getMacros = useLocalStorage("macros", {}).getLocalStorage();

  const pieOptions = {
    colors: ["#e45858", "#51c751", "#f7f313"],
    labels: ["Proteina", "Carboidrato", "Gordura"],
  };

  const pieSeries = [
    getMacros.macros?.protein || 0,
    getMacros.macros?.carb || 0,
    getMacros.macros?.fat || 0,
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
