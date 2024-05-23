import PageHero from '@/components/PageHero';
import Heading from '@/components/Headings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import Button from '@/components/Button';
import PhotoFrame from '@/components/PhotoFrame';

export default function Accommodations() {
    return (
        <>
        <section id="page-hero" className="mb-10 gap-x-10 relative -mt-24 py-10">
            <PageHero 
                src="/accomodations-low-header.jpg" 
                alt="Accommodations Hero" 
                title="Accommodations" 
                breadcrumb="Accommodations" 
            />
        </section>
        <section id="suite-bungalows max-w-[1170px] mx-auto" className="mb-10">
            <div className="flex gap-x-10 pb-[70px]">
                <div className="w-1/3">
                    <p className="mb-1 tracking-[4px] text-[13px] uppercase">Accommodations</p>
                    <Heading 
                        level={2} 
                        extraClasses="text-[46px] mb-4 after:contain-content after:h-[1px] after:w-[50px] after:block after:border after:border-[#cbaa5c] after:mb-5 after:mt-8"
                    >
                        Suite <br />Bungalows
                    </Heading>
                    <p className="leading-[32px]">Our seven suite bungalows are nestled deeply into the tropical gardens, affording both more privacy and space than the standard bungalows. They are built in an original circular shape and have traditional palm leaf roofs. All are equipped with A/C and feature a large wooden deck with sitting area, hammocks and an outdoor shower. There is one king size and two twin beds, a private bathroom with hot water and free Wi-Fi is available. You will also find a coffee maker, a laptop size safe and a small refrigerator in each suite bungalow.</p>
                    <ul className="mb-10">
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>One king-size bed and two twin beds</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Private bathroom with hot water</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>A/C</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Ceiling fan</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Refrigerator</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Safe</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Coffee maker</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Mosquito screens, drinkable water, 110 Volts, US outlets</li>
                    </ul>
                    <Button title="Rates" link="/rates" />
                </div>
                <div className="w-2/3 relative p-10">
                    <div className="absolute right-0 left-0 top-0 bottom-0">
                        <Image
                            src="/img-bckground.jpg"
                            alt="background suite bungalows"
                            width={1512}
                            height={489}
                            className="object-cover w-full h-full z-0 object-right-top"
                        />
                    </div>
                    <div className="flex flex-col gap-6 h-full justify-between">
                        <PhotoFrame 
                            src="/suite-internal-one.jpg" 
                            alt="Suite Bungalows Front Photo" 
                            width={800} 
                            height={516} 
                            extraClasses="min-h-[416px]"
                        />
                        <PhotoFrame 
                            src="/suite-internal-two.jpg" 
                            alt="Suite Bungalows Front Photo" 
                            width={800} 
                            height={516}
                            extraClasses="min-h-[416px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-x-10">
                <div className="w-1/3">
                    <p className="mb-1 tracking-[4px] text-[13px] uppercase">Accommodations</p>
                    <Heading 
                        level={2} 
                        extraClasses="text-[46px] mb-4 after:contain-content after:h-[1px] after:w-[50px] after:block after:border after:border-[#cbaa5c] after:mb-5 after:mt-8"
                    >
                        Bungalows
                    </Heading>
                    <p className="leading-[32px]">Our ten brightly colored circular bungalows with their palm leaf roofs are set right behind the beachfront restaurant and a few steps away from the swimming pool. The high ceilings and the windows all around allow the sea breeze to cool the rooms naturally. There is also a ceiling fan for the hottest days or nights. There are one queen-size and two twin beds in each bungalow, as well as a private bathroom with hot water. Our guests can also sit on the porch on a couple of comfortable wooden chairs, enjoying the view of the gardens, the swimming pool or the beach. A coffee maker and free Wi-Fi are available too.</p>
                    <ul className="mb-10">
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>One queen size bed and two twin beds</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Ceiling fan</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Private bathroom with hot water</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Safe</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Coffee maker</li>
                        <li className="flex mb-2"><span className="block w-[16px] text-[#cbaa5c] mr-3 leading-[1] pt-[5px]"><FontAwesomeIcon icon={faCircleCheck} /></span>Mosquito screens, drinkable water, 110 Volts, US outlets</li>
                    </ul>
                    <Button title="Rates" link="/rates" />
                </div>
                <div className="w-2/3 relative p-10">
                    <div className="absolute right-0 left-0 top-0 bottom-0">
                        <Image
                            src="/img-bckground-2.jpg"
                            alt="background suite bungalows"
                            width={1512}
                            height={489}
                            className="object-cover w-full h-full z-0 object-right-top"
                        />
                    </div>
                    <div className="flex flex-col gap-6 h-full justify-between">
                        <PhotoFrame 
                            src="/bungallow-internal-one-1.jpg" 
                            alt="Suite Bungalows Front Photo" 
                            width={800} 
                            height={516} 
                            extraClasses="min-h-[416px]"
                        />
                        <PhotoFrame 
                            src="/bungallow-internal-two.jpg" 
                            alt="Suite Bungalows Front Photo" 
                            width={800} 
                            height={516}
                            extraClasses="min-h-[416px]"
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}