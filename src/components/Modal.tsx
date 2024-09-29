import { Burger } from "@/types/Burger"

type Props = {
    burger: Burger,
    closeModal: () => void
}

export const Modal = ({ burger, closeModal }: Props) => {
    return (
        <>
            <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
                <img src={burger.url} alt={burger.nome} className="max-w-screen max-h-screen"/>
                {burger.nome}
            </div>

            <div onClick={closeModal} className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl">
                x
            </div>
        </>
    )
}