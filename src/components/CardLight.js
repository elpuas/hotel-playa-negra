import Image from "next/image"

export function CardLight( { title, description, image, alt, classes } ) {
    return (
        <div className={`flex-1 ${classes || ''}`}>
            <div className="h-[224px] hover:scale-105 transition-transform duration-500 ease-in-out mb-5">
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt={alt}
                    className='object-cover w-full h-full'
                />
            </div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}
