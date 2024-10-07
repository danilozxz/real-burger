"use client"

import { FormEvent, useEffect, useState } from 'react';
import { Modal } from './Modal';
import { InserirEndereco } from './InserirEndereco';
import { Address } from '@/types/pagamento/Address';

const Page = () => {
    const [address, setAddress] = useState<Address>({clientName: '', phoneNumber: ''});
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const openAddressModal = () => {
        setIsAddressModalOpen(true)
    }

    const closeAddressModal = () => {
        setIsAddressModalOpen(false);
    }

    const addAddress = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const clientName = data.get('clientName')?.toString();
        const phoneNumber = data.get('phoneNumber')?.toString();
    
        if (!clientName || !phoneNumber) {
            return;
        }
    
        setAddress((prevAddress) => ({
            ...prevAddress,
            clientName: clientName,
            phoneNumber: phoneNumber
        }));
    
        event.currentTarget.reset();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAddressModalOpen(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="w-full px-4 md:px-0 md:w-[700px] xl:w-[800px] mx-auto">
            <div className="bg-[#272727] p-4 md:p-8 lg:p-12 rounded-lg mt-12">

                <InserirEndereco
                    address={address}
                    openAddressModal={openAddressModal}
                />
            </div>

            {isAddressModalOpen && (
                <Modal
                    addAddress={addAddress}
                    closeAddressModal={closeAddressModal}
                />
            )}
        </div>
    );

}

export default Page;