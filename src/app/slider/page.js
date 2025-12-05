"use client";

import { useEffect, useRef, useState } from "react";

export default function FullscreenSlider() {
  const slides = [
    {
      name: "David Martinez",
      role: "HR Manager",
      img: "/img/review.avif",
      text: "Get smarter and more efficient software with features designed to free you from administrative work. Join us and find out why.",
    },
    {
      name: "Sophia Lee",
      role: "Operations Lead",
      img: "/img/review3.avif",
      text: "This platform has truly streamlined our HR processes. The helpdesk feature is a game changer!",
    },
    {
      name: "Michael Brown",
      role: "Product Specialist",
      img: "/img/review1.avif",
      text: "The analytics and reporting tools have helped us optimize our HR strategies effectively.",
    },
    {
      name: "Emma Wilson",
      role: "HR Consultant",
      img: "/img/review2.jpeg",
      text: "Excellent customer service and easy-to-use platform. Highly recommended!",
    },
  ];

  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to active slide
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: active * window.innerWidth,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-gray-100">

      {/* Top Heading Section */}
      <div className="absolute top-4 md:top-8 w-full text-center z-20 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          Wall of Love
        </h2>

        <p className="text-gray-700 mt-2 text-sm md:text-base max-w-xl mx-auto">
          People love DrishtiHR! Here’s what some of our users have to say.
        </p>

        <h3 className="text-2xl md:text-3xl font-extrabold mt-4">
          What Our  <span className="text-blue-700"> Clients Say</span>
        </h3>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex h-full w-full overflow-hidden scroll-smooth no-scrollbar pt-28 md:pt-32"
      >
        {slides.map((item, i) => (
          <div
            key={i}
            className="w-screen h-full flex-shrink-0 flex justify-center items-center px-4"
          >
            <div className="bg-white shadow-xl p-6 md:p-8 rounded-2xl max-w-lg w-full text-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto object-cover"
              />
              <h3 className="text-xl md:text-2xl font-semibold mt-4">
                {item.name}
              </h3>

              <p className="text-blue-700 font-medium text-sm md:text-base">
                {item.role}
              </p>

              <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
