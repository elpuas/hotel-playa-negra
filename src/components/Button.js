import Link from 'next/link';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
    subsets: ['latin'],
    weight: [ '400', '700'],
    display: 'swap',
});

/**
 * Renders a button component with a link.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the button.
 * @param {string} [props.link='#'] - The link URL. Defaults to '#'.
 * @param {string} [props.extraClass=''] - Additional CSS class names for the button.
 * @returns {JSX.Element} The rendered button component.
 */
export default function Button({ title, link, extraClass }) {
    return (
        <Link href={link || '#'} className={`bg-[#2574a9] uppercase text-white flex border border-white w-fit ${extraClass || ''} ${ptSans.className}`}>
                <span className='py-3 px-7 block'>{title}</span>
                <span className="border-l border-white py-3 px-4">&#62;</span>
        </Link>
    );
}