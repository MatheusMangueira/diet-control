"use client";
import useLocalStorage from "@/app/hooks/useLocalStorage";

export const Remaining = () => {
  const getMacros = useLocalStorage("macros", {}).getLocalStorage();

  const remainingMacros = [
    {
      id: 1,
      name: "Carbo",
      value: getMacros.macros.carb,
      percent: 25,
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Proteina",
      value: getMacros.macros.protein,
      percent: 25,
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "Gordura",
      value: getMacros.macros.fat,
      percent: 25,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 p-4 w-full">
      <h2 className="text-zinc-900 text-base font-medium">Remaining macros</h2>

      {remainingMacros.map((item) => (
        <div key={item.id} className="flex items-center gap-4 w-full ">
          <div
            className={`${item.color} flex items-center justify-center rounded-lg p-2 min-w-[50px]`}
          >
            <p className="text-sm font-medium p-2">{item.value}g</p>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between gap-2 items-center">
              <p className="text-xs text-gray-400">{item.name}</p>
              <span className="text-sm font-medium text-gray-900">
                {item.percent}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
