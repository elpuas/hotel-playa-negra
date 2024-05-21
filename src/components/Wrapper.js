import Image from 'next/image';
import Navbar from './Navbar';


export default function Wrapper({ children }) {
    return (
        <div className="flex h-screen">
            <aside className="w-full max-w-[305px] bg-earth p-6 shadow-lg">
                <Image
                    className="relative object-contain mx-auto"
                    src="/logo-color.gif"
                    alt="Playa Negra Logo"
                    width={185}
                    height={145}
                    priority 
                />
                <Navbar />
            </aside>
            <main className="flex-1 overflow-y-auto px-8 pt-24">
                <div className="max-w-[1170px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
