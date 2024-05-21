import { Open_Sans } from 'next/font/google';
import "./globals.css";
import Wrapper from '@/components/Wrapper';



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
      <body className={openSans.className}><Wrapper>{children}</Wrapper></body>
    </html>
  );
}
