"use client";

import Image from "next/image";
import Slider from "../slider/page";
import DrishtiCTA from "../Components/getready";
export default function DrishtiHR() {
  return (
    <>
      <section className="w-full bg-[#E8EEF7] py-18 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="flex justify-start relative">
            <Image
              src="/img/home1.webp"
              alt="HR Management"
              width={350}
              height={300}
              className="rounded-lg object-cover"
            />

            {/* FLOATING SMALL CARDS */}
            <div className="absolute -top-1/6 left-0  bg-white shadow-md rounded-xl p-3 w-40">
              <p className="text-sm font-semibold ">Employee Directory</p>
            </div>

            <div className="absolute bottom-6 right-18 bg-white shadow-md rounded-xl p-3 w-40">
              <p className="text-sm font-semibold">Leave Request</p>
            </div>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              DRISHTI HR MANAGEMENT{" "}
              <span className="text-blue-600">SIMPLIFIED</span>
            </h1>
            <div>
              <p className="mt-6 text-gray-900 font-bold leading-relaxed">
                Get instant access to important Drishti HR information. Work
                faster, work smarter.{" "}
              </p>

              <p>
                Shape the future of work for your organization with a strong,
                flexible, and global Drishti HR solution.
              </p>
            </div>

            <ul className="mt-8 space-y-4 text-lg text-gray-800">
              <li>
                {" "}
                <span className="text-blue-600 font-bold text-xl">✔</span> An
                employee database that scales.
              </li>
              <li>
                <span className="text-blue-600 font-bold text-xl">✔</span> Easy
                access to documents information.
              </li>
              <li>
                <span className="text-blue-600 font-bold text-xl">✔</span>{" "}
                Drishti HR workflows.
              </li>
              <li>
                {" "}
                <span className="text-blue-600 font-bold text-xl">✔</span>{" "}
                Automation of Drishti HR processes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-12 px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold">
              TIME AND ATTENDANCE OF YOUR{" "}
              <span className="text-blue-800">EMPLOYEE</span>
            </h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Allow time for greatness and unlock higher productivity through
              our integrated and advanced time and attendance management system.
              Simplify and create a digitally seamless onboarding experience
              that shortens the new employees’ time to productivity. Then set
              them up for success and build delightful employee journeys from
              day one.
            </p>

            {/* Features List */}
            <ul className="mt-6 space-y-3 text-gray-800 ">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold text-xl">✔</span>
                Enhanced employee accountability
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold text-xl">✔</span>
                Accurate payroll processing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold text-xl">✔</span>
                Flexible instantaneous attendance recording
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold text-xl">✔</span>
                Attendance policies that are transparent and consistent
              </li>
            </ul>
          </div>

          {/* Image / Calendar Section */}
          <div className="flex-1 w-full max-w-lg relative ">
            <div className="flex justify-center">
              <img
                src="/img/logo.png"
                alt="image not show"
                className="w-20 h-20 rounded object-cover "
              />
            </div>
            <div className=" rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/img/home2.svg"
                alt="Attendance Dashboard"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e7ecf8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-2">
              DRISHTI HR MANAGEMENT
            </h2>

            <h3 className="text-3xl font-extrabold text-blue-700 mb-6">
              SIMPLIFIED
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Adapt to new realities, work faster and smarter. Determine a
              defined future of work for your organization. Equip your Drishti
              HR team with strong, flexible, global Drishti HR solutions. Align
              workforce goals with strategic growth in a changing environment.
            </p>

            <ul className="space-y-3 text-gray-900">
              <li>
                <span className="text-blue-600 font-bold text-xl">✔</span> Easy
                access to documents and information
              </li>
              <li>
                <span className="text-blue-600 font-bold text-xl">✔</span> An
                employee database that scales
              </li>
              <li>
                <span className="text-blue-600 font-bold text-xl">✔</span>{" "}
                Drishti HR workflows
              </li>
              <li>
                <span className="text-blue-600 font-bold text-xl">✔</span> Issue
                resolution
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE CONTENT */}
          <div className="flex justify-center lg:justify-end ">
            <div className="relative w-full max-w-md">
              <div className="flex justify-center">
                <img
                  src="/img/logo.png"
                  alt="image not show"
                  className="w-20 h-20 rounded object-cover "
                />
              </div>
              <img
                src="/img/home3.webp"
                className="w-full h-full object-contain rounded-lg"
                alt="HR Dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e7ecf8] py-20 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
              Why Choose Drishti HR Solutions?
            </h2>

            <div className="space-y-8 text-gray-800">
              <div>
                <h3 className="font-bold text-lg">
                  All-in-One Drishti HR Suite:
                </h3>
                <p>
                  Say goodbye to spreadsheets and juggling multiple tools.
                  Drishti HR handles payroll, attendance, recruitment, leave
                  management, performance reviews, task management, asset
                  tracking, and more—seamlessly.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Built for Growing Teams:</h3>
                <p>
                  Whether you’re a team of 5 or 100, our software scales with
                  you. Spend less time on admin and more time growing your
                  business.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">User-Friendly Interface:</h3>
                <p>
                  No tech skills? No problem. Drishti HR is designed to be
                  intuitive for everyone—founders, HR staff, and employees
                  alike.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Affordable Pricing:</h3>
                <p>
                  Powerful HR tools shouldn’t break the bank. Get
                  enterprise-level features without the enterprise price tag.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Local Support That Cares:</h3>
                <p>
                  Need help? Our friendly support team is just a call or click
                  away. We’re here to help you succeed.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col items-center text-center p-10 pt-20">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Discover why global clients trust <br />
              DrishtiHR software. Join us today!
            </p>

            <img
              src="/img/logo.png"
              alt="Drishti Logo"
              className="w-30 h-30 object-contain mb-4 border-4 border-green-600 rounded-full "
            />

            <p className="text-blue-800 font-bold text-lg">
              DRISHTI HUMAN RESOURCES MANAGEMENT SYSTEM
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e7ecf8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-extrabold text-black mb-4">
              DRISHTI HR HELP <span className="text-blue-700">DESK</span>
            </h2>

            <p className="text-gray-800 leading-relaxed mb-8">
              Provide incomparable support to your employees, wherever they are,
              any time they need you with an efficient, automated, and advanced
              helpdesk system. Employees can get assistance or ask questions
              about human resources rules, practices, and benefits at the
              Drishti HR help desk, a single point of contact.
            </p>

            <ul className="space-y-3 text-gray-900 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold text-xl">✔</span>{" "}
                Improved analytics and reporting
              </li>

              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold text-xl">✔</span>{" "}
                Information and support
              </li>

              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold text-xl">✔</span>{" "}
                Drishti HR policies and practices
              </li>

              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold text-xl">✔</span> Issue
                resolution
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="relative w-full flex justify-center lg:justify-end ">
            {/* BACKGROUND CARD IMAGE */}
            <img
              src="/img/home4.svg"
              alt="Helpdesk Dashboard"
              className="w-full lg:w-full object-contain drop-shadow-xl"
            />

            {/* TOP LOGO CARD */}
            {/* <img
            src="/img/logo.png"
            alt="Logo"
            className="absolute  right-9 w-30 h-25 drop-shadow-lg"
          /> */}

            {/* PRIORITY CHART CARD */}
            {/* <img
              src="/images/helpdesk-priority.png"
              alt="Priority Chart"
              className="absolute bottom-4 left-4 w-48 drop-shadow-lg"
            /> */}
          </div>
        </div>
      </section>

      {/* Slider */}

      <Slider />



      {/* <!-- Responsive DRISHTI HR PERFORMANCE MANAGEMENT Section --> */}
      <section class="w-full bg-[#f1f5ff] py-20 px-6 md:px-16 lg:px-30">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* <!-- Left Side Image Cards --> */}
          <div class="relative w-full flex justify-center ">
            <img
              src="/img/home6.webp"
              alt="HR Dashboard"
              class="w-full max-w-lg rounded-xl shadow-lg"
            />
          </div>

          {/* <!-- Right Side Content --> */}
          <div class="space-y-6">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              DRISHTI <br /> HR PERFORMANCE <br />{" "}
              <span class="text-blue-700">MANAGEMENT</span>
            </h1>

            <p class="text-gray-700 text-base md:text-lg leading-relaxed">
              Regular performance management with DrishtiHR encourages your
              employees to aim for excellence. Your organization is set up for
              success and continuous growth.
            </p>

            <ul className="space-y-4 text-gray-800 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-blue-600 font-bold text-xl">✔</span> 360°
                performance reviews and templates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 font-bold text-xl">✔</span>{" "}
                Management by Objectives
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 font-bold text-xl">✔</span>{" "}
                Self-evaluation tools
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 font-bold text-xl">✔</span>{" "}
                Performance reports
              </li>
            </ul>
          </div>
        </div>
      </section>

      <DrishtiCTA />
    </>
  );
}
