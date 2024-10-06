import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Menu, ShoppingCart } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#141414]`}
      >
        <div className="mx-auto text-white max-w-[1920px]">
          <header className="flex justify-between items-center px-4 lg:px-40 xl:px-60 pt-8">

            <div className="flex items-center gap-4 w-full lg:gap-28">
              <div>
                <a href="#" className="text-3xl lg:text-4xl">Real<span className="text-[#FE6A0F]">•</span>Burguer</a>
              </div>

              <nav className="flex flex-1 items-center">
                <ul className="hidden lg:flex flex-1 gap-16">
                  <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Início</a></li>
                  <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Burgers</a></li>
                  <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Contato</a></li>
                </ul>
                <a href="/carrinho">
                  <ShoppingCart className="hidden lg:block size-8 cursor-pointer hover:text-[#FE6A0F] transition-all" />
                </a>
              </nav>

            </div>

            <Menu className="size-12 inline-block lg:hidden cursor-pointer hover:text-[#FE6A0F] transition-all" />

          </header>
          {children}

          <footer className="px-4 lg:px-40 xl:px-60 pt-8 text-center">
            {/* footer */}
          </footer>
        </div>
      </body>
    </html>
  );
}
