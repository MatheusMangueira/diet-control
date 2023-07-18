"use client";
import { Calculator, CheckSquare, HouseLine } from "phosphor-react";

const options = [
  {
    icon: <HouseLine color="#000" size={24} />,
    id: 1,
    href: "/home",
  },
  {
    icon: <CheckSquare color="#000" size={24} />,
    id: 2,
    href: "/todo",
  },
  {
    icon: <Calculator color="#000" size={24} />,
    id: 3,
    href: "/calculator",
  },
];

export const Menu = () => {
  return (
    <div className="flex flex-col justify-between w-32 items-center bg-zinc-900 text-white p-2 gap-20 rounded-r-2xl border-r-[#93b37c] border-r-4 ">
      <div>
        <p>Logo</p>
      </div>
      <div className="h-full text-white flex flex-col items-center gap-11">
        {options.map((item) => (
          <div
            className="p-2 rounded-xl bg-gradient-to-r from-[#b5e494] to-[#82b424]  cursor-pointer hover:from-pink-500 hover:to-yellow-500 "
            key={item.id}
          >
            <p>{item.icon}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
