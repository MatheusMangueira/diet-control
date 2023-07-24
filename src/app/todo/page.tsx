"use client";
import { TodoList } from "../components/TodoList";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Todo() {
  const [storedValue] = useLocalStorage("todos",
    {
      object: {
        meals: 0,
      },
    }
  );

console.log(storedValue, "storedValue")

  const meals = storedValue.object?.meals;
  const numbersArray = Array.from(
    { length: meals },
    (_, index) => index + 1
  );

  return (
    <main className=" w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 h-[100vh] ">
        {numbersArray.map((item: number) => (
          <TodoList item={item} key={item} />
        ))}
      </div>
    </main>
  );
}
