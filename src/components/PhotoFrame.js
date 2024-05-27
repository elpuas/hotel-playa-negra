import Image from "next/image"

/**
 * Renders a photo frame component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {number} props.width - The width of the image.
 * @param {number} props.height - The height of the image.
 * @param {string} [props.extraClasses] - Additional CSS classes for the photo frame.
 * @returns {JSX.Element} The rendered photo frame component.
 */
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
