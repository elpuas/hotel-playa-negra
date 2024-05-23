import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Headings';

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
