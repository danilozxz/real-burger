import { ShoppingCart, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto text-white">
      <header className="flex justify-between items-center px-4 xl:px-80 pt-8">

        <div className="flex items-center gap-28 w-full">
          <div>
            <a href="#" className="text-4xl">Real <span className="text-[#FE6A0F]">•</span> Burguer</a>
          </div>

          <nav className="flex flex-1 items-center">
            <ul className="hidden xl:flex flex-1 gap-16">
              <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Início</a></li>
              <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Bugers</a></li>
              <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Contato</a></li>
            </ul>
            <ShoppingCart className="hidden xl:block size-8 cursor-pointer hover:text-[#FE6A0F] transition-all" />
          </nav>

        </div>

        <Menu className="size-12 xl:hidden cursor-pointer hover:text-[#FE6A0F] transition-all" />

      </header>
    </div>
  );
}
