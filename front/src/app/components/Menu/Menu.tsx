"use client";

import Link from "next/link";
import { Calculator, CheckSquare, HouseLine } from "phosphor-react";

const options = [
  {
    icon: <HouseLine color="#000" size={24} />,
    id: 1,
    href: "/",
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
    <div className="flex flex-col justify-between items-center bg-[#141414] text-white p-6 gap-20 rounded-r-2xl border-r-[#93b37c] border-r-4 ">
      <div>
        <p>Logo</p>
      </div>
      <div className="h-full text-white flex flex-col items-center gap-11">
        {options.map((item) => (
          <Link
            href={item.href}
            className={`p-2 rounded-xl bg-gradient-to-r from-[#b5e494] to-[#82b424]
              cursor-pointer hover:scale-90 transform-gpu ease-in-out duration-300 `}
            key={item.id}
          >
            <p>{item.icon}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
