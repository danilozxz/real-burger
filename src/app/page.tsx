"use client"

import { ShoppingCart, Menu } from "lucide-react";
import hero from '/public/assets/hero.png';
import { Pesquisa } from "@/components/Pesquisa";
import { burgerList } from "./data/burgerList";
import { BurgerCard } from "@/components/BurgerCard";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { Burger } from "@/types/Burger";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [burgerOfModal, setBurgerOfModal] = useState<Burger | undefined>();


  const handleModal = (id: number) => {
    const burger = burgerList.find(item => item.id == id);

    if (burger) {
      setBurgerOfModal(burger);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
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

      <section className="hero flex flex-col xl:flex-row mt-12 px-4 xl:px-60 gap-12">
        <div className="xl:flex-1 text-center xl:text-start xl:pb-20">
          <h1 className="text-4xl xl:text-5xl mt-12 leading-[74px] font-bold">O hambúrguer mais delicioso</h1>
          <p className="my-10">A primeira hamburgueria virtual que você faz o pedido online e come o burger através do computador.</p>
          <button className="bg-[#FA6A0F] px-12 py-2 rounded-md hover:bg-[#ff8800] transition-all">Fazer pedido</button>
        </div>
        <div className="xl:flex-1 ">
          <img src={hero.src} alt="hamburguer" className="w-72 xl:w-96 mx-auto" />
        </div>
      </section>

      <Pesquisa />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-40 xl:px-60 my-12 items-center">
        {
          burgerList.map(item => (
            <BurgerCard
              key={item.id}
              burger={item}
              onClick={() => handleModal(item.id)}
              modal={false}
            />
          ))
        }
      </div>

      {showModal && burgerOfModal && (
        <Modal burger={burgerOfModal} closeModal={closeModal} handleModal={handleModal} />
      )
      }
    </div>
  );
}
