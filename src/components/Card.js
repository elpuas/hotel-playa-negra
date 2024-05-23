import Image from 'next/image';
import Button from './Button';

export default function Card({ title, description, image, link }) {
    return (
        <div className="relative w-full pb-10">
            <div className="absolute z-10 h-full w-full">
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt="Hotel Playa Negra Accommodations"
                    className='object-cover w-full h-full'
                />
            </div>
            <div className="bg-white p-9 z-20 relative mt-[260px] mx-10">
                <p className="text-center w-full text-2xl leading-[29px] transition-colors hover:text-[#cbaa5c] font-bold after:mb-9 after:h-[1px] after:w-[50px] after:block after:border after:border-[#cbaa5c] after:mt-4 after:mx-auto">{title}</p>
                <p className="text-center text-[#747474] tracking-[0.5px]">{ description }</p>
                <Button title="Learn More" link={link} extraClass="mx-auto" />
            </div>
        </div>
    );
}