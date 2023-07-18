import { Pie, Remaining } from "./components/Charts";
import { Carrossel } from "./components/carrossel";
import { Header } from "./components/header/Header";

export default function Director() {
  return (
    <main className="w-full p-2">
      <Header name="Matheus" subtitle="Bem vindo ao seu diretor de dieta!" />
      <div className="w-full flex flex-col gap-8 ">
        <div className="w-full">
          <Carrossel />
        </div>
        <div className="flex w-full gap-4">
          <Pie />
          <Remaining />
        </div>
      </div>
    </main>
  );
}
