import { Menu } from "./components/Menu";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ overflowY: "scroll" }} className={inter.className}>
        <div className="h-[100vh] w-full flex bg-gray-100  ">
          <Menu />
          <div className="px-2 py-6 w-full overflow-y-scroll">{children}</div>
        </div>
      </body>
    </html>
  );
}
