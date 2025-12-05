"use client";

import Image from "next/image";

import ClientFeatureCard from "../Components/cardfeature";
import DrishtiCTA from "../Components/getready";
const cards = [
  {
    icon: "✔",
    title: "Task",
    description:
      "Efficiently track employee attendance with accurate timekeeping and intuitive reporting.",
    buttonText: "Explore",
    link: "/features/task",
  },
  {
    icon: "✔",
    title: "Attendance",
    description:
      "Efficiently track employee attendance with accurate timekeeping and intuitive reporting.",
    buttonText: "Explore",
    link: "/features/attendance",
  },
  {
    icon: "✔",
    title: "Payroll",
    description:
      "Efficiently track employee payroll with accurate calculations and automation.",
    buttonText: "Explore",
    link: "/features/payroll",
  },
  {
    icon: "✔",
    title: "Recruitment",
    description:
      "Simplify hiring with automated recruitment workflows and smart candidate tracking.",
    buttonText: "Explore",
    link: "/features/recruitment",
  },
  {
    icon: "✔",
    title: "Onboarding",
    description:
      "Create smooth onboarding experiences with automated employee setup processes.",
    buttonText: "Explore",
    link: "/features/onboarding",
  },
  {
    icon: "✔",
    title: "Leave",
    description:
      "Manage employee leave requests with seamless approval workflows.",
    buttonText: "Explore",
    link: "/features/leave",
  },
  {
    icon: "✔",
    title: "Performance",
    description:
      "Track employee performance with structured reviews and analytics.",
    buttonText: "Explore",
    link: "/features/performance",
  },
  {
    icon: "✔",
    title: "Reimbursement",
    description:
      "Easily process employee reimbursement claims with digital receipts.",
    buttonText: "Explore",
    link: "/features/reimbursement",
  },
  // {
  //   icon: "✔",
  //   title: "HR Policies",
  //   description:
  //     "Centralize and manage company policies for easy employee access.",
  //   buttonText: "Explore",
  //   link: "/HR-Policies",
  // },
  // {
  //   icon: "✔",
  //   title: "Assets",
  //   description:
  //     "Track and manage company assets with full lifecycle visibility.",
  //   buttonText: "Explore",
  //   link: "/Assets",
  // },
];


export default function FeaturesSection() {
  return (
    <>
      <section className="w-full bg-[#E6EBF6] py-25">
        {/* Top Heading */}
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Explore Our <span className="text-[#0043C6]">Features</span>
          </h1>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            From hiring to offboarding, all features in one platform.
          </p>
        </div>

        {/* Blue Strip With Illustration */}
        <div className="relative w-full mt-20">
          {/* Blue Background */}
          <div className="w-full bg-[#0043C6] h-40  sm:h-56 lg:h-30"></div>

          {/* Image floating above blue line */}
          <div className="absolute inset-0 flex justify-center -top-40 sm:-top-20 lg:-top-24">
            <Image
              src="/img/Features.svg"
              alt="Features Illustration"
              width={600}
              height={600}
              className="w-52 sm:w-72 md:w-96  lg:w-[450px] h-auto"
              priority
            />
          </div>
        </div>

        {/* Bottom Heading */}
        {/* <div className="max-w-5xl mx-auto text-center mt-24 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Our <span className="text-[#0043C6]">Features</span>
        </h1>
      </div> */}
      </section>

      <div className="text-center p-8">
        <h1 className="text-4xl p-5 sm:text-5xl font-bold">
          Our <span className="text-[#0043C6]">Features</span>
        </h1>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <ClientFeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>

      <DrishtiCTA />
    </>
  );
}
