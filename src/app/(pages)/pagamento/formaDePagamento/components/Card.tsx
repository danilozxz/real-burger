import { CreditCard } from "lucide-react";

type MyComponentProps = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    label: string
};
export const Card = ({ Icon, label }: MyComponentProps) => {
    return (
        <div>
            <div className='flex justify-center items-center cursor-pointer bg-[#1F1F1F] gap-2 shadow-2xl rounded-md px-6 py-4 w-52 h-20'>
                <Icon />
                <p>{label}</p>
            </div>
        </div>
    )
}

