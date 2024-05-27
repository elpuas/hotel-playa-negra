import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Headings';

/**
 * Renders a page hero component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.src - The image source URL.
 * @param {string} props.alt - The alternative text for the image.
 * @param {string} props.title - The title of the page.
 * @param {string} props.breadcrumb - The breadcrumb text.
 * @returns {JSX.Element} The rendered page hero component.
 */
export default function PageHero({ src, alt, title, breadcrumb }) {
    return (
        <>
        <div className="absolute inset-0 fullscreen image-as-background w-screen">
                <Image
                    src={src}
                    alt={alt}
                    width={1512}
                    height={378}
                    className="object-cover w-full -mx-8 h-full z-0"
                />
            </div>
            <div className="flex relative z-10 justify-between items-center text-white py-16">
                <Heading level={2} extraClasses="text-[46px] text-white text-center mt-6">{title}</Heading>
                <div>
                    <p>
                        <Link href="/">Home</Link> / {breadcrumb}  
                    </p>
                </div>
            </div>
        </>
    )
}
