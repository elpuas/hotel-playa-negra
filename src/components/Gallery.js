import Image from "next/image";

export function Gallery( { galleryImages = [] } ) {
    return (
        <div className="flex flex-wrap my-4">
            { Array.isArray(galleryImages) && galleryImages.map((image, index) => (
                <div key={index} className="w-1/3 p-2">
                    <Image
                        src={image}
                        width={400}
                        height={400}
                        alt="Gallery Image"
                        className='object-cover w-full h-full'
                    />
                </div>
            )) }
        </div>
    );
}