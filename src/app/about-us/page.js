

"use client";

import Image from "next/image";
import DrishtiCTA from "../Components/getready";

export default function About() {
  const images = [
    "/img/Gallery1.avif",
    "/img/Gallery2.avif",
    "/img/Gallery3.avif",
    "/img/Gallery4.avif",
    "/img/Gallery5.avif",
    "/img/Gallery6.avif",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center mt-16 sm:mt-20">
        
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/About.avif"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-10" />

        {/* Content */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-snug">
            About <span className="text-blue-600">US</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-white text-sm sm:text-lg lg:text-xl max-w-xl font-light leading-relaxed mx-auto sm:mx-0">
            DrishtiHR — The Most Complete HR Partner To Take Your Organization To The Next Level.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-[#e8edfb] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/img/About1.avif"
              width={600}
              height={450}
              alt="Team Working"
              className="w-full max-w-lg object-cover rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
              We are DrishtiHR. And We{" "}
              <span className="text-blue-600"> Are On A Mission.</span>
            </h1>

            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              Our mission is to deliver modern automation and HR technology to empower organizations.
              A future where employees love their work, managers lead without stress, and growth becomes effortless.
            </p>

            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              We eliminate traditional HR burdens so leaders can focus on performance, productivity, and meaningful improvements.
            </p>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="w-full bg-[#e9efff] py-16 px-4 md:px-20 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
              Our <span className="text-blue-600">Vision</span>
            </h2>

            <p className="text-gray-700 mt-4 leading-relaxed text-[15px] md:text-[17px]">
              Our vision is to become the most trusted HR solutions partner.
              We aim to revolutionize HR by applying modern automation to remove repetitive tasks.
              <br /><br />
              We imagine a world where people focus on creativity, passion, and meaningful work—without paperwork holding them back.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/img/About2.avif"
              alt="Vision Image"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* TEAMWORK SECTION */}
      <div className="bg-blue-700 p-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">Teamwork</h1>
        <p className="text-white mt-2 text-base sm:text-lg">
          "Great teamwork creates the breakthroughs that define our careers."
        </p>
      </div>

      {/* GALLERY SECTION */}
      <section className="w-full bg-[#e9efff] py-16 px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-300"
            >
              <Image
                src={img}
                alt="Gallery Image"
                width={500}
                height={350}
                className="object-cover w-full h-[220px] md:h-[260px]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <DrishtiCTA />
    </>
  );
}
