"use client";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const Pie = () => {
  const [storedValue] = useLocalStorage("macros", {});

  const pieOptions = {
    colors: ["#e45858", "#51c751", "#f7f313"],
    labels: ["Proteina", "Carboidrato", "Gordura"],
  };

  const pieSeries = [
    storedValue.macros?.protein || 0,
    storedValue.macros?.carb || 0,
    storedValue.macros?.fat || 0,
  ];

  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 p-4 w-full">
      <h2 className="text-zinc-900 text-base font-medium">
        Macronutrientes do dia:
      </h2>

      <Chart options={pieOptions} series={pieSeries} type="donut" width={380} />
    </div>
  );
};
