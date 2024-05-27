import Image from "next/image"

/**
 * Renders a light card component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description of the card.
 * @param {string} props.image - The URL of the card image.
 * @param {string} props.alt - The alt text for the card image.
 * @param {string} props.classes - Additional CSS classes for the card.
 * @returns {JSX.Element} The rendered light card component.
 */
export default function CardLight( { title, description, image, alt, classes } ) {
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
