import { ShoppingCart, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto text-white">
      <header className="flex justify-between items-center px-4 xl:px-80 pt-8">

        <div className="flex items-center gap-28">
          <p className="text-4xl">Real Burger</p>

          <ul className="hidden xl:flex gap-16">
            <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Início</a></li>
            <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Bugers</a></li>
            <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Contato</a></li>
          </ul>
        </div>

        <ShoppingCart className="hidden xl:block size-8 cursor-pointer hover:text-[#FE6A0F] transition-all" />
        <Menu className="size-12 xl:hidden cursor-pointer hover:text-[#FE6A0F] transition-all" />
      </header>
    </div>
  );
}
