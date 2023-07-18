import { Carrossel } from "./components/carrossel";
import { Header } from "./components/header/Header";

export default function Director() {
  return (
    <main className="w-full">
      <Header name="Matheus" subtitle="Bem vindo ao seu diretor de dieta!" />
      <div className="flex w-full">
        <div className="w-full">
          <div className="w-full">
            <Carrossel />
          </div>
          <div>alou </div>
        </div>
        <div>grafico</div>
      </div>
    </main>
  );
}
