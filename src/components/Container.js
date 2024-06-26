import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Renders a container component with a sidebar, main content area, and footer.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @returns {JSX.Element} The rendered container component.
 */
export default function Container({ children }) {
    return (
        <div className="flex h-screen">
            <aside className="w-full max-w-[305px] bg-earth p-6 shadow-lg">
                <Image
                    className="relative object-contain mx-auto"
                    src="/logo-color.gif"
                    alt="Playa Negra Logo"
                    width={185}
                    height={146}
                />
                <Navbar />
            </aside>
            <main className="flex-1 overflow-y-auto overflow-x-hidden px-8 pt-24">
                <div className="max-w-[1170px] mx-auto">
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    );
}
