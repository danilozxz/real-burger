import { Search, ChevronDown } from 'lucide-react'

export const Pesquisa = () => {
    return (
        <section className="bg-[#1F1F1F] px-4 lg:px-60 py-20 -mt-20">

            <h2 className="text-center text-3xl mb-12 xl:text-start xl:w-80">Pesquise o seu hamburguer favorito!</h2>

            <div className="flex flex-col gap-4 xl:gap-60 xl:flex-row">

                <div className='bg-[#2B2B2B] flex justify-center p-4 rounded-md gap-4 w-full '>
                    <Search className='size-8 w-1/4' />
                    <input
                        type="text"
                        placeholder="Digite o nome do burguer"
                        className='bg-transparent outline-none w-4/5'
                    />
                </div>

                <div className='w-full p-4 bg-[#2B2B2B] rounded-md flex justify-center'>
                    <select id="categoria" name="categoria" className="bg-transparent outline-none cursor-pointer appearance-none flex-1">
                        <option value="" disabled selected hidden>Selecionar categoria</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>
                    <ChevronDown className='size-8' />
                </div>
            </div>


        </section>
    )
}