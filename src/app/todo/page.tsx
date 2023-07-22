"use client";
import { useEffect, useState } from "react";
import { TodoList } from "../components/TodoList";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Todo() {
  const [storedValue] = useLocalStorage("macros", {});
  const meals = [storedValue.object.meals];
  const [quantity, setQuantity] = useState<any>([]);

  useEffect(() => {
    if (
      !Array.isArray(meals) ||
      meals.length !== 1 ||
      typeof meals[0] !== "number"
    ) {
      console.error("O array não contém exatamente um número.");
    } else {
      const quantidade = meals[0];

      const numbersArray = Array.from(
        { length: quantidade },
        (_, index) => index + 1
      );

      setQuantity(numbersArray);
    }
  }, []);

  return (
    <main className=" w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 h-[100vh] ">
        {quantity.map((item: number) => (
          <TodoList item={item} key={item} />
        ))}
      </div>
    </main>
  );
}
