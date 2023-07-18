"use client";
import Link from "next/link";
import { Calculator, CheckSquare, HouseLine } from "phosphor-react";
import { useState } from "react";

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
  const [active, setActive] = useState<number>(1);

  const handleActive = (id: number) => {
    setActive(id);
  };

  return (
    <div className="flex flex-col justify-between items-center bg-[#141414] text-white p-6 gap-20 rounded-r-2xl border-r-[#93b37c] border-r-4 ">
      <div>
        <p>Logo</p>
      </div>
      <div className="h-full text-white flex flex-col items-center gap-11">
        {options.map((item) => (
          <Link
            onClick={() => handleActive(item.id)}
            href={item.href}
            className={`p-2 rounded-xl ${
              active === item.id
                ? "bg-gradient-to-r from-pink-500 to-yellow-500 scale-90 transform-gpu"
                : "bg-gradient-to-r from-[#b5e494] to-[#82b424] "
            }   cursor-pointer hover:scale-90 transform-gpu ease-in-out duration-300 `}
            key={item.id}
          >
            <p>{item.icon}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
