"use client";
import ReactApexChart from "react-apexcharts";

const pieOptions = {
  colors: ["#FF0000", "#00FF00", "#0000FF"],
  labels: ["Proteina", "Carboidrato", "Gordura"],
};

const pieSeries = [44, 55, 13];

export const Pie = () => {
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 p-4">
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
