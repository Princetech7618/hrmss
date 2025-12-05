// const HeroSection = () => {
//   return (
//     <section className="bg-[#e6ecfb] mt-18">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col lg:flex-row items-center gap-10">
//         {/* Left content */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#020617]">
//             <span className="block">ALL-IN-ONE Drishti HR,</span>
//             <span className="block text-[#0056d6]">
//               PAYROLL &amp; RECRUITMENT
//             </span>
//           </h1>
//           <div className="">
//             <p className="mt-5 text-sm sm:text-base text-slate-700 max-w-xl mx-auto lg:mx-0">
//               Simplifying Drishti HR management, performance tracking,
//               workflows, <br />
//               <span>
//                 attendance, payroll, leave, task management, onboarding, <br />
//               </span>
//               <span>and recruitment – all in one platform.</span>
//             </p>
//           </div>
//           <div className=" flex justify-around space-x-30 mt-6  text-sm sm:text-base  text-slate-800">
//             <p className="text-center  font-bold">No Credit Card Required</p>
//             <p className="text-center  font-bold">No Commitment</p>
//           </div>

//           <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-center">
//             <button className="px-3 py-3 rounded-md bg-[#003b9a] text-white text-sm sm:text-base font-semibold shadow hover:bg-[#002e78] transition">
//               Start 30 Days Free Trial
//             </button>
//             <button className="px-6 py-3 rounded-md bg-black text-white text-sm sm:text-base font-semibold shadow hover:bg-slate-900 transition">
//               Schedule a Demo
//             </button>
//           </div>
//         </div>

//         {/* Right image */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <img
//             src="/img/hero.webp"
//             alt="HR, payroll and recruitment dashboards on multiple devices"
//             className="w-full max-w-xl h-auto"
//           />
//         </div>
//       </div>
//       <div>
//         <h1 className="flex justify-center  text-bold italic font-bold">
//           Trusted by
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";
import Link from "next/link";


const HeroSection = ({
  titleTop,
  titleBottom,
  description,
  bullet1,
  bullet2,
  primaryBtnText,
  secondaryBtnText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="bg-[#e6ecfb] mt-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col lg:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#020617]">
            <span className="block">{titleTop}</span>
            <span className="block text-[#0056d6]">{titleBottom}</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-slate-700 max-w-xl mx-auto lg:mx-0">
            {description}
          </p>

          <div className="flex justify-normal gap-10 mt-6 text-sm sm:text-base text-slate-800">
            <p className="font-bold">{bullet1}</p>
            <p className="font-bold">{bullet2}</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
       <Link href="/demo"> 
            <button className="px-3  cursor-pointer py-3 rounded-md bg-[#003b9a] text-white text-sm sm:text-base font-semibold shadow hover:bg-[#002e78] transition">
              {primaryBtnText}
            </button>
       </Link>

          <Link href="/demo">
            <button className="px-6 py-3 cursor-pointer   rounded-md bg-black text-white text-sm sm:text-base font-semibold shadow hover:bg-slate-900 transition">
              {secondaryBtnText}
            </button>
          </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-xl h-auto"
          />
        </div>
      </div>

      <div>
        <h1 className="flex justify-center italic font-bold">
          Trusted by
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
  