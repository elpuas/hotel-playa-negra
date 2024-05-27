import { Open_Sans } from 'next/font/google';
import "./globals.css";
import Container from '@/components/Container';



const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
  title: "Hotel Playa Negra",
  description: "A beautiful hotel in Costa Rica.",
};

/**
 * Root layout component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The root layout component.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}><Container>{children}</Container></body>
    </html>
  );
}
