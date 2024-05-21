export default function Gallery( { galleryImages = [] } ) {
    return (
        <div className="flex flex-wrap my-4">
            { Array.isArray(galleryImages) && galleryImages.map((image, index) => (
                <div key={index} className="w-1/3 p-2">
                    { image }
                </div>
            )) }
        </div>
    );
}