"use client";

import Image from "next/image";
import counter from "./Components/counter";
import ClientFeatureCard from "./Components/cardfeature";
import HeroSection from "./Components/hero";
import Drishtihr from "./Components/drishtihr";

// Stats Data
const statsData = [
  { icon: "🏢", value: 100, label: "Companies" },
  { icon: "👥", value: 250, label: "Employees" },
  { icon: "⬜", value: 12, label: "Features" },
  { icon: "📍", value: 100, label: "Cities" },
];

// Feature Cards
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
  {
    icon: "✔",
    title: "HR Policies",
    description:
      "Centralize and manage company policies for easy employee access.",
    buttonText: "Explore",
    link: "/features/hr-policy",
  },
  {
    icon: "✔",
    title: "Assets",
    description:
      "Track and manage company assets with full lifecycle visibility.",
    buttonText: "Explore",
    link: "/features/assets",
  },
];


export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection
        titleTop="ALL-IN-ONE Drishti HR,"
        titleBottom="PAYROLL & RECRUITMENT"
        description="Simplifying Drishti HR management, performance tracking, workflows, attendance, payroll, leave, task management, onboarding, and recruitment – all in one platform."
        bullet1="No Credit Card Required"
        bullet2="No Commitment"
        primaryBtnText="Start 30 Days Free Trial"
        secondaryBtnText="Schedule a Demo"
        imageSrc="/img/hero.webp"
        imageAlt="HR, payroll and recruitment dashboards on multiple devices"
      />

      {/* COUNTER SECTION */}
      <counter stats={statsData} />

      {/* FEATURE CARDS GRID */}
      <section className="bg-[#e6ecfb] py-10 sm:py-10">
        {/* Title bottom */}
        <div className="pb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold shadow  tracking-wide">
            <span className="text-[#020617]">DRISHTI HR </span>
            <span className="text-[#0056d6]">FEATURES</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <ClientFeatureCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* DRISHTI HR SECTION */}
      <Drishtihr />
    </>
  );
}
