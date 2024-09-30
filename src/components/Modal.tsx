import { burgerList } from "@/app/data/burgerList";
import { Burger } from "@/types/Burger";
import { X } from 'lucide-react';
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
                    />
                </div>
                <div>
                    <div>
                        <p className="font-bold">Ingredientes</p>
                        <p className="text-[#979797]">{burger.ingredientes}</p>
                    </div>

                    <div>
                        <p className="font-bold">Observações:</p>
                        <textarea name="" id="" className="bg-[#1F1F1F] border-2 border-[#2B2B2B] outline-none p-4 rounded-lg" placeholder="Digite aqui"></textarea>
                    </div>
                </div>
                <X onClick={closeModal} className="absolute top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl" />
            </div>

        </div>
    )
}