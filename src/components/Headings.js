import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export default function Heading({ level, children, extraClasses }) {
    const HeadingTag = `h${level}`;
    const classNames = `text-[#171717] font-bold tracking-normal not-italic leading-[1.11] mb-5 ${extraClasses || ''} ${openSans.className}`

    return (
        <HeadingTag className={classNames}>
            {children}
        </HeadingTag>
    );
}