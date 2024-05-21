import Image from "next/image";
import { Fragment } from "react";
import { Heading } from "@/components/Headings";

export default function Home() {
  return (
    <Fragment>
        <section id="home" className="mb-10 flex gap-x-10">
          <div className="w-1/2">
            <Heading level={1} fontSize="text-5xl">Welcome to <br/>Hotel Playa Negra</Heading>
            <p className=" text-sm tracking-[4px] after:contain-content after:h-[1px] after:w-[50px] after:block after:border after:border-[#2574a9] after:mb-5 after:mt-1">Right on the beach</p>
            <p>Come enjoy the hospitality and tranquility of our oceanfront hotel overlooking the world famous Playa Negra surf break. </p>
            <p>Off the beaten track, you will find yourself surrounded by unspoiled nature, next to the most beautiful beaches of Guanacaste on the North Pacific coast of Costa Rica. The ocean breeze and the sound of waves will combine to provide a sensation of peace and relaxation while you enjoy our beachfront restaurant and swimming pool. Our 17 bungalows and suite bungalows are set in tropical gardens, just steps away from the warm, inviting tropical waters of the Pacific.</p>
          </div>
          <Image
            src="/IMG_1781.jpg"
            alt="Hotel Playa Negra"
            width={400}
            height={300}
            className="w-1/2 object-cover max-w-1/2 h-[520px]"
            />
        </section>
        <section id="accommodations" className="mb-10">
          <h2 className="text-2xl font-semibold">Accommodations</h2>
          {/* Add accommodations content */}
        </section>
        <section id="rates" className="mb-10">
          <h2 className="text-2xl font-semibold">Rates</h2>
          {/* Add rates content */}
        </section>
        <section id="restaurant" className="mb-10">
          <h2 className="text-2xl font-semibold">Restaurant</h2>
          {/* Add restaurant content */}
        </section>
        <section id="activities" className="mb-10">
          <h2 className="text-2xl font-semibold">Activities</h2>
          {/* Add activities content */}
        </section>
        <section id="gallery" className="mb-10">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          {/* Add gallery content */}
        </section>
        <section id="contact" className="mb-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          {/* Add contact content */}
        </section>
      </Fragment>
  );
}
