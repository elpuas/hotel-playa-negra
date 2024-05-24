import Image from "next/image";
import Heading from "@/components/Headings";
import Gallery from "@/components/Gallery";
import Card from "@/components/Card";
import Button from "@/components/Button";
import CardLight from "@/components/CardLight";

// Gallery Images
const galleryImages = [
  "/aerial.jpg",
  "/DSC_1095.jpg",
  "/DSC_1159.jpg",
];

export default function Home() {
  return (
    <>
        <section id="home" className="mb-10 flex gap-x-10">
          <div className="w-1/2">
            <Heading level={1} extraClasses="text-5xl uppercase">Welcome to <br/>Hotel Playa Negra</Heading>
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
          <Gallery images={ galleryImages } className="flex gap-x-10" imageClassName="flex-1" />
        </section>
        <section id="accommodations" className=" pb-24 relative">
          <div className="absolute inset-0 fullscreen image-as-background w-screen">
            <Image
              src="/background-beach.jpg"
              alt="Hotel Playa Negra Beach"
              width={400}
              height={232}
              className="object-cover w-full -mx-8 h-full z-0"
              />
          </div>
          <div className="relative z-10 pt-12">
            <Heading level={2} extraClasses="text-[46px] text-white text-center mt-6 uppercase">Accommodations</Heading>
            <div className="flex flex-row gap-x-10 mt-16">
              <Card title="Suite Bungalows" description="King size bed, A/C, private bathroom, and wooden deck" image="/suite-bungallows-front-1.jpg" link="/accommodations" />
              <Card title="Bungalows" description="Queen size bed + two twin beds, ceiling fan, close to the beach" image="/bungallows-front.jpg" link="/accommodations#bungalows" />
            </div>
          </div>
        </section>
        <section id="restaurant" className="mb-10 mt-10">
          <div className="flex gap-x-10">
            <div className="w-2/3 border border-[#ebeef1] p-10">
              <div className="shadow-lg bg-white p-3 w-full h-[340px] hover:scale-105 transition-transform duration-500 ease-in-out">
                <Image
                  src="/resta-home.jpg"
                  alt="Hotel Playa Negra Restaurant"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  />
                </div>
            </div>
            <div className="w-1/3 text-center">
              <p className="mb-2 leading-none uppercase tracking-[0.5px]">Bar &</p>
              <Heading level={2} extraClasses="uppercase text-[46px] leading-none borderline after:mt-10 after:border-[#2574a9]">Restaurant</Heading>
              <p className="-mt-4 mb-8">Our restaurant and bar are located right on the beach, under a large circular palm leaf roof, traditionally called rancho in Costa Rica.</p>
              <Button title="Discover More" extraClass="mx-auto" />
            </div>
          </div>
          <div className="flex mt-10">
            <div className="flex-1">
              <Image
                src="/restaurant-2.jpg"
                alt="Hotel Playa Negra Restaurant"
                width={400}
                height={300}
                className="object-cover w-full h-full"
                />
            </div>
            <div className="bg-[#2574a9] text-white flex-1 p-10 text-center">
              <p className="italic leading-[1.67] text-lg">Savor our tropical fruit smoothies and cocktails, as well as a wide selection of dishes prepared with fresh local products and served in a casual and relaxed ambiance, while enjoying the view of the waves…</p>
              <p className=" text-[#cbaa5c] tracking-[4px]">HOTEL PLAYA NEGRA</p>
            </div>
            <div className="flex-1">
              <Image
                src="/resta-light.jpg"
                alt="Hotel Playa Negra Restaurant"
                width={400}
                height={300}
                className="object-cover w-full h-full"
                />
            </div>
          </div>
        </section>
        <section id="activities" className=" mb-20">
          <Heading level={2} extraClasses="text-[46px] text-center borderline after:mt-10 after:border-[#2574a9]">Activities & Tours</Heading>
          <div className="flex gap-x-10 mt-12 mb-5">
              <CardLight 
                title="Surf" 
                description="Located directly in front of the hotel is the world famous Playa Negra surf break and a few steps to the south lies a beautiful sandy beach, a perfect spot for beginners to learn to surf." 
                image="/surfing-nueva.jpg"
                width={800}
                height={516}
                alt="Hotel Playa Negra Surf" 
              />
              <CardLight 
                title="Yoga" 
                description="Yoga sessions take place at our oceanfront Shala, where the sound of waves and the sea breeze provide the perfect ambiance for your yoga experience." 
                image="/yoga-nueva.jpg"
                width={800}
                height={516}
                alt="Hotel Playa Negra Yoga"
              />
              <CardLight 
                title="Horseback Riding" 
                description="Enjoy beautiful horseback rides on the beach or along country trails with our well trained local horses and our guide, Elvis." 
                image="/horseback-1.jpg"
                width={800}
                height={516}
                alt="Hotel Playa Negra Horseback Riding"
              />
          </div>
          <Button title="View All Activities" extraClass="mx-auto" />
        </section>
      </>
  );
}
