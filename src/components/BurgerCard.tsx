import { Burger } from "@/types/Burger"

type Prop = {
    burger: Burger,
    onClick: () => void
}

export const BurgerCard = ({ burger, onClick }: Prop) => {
    return (
        <section className="">
            <div onClick={onClick} className="cursor-pointer">

                <div className="bg-[#2B2B2B] pt-8 px-6 rounded-t-md">
                    <img src={`${burger.url}`} alt={burger.nome} className="w-40 mx-auto" />
                </div>

                <div className="bg-[#1F1F1F] -mt-8 py-8 px-6 rounded-b-md">
                    <p className="text-sm mt-4">{burger.categoria}</p>
                    <p className="text-2xl font-bold mt-2">{burger.nome}</p>
                    <span className="text-[#FE6A0F] text-2xl font-bold">R${burger.preco.toFixed(2)}</span>
                </div>

            </div>
        </section>
    )
}