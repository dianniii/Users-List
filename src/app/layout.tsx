import "../styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/dasboard-layout/header";
import Footer from "@/components/dasboard-layout/footer";

const inter = Inter({ subsets: ["latin"] }); 

export const metadata = {
  title: "Users List",
  description: "Приложение для просмотра пользователей",
};;

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="ru" className="bg-white">
        <body
          className={`${inter.className} min-h-screen flex flex-col`}
        >
        <Header />
        <main className="flex-1 pt-7">
          <div className="mx-auto max-w-screen-xl px-7">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}