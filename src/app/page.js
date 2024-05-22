import Image from "next/image";
import { Fragment } from "react";
import { Heading } from "@/components/Headings";
import Gallery  from "@/components/Gallery";
import { Card } from "@/components/Card";

const galleryImages = [
  <Image
    src="/aerial.jpg"
    alt="Hotel Playa Negra Aerial View"
    width={400}
    height={232}
    className="object-cover"
    key={1}
    />,
    <Image
    src="/DSC_1095.jpg"
    alt="Hotel Playa Negra Cabin"
    width={400}
    height={232}
    className="object-cover"
    key={2}
    />,
    <Image
    src="/DSC_1159.jpg"
    alt="Hotel Playa Negra Sunset"
    width={400}
    height={232}
    className="object-cover"
    key={3}
    />
];

export default function Home() {
  return (
    <Fragment>
        <section id="home" className="mb-10 flex gap-x-10">
          <div className="w-1/2">
            <Heading level={1} extraClasses="text-5xl">Welcome to <br/>Hotel Playa Negra</Heading>
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
        <section className="mb-10">
          <Gallery galleryImages={ galleryImages } />
        </section>
        <section id="accommodations" className="mb-10 relative">
          <div className="absolute inset-0 fullscreen image-as-background w-screen min-h-[800px]">
            <Image
              src="/background-beach.jpg"
              alt="Hotel Playa Negra Beach"
              width={400}
              height={232}
              className="object-cover w-full -mx-8 h-full z-0"
              />
          </div>
          <div className="relative z-10 pt-12">
            <Heading level={2} extraClasses="text-[46px] text-white text-center mt-6">Accommodations</Heading>
            <div className="flex flex-row gap-x-10 mt-16">
              <Card title="Suite Bungalows" description="King size bed, A/C, private bathroom, and wooden deck" image="/suite-bungallows-front-1.jpg" />
              <Card title="Bungalows" description="Queen size bed + two twin beds, ceiling fan, close to the beach" image="/bungallows-front.jpg" />
            </div>
          </div>
        </section>
      </Fragment>
  );
}
