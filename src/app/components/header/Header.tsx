"use client";
import useLocalStorage from "@/app/hooks/useLocalStorage";

type PropsHeader = {
  subtitle?: string;
};

export const Header = ({ subtitle }: PropsHeader) => {
  const [storedValue] = useLocalStorage("macros", {});

  return (
    <div className="pb-6">
      <div>
        <h1 className="text-4xl font-medium text-gray-950">
          Olá {storedValue ? storedValue.object?.name : "seu nome"},🍃
        </h1>
      </div>
      <div>
        <p className="text-base text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};
