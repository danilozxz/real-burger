
import { useState } from 'react';
import { CartaoDeCredito } from './cards/CartaoDeCredito';
import { Dinheiro } from './cards/Dinheiro';
import { Pix } from './cards/Pix';
import { FormCartao } from './formCards/FormCartao';
import { FormDinheiro } from './formCards/FormDinheiro';
import { FormPix } from './formCards/FormPix';

export const Itens = () => {
    const cards = [
        {id: 1, card: <CartaoDeCredito/>, conteudo: <FormCartao/>},
        {id: 2, card: <Dinheiro/>, conteudo: <FormDinheiro/>},
        {id: 3, card: <Pix/>, conteudo: <FormPix/>},
    ]

    const [activeBoxId, setActiveBoxId] = useState<number | null>(null);

    const handleBoxClick = (id: number) => {
      setActiveBoxId(activeBoxId === id ? null : id);
    };
    return (
        <div className="mt-6 text-[#FA6A0F]">
            <h2 className="text-lg">Forma de pagamento</h2>
            <div className='mt-8 flex justify-between'>
                
            {cards.map((card) => (
                    <div key={card.id} onClick={() => handleBoxClick(card.id)}>
                        {card.card}
                    </div>
                ))}
            </div>
            {activeBoxId && (
                <div className="mt-4">
                    {cards.find(card => card.id === activeBoxId)?.conteudo}
                </div>
            )}
        </div>
    )
}