import { Address } from "@/types/pagamento/Address";
import { X } from "lucide-react";
import { FormEvent, useState } from "react";

interface Props {
    closeAddressModal: () => void
    addAddress: (event: FormEvent<HTMLFormElement>) => void
}

export const Modal = ({ closeAddressModal, addAddress }: Props) => {

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-[#272727] space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Adicionar endereço</h2>
                        <button onClick={closeAddressModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Este endereço ficará salvo para as próximas compras
                    </p>
                </div>


                <form onSubmit={addAddress} className='flex flex-col gap-4'>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name='clientName'
                            placeholder="Nome completo"
                            className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                        <input
                            type="text"
                            name='phoneNumber'
                            placeholder="Número de telefone"
                            className="bg-[#1F1F1F] p-2.5 border border-zinc-800 rounded-lg text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}