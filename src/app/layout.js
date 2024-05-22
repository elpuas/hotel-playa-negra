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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}><Container>{children}</Container></body>
    </html>
  );
}
