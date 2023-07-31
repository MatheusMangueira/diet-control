"use client";
import Link from "next/link";
import { TodoList } from "../components/TodoList";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Todo() {
  const [storedValue] = useLocalStorage("todos", {
    object: {
      meals: 0,
    },
  });

  const meals = storedValue.object?.meals;
  const numbersArray = Array.from({ length: meals }, (_, index) => index + 1);

  return (
    <main className=" w-full">
      {meals ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 h-[100vh] ">
          {numbersArray.map((item: number) => (
            <TodoList item={item} key={item} />
          ))}
        </div>
      ) : (
        <div
          className="
        font-bold text-2xl text-center text-zinc-900
        flex justify-center items-center flex-col gap-9 h-full w-full
        "
        >
          <img
            className="w-1/4"
            src="https://cdn-icons-png.flaticon.com/512/4325/4325930.png"
            alt="alarme"
          />
          <p>
            Calcule sua dieta para ter acesso a lista de alimentos{" "}
            <Link className="text-blue-500 font-medium" href={"/calculator"}>
              (Calculadora)
            </Link>
          </p>
        </div>
      )}
    </main>
  );
}
