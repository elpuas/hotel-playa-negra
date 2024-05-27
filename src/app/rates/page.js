import Button from '@/components/Button';
import Heading from '@/components/Headings';
import PageHero from '@/components/PageHero';
import SeasonTableClientWrapper from '@/components/SeasonTableWrapper';

export default function Rates() {
    return (
        <>
            <section id="page-hero" className="mb-10 gap-x-10 relative -mt-24 py-10">
                <PageHero 
                    src="/rates-dos-header-low.jpg" 
                    alt="Rates Hero" 
                    title="Rates" 
                    breadcrumb="Rates" 
                />
            </section>
            <section className="mx-auto text-center mb-10">
                <h2 class="relative my-8 text-center text-2xl font-semibold before:content-[''] after:content-[''] before:absolute before:w-full before:h-[1px] before:bg-gray-300 before:top-1/2 before:left-0 after:absolute after:w-full after:h-[1px] after:bg-gray-300 after:top-1/2 after:right-0">
                    <span class="relative z-10 bg-white px-4">Rates Until September 2025</span>
                </h2>
                <SeasonTableClientWrapper />
                <p>Rates in US$, do not include sales tax. Please add 13% Costa Rican sales tax.</p>
                <Button href="#" title="Book Now!" extraClass="mx-auto font-bold" />
            </section>
            <section className="mx-auto flex gap-x-10 mb-10">
                <div className="flex-1">
                    <Heading level="2" extraClasses="text-2xl">Important Notes</Heading>
                    <ul className="list-disc list-inside">
                        <li className="mb-3">Breakfast included.</li>
                        <li className="mb-3">Children under 5 don’t pay.</li>
                        <li className="mb-3">We accept all major credit cards.</li>
                        <li className="mb-3">Pets are not allowed in the hotel.</li>
                        <li className="mb-3">Check in is at 2 pm and check out at 12 noon.</li>
                        <li className="mb-3">During the Christmas and New Year period, the minimum stay is 7 nights.</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Heading level="2" extraClasses="text-2xl">Cancellation Policy</Heading>
                    <ul className=" list-disc">
                        <li className="mb-3">We accept cancellations free of charge until 15 days before the check-in date; after this, the total reservation amount may be charged.</li>
                        <li className="mb-3">For the Christmas and New Year periods, the cancellation is free of charge until 60 days prior to the check-in; after this, the total amount of the reservation may be charged.</li>
                        <li className="mb-3">For group reservations and for house rentals, the cancellation is free of charge until 60 days prior to the check-in date. After this, the total amount of the reservation will be charged.</li>
                        <li className="mb-3">We do not accept more than 4 people in the rooms.</li>
                    </ul>
                </div>
            </section>
        </> 
    )
}
