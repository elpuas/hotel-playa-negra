import Link from 'next/link';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
    subsets: ['latin'],
    weight: [ '400', '700'],
    display: 'swap',
});

export default function Button({ title, link, extraClass }) {
    return (
        <Link href={link || '#'} className={`bg-[#2574a9] uppercase text-white flex border border-white w-fit ${extraClass || ''} ${ptSans.className}`}>
                <span className='py-3 px-7 block'>{title}</span>
                <span className="border-l border-white py-3 px-4">&#62;</span>
        </Link>
    );
}