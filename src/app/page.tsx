import { Menu } from "./components/Menu";
import { PersonInformation } from "./components/PersonInformation/PersonInformation";

export default function Home() {
  return (
    <main className=" h-[100vh] w-full flex ">
      <Menu />
      <div>
        <PersonInformation />
      </div>
    </main>
  );
}
