import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
export default function Navbar() {
    return (
        <nav className="mt-14">
            <ul className={`text-center uppercase text-xs font-normal ${montserrat.className}`}>
                <li className="mb-7"><Link href="/">Home</Link></li>
                <li className="mb-7"><Link href="/accommodations">Accommodations</Link></li>
                <li className="mb-7"><Link href="/rates">Rates</Link></li>
                <li className="mb-7"><Link href="/restaurant">Restaurant</Link></li>
                <li className="mb-7"><Link href="#activities">Activities</Link></li>
                <li className="mb-7"><Link href="#gallery">Gallery</Link></li>
                <li className="mb-7"><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    )
}