"use client";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { useState } from "react";

const img = {
  water:
    "https://images.pexels.com/photos/15071264/pexels-photo-15071264/free-photo-of-garrafa-frasco-jarra-bebida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export const Water = () => {
  // const getLocalStorageWater = useLocalStorage("water", 0).getLocalStorage();
  const [storedValue, setStoredValue] = useLocalStorage("water", 0);

  // const [waterCount, setWaterCount] = useState(() => {
  //   return getLocalStorageWater;
  // });

  const handleCountWater = () => {
    setStoredValue((prevWaterCount: number) => prevWaterCount + 1);
  };

  const handleClearWater = () => {
    setStoredValue(0);
  };

  // useLocalStorage("water", waterCount).setLocalStorage(waterCount);

  return (
    <div
      style={{ backgroundImage: `url(${img.water})` }}
      className="bg-white rounded-2xl flex flex-col gap-4 p-4 bg-cover w-full h-[300px] transition-all ease-in-out duration-500"
    >
      <h2 className="text-white text-base font-medium">Beber copo de Água</h2>
      <div className="flex h-full w-full justify-center items-center">
        <div
          className="bg-white rounded-full w-24 h-24 flex justify-center
          border-4 border-[#8cdd8c]
         items-center"
        >
          <p className="text-lg font-medium">{storedValue}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleCountWater}
          className="w-full h-7 p-2 flex justify-center items-center bg-[#8cdd8c] rounded-lg hover:bg-[#b4e9b4] transition-all ease-in-out duration-500"
        >
          <p className="text-zinc-900 text-sm font-medium">Bebido</p>
        </button>
        <button
          onClick={handleClearWater}
          className="w-full h-7 p-2 flex justify-center items-center bg-slate-50 rounded-lg hover:bg-[#c6ebc6] transition-all ease-in-out duration-500"
        >
          <p className="text-zinc-900 text-sm font-medium">Limpar</p>
        </button>
      </div>
    </div>
  );
};
