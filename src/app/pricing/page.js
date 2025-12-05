// "use client";
// import Image from "next/image";

// export default function PricingPage() {
//   return (
//     <section className="w-full bg-white py-25 px-4 ">
//       {/* Heading */}
//       <div className="text-center max-w-4xl mx-auto">
//         <h1 className="text-4xl sm:text-5xl font-bold">
//           HRMS Software Pricing
//         </h1>
//         <p className="text-gray-600 mt-3 text-base sm:text-lg">
//           Simple, Transparent, and Affordable
//         </p>

//         <p className="mt-4 inline-block bg-[#D7F6EE] text-[#087F5B] px-3 py-1 rounded-full text-sm font-medium">
//           No credit card required
//         </p>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl   mx-auto mt-12">
//         {/* Usage Cost */}
//         <div className="border rounded-xl shadow-sm  bg-white">
//           <div className=" text-black  text-center py-4 text-xl font-semibold">
//                                      Usage Cost

//           </div>
//           <p className="text-4xl font-bold text-center">
//             ₹2 <span className="text-lg font-medium">/ emp / day</span>
//           </p>
//           <p className="text-gray-600 text-center mt-4">
//             Pay only for what you use. Ideal for growing businesses.
//           </p>
//         </div>

//         {/* Setup Cost */}
//         <div className="border rounded-xl shadow-sm p-2 bg-white">
//           <div className=" text-black text-center py-4 text-xl font-semibold">
//             Setup Cost{" "}
//           </div>

//           <div className="border rounded-lg p-6 mt-3">
//             <div className="flex justify-between text-gray-700 py-2">
//               <span>0 - 20 Employees</span>
//               <span className="font-semibold">₹5000</span>
//             </div>
//             <div className="flex justify-between text-gray-700 py-2">
//               <span>21 - 50 Employees</span>
//               <span className="font-semibold">₹3000</span>
//             </div>
//             <p className="text-sm text-gray-500 text-center mt-3">
//               One-time setup charge
//             </p>
//           </div>
//         </div>

//         {/* Free Trial */}
//         <div className="border rounded-xl shadow-sm bg-white overflow-hidden">
//           <div className="bg-[#178E5C] text-white text-center py-4 text-xl font-semibold">
//             Free Trial
//           </div>

//           <div className="p-2">
//             <p className="text-center text-3xl font-bold">0 to 30 Days</p>
//             <p className="text-gray-600 text-center mt-4">
//               Try all features absolutely free with no obligations.
//             </p>

//             <div className="flex justify-center mt-5">
//               <span className="bg-[#178E5C] text-white px-4 py-1 rounded-full text-sm">
//                 30 Days Free
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
//         <button className="bg-[#0043C6] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90">
//           Start Free Trial
//         </button>

//         <button className="border border-gray-400 px-8 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100">
//           Get Free Demo
//         </button>
//       </div>
//     </section>
//   );
// }








"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import DrishtiCTA from "../Components/getready";
export default function PricingPage() {

      const faqs = [
    {
      question: "Do you offer custom pricing for large enterprises?",
      answer:
        "Yes, for enterprises with unique requirements or larger employee counts, we provide custom pricing and personalized solutions.",
    },
    {
      question: "Can I switch plans or upgrade at any time?",
      answer:
        "Yes, you can switch or upgrade your plan at any time without any additional charges.",
    },
    {
      question: "Can I get more value for my budget with RapidHR ATS?",
      answer:
        "Absolutely! We provide cost-efficient HR solutions designed to maximize value for your business.",
    },
    {
      question: "I have questions that aren’t in the FAQ. How can I contact you?",
      answer:
        "You can contact our support team anytime through email or live chat.",
    },
    {
      question:
        "Can I migrate my data from my existing system to RapidHR ATS?",
      answer:
        "Yes, our support team will help you migrate all your data smoothly and securely.",
    },
  ];


  
  const [openIndex, setOpenIndex] = useState(0);
  return (


    <>
    
        <section className="w-full bg-white py-25 px-4">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold">
          HRMS Software Pricing
        </h1>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Simple, Transparent, and Affordable
        </p>

        <p className="mt-4 inline-block bg-[#D7F6EE] text-[#087F5B] px-3 py-1 rounded-full text-sm font-medium">
          No credit card required
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        
        {/* ==================== Usage Cost ==================== */}
        <div className="border rounded-xl shadow-sm bg-white">
          {/* Column Heading with Line */}
          <div className="border-b w-full py-4 text-center text-black font-semibold text-sm">
            Usage Cost
          </div>

          <p className="text-4xl font-bold text-center mt-4">
            ₹2 <span className="text-lg font-medium">/ emp / day</span>
          </p>

          <p className="text-gray-600 text-center mt-4 text-sm px-4">
            Pay only for what you use. Ideal for growing businesses.
          </p>
        </div>

        {/* ==================== Setup Cost ==================== */}
        <div className="border rounded-xl shadow-sm bg-white">
          {/* Column Heading with Line */}
          <div className="border-b w-full py-4 text-center text-black font-semibold text-sm">
            Setup Cost
          </div>

          <div className="border  rounded-lg p-6 m-4">
            <div className="flex border-b justify-between text-gray-700 py-2 text-sm">
              <span >0 - 20 Employees</span>
              <span className="font-semibold">₹5000</span>
            </div>

            <div className="flex  border-b justify-between text-gray-700 py-2 text-sm">
              <span>21 - 50 Employees</span>
              <span className="font-semibold">₹3000</span>
            </div>

            <p className="text-xs border-b text-gray-900 text-center mt-3">
              One-time setup charge
            </p>
          </div>
        </div>

        {/* ==================== Free Trial ==================== */}
        <div className="border rounded-xl shadow-sm bg-white overflow-hidden">
          {/* Column Heading with Line */}
          <div className="border-b w-full py-4 text-center bg-[#178E5C] text-white font-semibold text-sm">
            Free Trial
          </div>

          <div className="p-4">
            <p className="text-center text-3xl font-bold ">0 to 30 Days</p>
            <p className="text-gray-600 text-center mt-4 text-sm">
              Try all features absolutely free with no obligations.
            </p>

            <div className="flex justify-center mt-5">
              <span className="bg-[#178E5C] text-white px-4 py-1 rounded-full text-xs">
                30 Days Free
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
   <Link href={"./Bookademo"}>
        <button className="bg-[#0043C6] cursor-pointer  text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 text-sm">
          Start Free Trial
        </button>
   </Link>

 <Link href={"./Bookademo"}>
        <button className="border cursor-pointer border-gray-400 px-8 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 text-sm">
          Get Free Demo
        </button>
 </Link>
      </div>
    </section>


  <section className="w-full bg-[#E3E9F7] py-20 px-4">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
        Frequently asked questions
      </h2>

      {/* FAQ Wrapper */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-none">
            {/* Question Row */}
            <button
              className={`w-full flex justify-between items-center text-left px-5 py-4 text-base sm:text-lg font-medium transition-all duration-200
                ${
                  openIndex === index
                    ? "bg-[#D5E3FC] text-black"
                    : "bg-white text-gray-700"
                }
              `}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {faq.question}

              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {/* Answer Section */}
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-700 text-sm sm:text-base leading-relaxed bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

<DrishtiCTA />

    </>
  );
}
