import { Burger } from "@/types/Burger";
import { X, ShoppingCart } from 'lucide-react';
import { BurgerCard } from "./BurgerCard";

type Props = {
    burger: Burger,
    closeModal: () => void
    handleModal: (id: number) => void
}

export const Modal = ({ burger, closeModal, handleModal }: Props) => {
    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/70">
            <div className="bg-[#272727] p-32 rounded-lg flex gap-12 relative">
                <div className="w-[296px]">
                    <BurgerCard
                        key={burger.id}
                        burger={burger}
                        onClick={() => handleModal(burger.id)}
                        modal={true}
                    />
                </div>
                <div className="flex flex-col justify-around">
                    <div>
                        <p className="font-bold">Ingredientes</p>
                        <p className="text-[#979797]">{burger.ingredientes}</p>
                    </div>

                    <div className="">
                        <p className="font-bold mb-2">Observações:</p>
                        <textarea name="" id="" className="bg-[#1F1F1F] outline-none p-4 rounded-lg w-full" placeholder="Digite aqui"></textarea>
                    </div>
                    <button className="bg-[#FA6A0F] px-12 py-2 rounded-md hover:bg-[#ff8800] transition-all flex items-center gap-4">Adicionar ao carrinho <ShoppingCart/></button>
                </div>
                <X onClick={closeModal} className="absolute top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl" />
            </div>

        </div>
    )
}