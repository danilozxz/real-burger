const Page = () => {
    return (
        <div className="px-4 lg:px-40 xl:px-60 pt-8">
            <h1 className="text-3xl xl:text-4xl my-12 leading-[74px] font-bold text-center">Seu carrinho</h1>
            <div className="bg-[#272727] p-8 md:p-12 rounded-lg flex flex-col items-center">
                <h2 className="mb-12 text-2xl">Seu carrinho está vazio</h2>
                <a href="/pagamento" className="mt-4 bg-[#FA6A0F] text-white py-2 px-4 rounded">Continuar</a>
            </div>
        </div>
    );

}

export default Page;