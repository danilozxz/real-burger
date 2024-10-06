const Page = () => {
    return (
        <div className="px-4 lg:px-40 xl:px-60 pt-8">
            <div className="bg-[#272727] p-4 md:p-8 lg:p-12 rounded-lg mt-12">
                <div className="bg-[#1F1F1F] flex justify-between px-8 rounded-md py-3 gap-4">
                    <input
                        type="text"
                        placeholder="Adicione um endereço"
                        className="bg-transparent outline-none flex-1"
                    />

                    <button className="bg-[#FA6A0F] px-12 py-2 rounded-md hover:bg-[#ff8800] transition-all">Continuar</button>
                </div>

            </div>
        </div>
    );

}

export default Page;