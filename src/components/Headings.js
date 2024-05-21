import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export function Heading({ level, children, fontSize }) {
    const HeadingTag = `h${level}`;
    const classNames = `text-[#171717] font-bold tracking-normal not-italic uppercase leading-[1.11] mb-5 ${fontSize || ''} ${openSans.className}`

    return (
        <HeadingTag className={classNames}>
            {children}
        </HeadingTag>
    );
}