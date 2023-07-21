"use client";
import useLocalStorage from "@/app/hooks/useLocalStorage";

type PropsHeader = {
  subtitle?: string;
};

export const Header = ({ subtitle }: PropsHeader) => {
  const getName = useLocalStorage("macros", {}).getLocalStorage();

  return (
    <div className="pb-6">
      <div>
        <h1 className="text-4xl font-medium text-gray-950">
          Hello {getName.object?.name},🍃
        </h1>
      </div>
      <div>
        <p className="text-base text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};
