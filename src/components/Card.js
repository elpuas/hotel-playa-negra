import Image from 'next/image';
import { Button } from './Button';

export function Card({ title, description, image, link }) {
    return (
        <div className="relative w-full">
            <div className="absolute z-10 h-[597px] w-full">
                <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Hotel Playa Negra Accommodations"
                />
            </div>
            <div className="bg-white p-9 z-20 relative mt-[260px] mx-10">
                <p className="text-center w-full text-2xl leading-[29px] transition-colors hover:text-[#cbaa5c] font-bold after:mb-9 after:h-[1px] after:w-[50px] after:block after:border after:border-[#cbaa5c] after:mt-4 after:mx-auto">{title}</p>
                <p className="text-center text-[#747474] tracking-[0.5px]">{ description }</p>
                <Button title="Learn More" link={link} />
            </div>
        </div>
    );
}