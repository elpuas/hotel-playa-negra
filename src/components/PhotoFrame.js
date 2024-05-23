import Image from "next/image"

export default function PhotoFrame({ src, alt, width, height, extraClasses = ''}) {
    return (
        <>
            <div className={`shadow-lg bg-white p-3 w-full h-[340px] hover:scale-105 transition-transform duration-500 ease-in-out z-20 relative ${extraClasses}`}>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="object-cover w-full h-full z-20"
                />
            </div>
        </>
    )
}
