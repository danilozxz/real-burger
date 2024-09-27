import { ShoppingCart, Menu } from "lucide-react";
import hero from '/public/assets/hero.png';
import { Pesquisa } from "@/components/Pesquisa";

export default function Home() {
  return (
    <div className="mx-auto text-white max-w-[1920px]">
      <header className="flex justify-between items-center px-4 xl:px-60 pt-8">

        <div className="flex items-center gap-28 w-full">
          <div>
            <a href="#" className="text-4xl">Real<span className="text-[#FE6A0F]">•</span>Burguer</a>
          </div>

          <nav className="flex flex-1 items-center">      
            <ul className="hidden xl:flex flex-1 gap-16">
              <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Início</a></li>
              <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Burgers</a></li>
              <li className="hover:text-[#FE6A0F] transition-all"><a href="#">Contato</a></li>
            </ul>
            <ShoppingCart className="hidden xl:block size-8 cursor-pointer hover:text-[#FE6A0F] transition-all" />
          </nav>

        </div>

        <Menu className="size-12 xl:hidden cursor-pointer hover:text-[#FE6A0F] transition-all" />

      </header>

      <section className="hero flex flex-col xl:flex-row mt-12 px-4 xl:px-60 gap-12">
        <div className="xl:flex-1 text-center xl:text-start xl:pb-20">
            <h1 className="text-5xl xl:text-5xl mt-12 leading-[74px] font-bold">O hamburguer mais delicioso</h1>
            <p className="my-10">A primeira hamburgueria virtual que você faz o pedido online e come o burger através do computador.</p>
            <button className="bg-[#FA6A0F] px-12 py-2 rounded-md hover:bg-[#ff8800] transition-all">Fazer pedido</button>
        </div>
        <div className="xl:flex-1 ">
          <img src={hero.src} alt="hamburguer" className="w-72 xl:w-96 mx-auto"/>
        </div>
      </section>

      <Pesquisa/>

    </div>
  );
}
