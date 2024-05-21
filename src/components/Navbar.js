import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li className="mb-4"><Link href="#home">Home</Link></li>
                <li className="mb-4"><Link href="#accommodations">Accommodations</Link></li>
                <li className="mb-4"><Link href="#rates">Rates</Link></li>
                <li className="mb-4"><Link href="#restaurant">Restaurant</Link></li>
                <li className="mb-4"><Link href="#activities">Activities</Link></li>
                <li className="mb-4"><Link href="#gallery">Gallery</Link></li>
                <li className="mb-4"><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    )
}