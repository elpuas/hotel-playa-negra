import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
});

/**
 * Renders a heading component with the specified level, children, and extra classes.
 * @param {Object} props - The props object.
 * @param {number} props.level - The level of the heading (e.g., 1 for <h1>, 2 for <h2>, etc.).
 * @param {ReactNode} props.children - The content to be rendered inside the heading.
 * @param {string} props.extraClasses - Additional CSS classes to be applied to the heading.
 * @returns {JSX.Element} The rendered heading component.
 */
export default function Heading({ level, children, extraClasses }) {
    const HeadingTag = `h${level}`;
    const classNames = `text-[#171717] font-bold tracking-normal not-italic leading-[1.11] mb-5 ${extraClasses || ''} ${openSans.className}`

    return (
        <HeadingTag className={classNames}>
            {children}
        </HeadingTag>
    );
}