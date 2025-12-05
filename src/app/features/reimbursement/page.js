"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import DrishtiCTA from "../../Components/getready";

export default function Performance() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Drishti Reimbursement Development{" "}
            <span className="text-blue-700"> Software</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto">
            Empower your workforce with actionable career plans and learning
            recommendations that close skill gaps and accelerate growth, all
            managed through an intuitive platform.
          </p>

         
        <Link href={"/contact-us"}>
         
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-blue-700 px-10 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            TALK TO US
          </motion.button>
         
         </Link>
        </motion.div>
      </div>

      <section className="bg-slate-100 px-4 py-12">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: screenshot / card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your real screenshot */}
              <img
                src="/img/Reimburshment.jpg"
                alt="Allowance management dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
                    Empower Growth with Talent Development
                  </p> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Intelligent Task <span className="text-blue-700"> Tracking</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Monitor task progress with real-time updates and priority alerts.
              Streamline workflows with automatic reminders, ensuring deadlines
              are met efficiently.
            </p>
            <ul className="pt-3 list-disc list-inside space-y-1">
              <li>Real-time task status</li>
              <li>Priority-based notifications</li>
              <li>Team collaboration boards</li>
              <li>Automated reminders and alerts</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-12">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              Transform Skills into Success with Talent Development
            </p> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
Real-Time Tracking & Status               <span className="text-blue-700"> Updates</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Keep employees informed every step of the way. From submission to final approval and payout, everyone gets a transparent view of their reimbursement status, reducing follow-up emails and uncertainty.


              <ul className="pt-3 list-disc list-inside space-y-1">
                <li>Dashboard view of pending, approved & rejected claims</li>
                <li>Status alerts via email or app</li>
                <li>Estimated timelines for approval & disbursal</li>
                <li>Filters for date, category, or project</li>
              </ul>
            </p>
          </motion.div>

          {/* Right: screenshot / card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your real screenshot */}
              <img
                src="/img/Reimburshment.jpg"
                alt="Payroll / contract dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>










          <section className="bg-slate-100 px-4 py-12">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: screenshot / card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your real screenshot */}
              <img
                src="/img/Reimburshment.jpg"
                alt="Allowance management dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
                    Empower Growth with Talent Development
                  </p> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Compliance &  <span className="text-blue-700"> Reporting</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Ensure every claim is compliant with company policies and audit-ready. Generate detailed reports for finance, monitor trends, and identify discrepancies. Export to Excel, PDF, or integrate with accounting systems.


            </p>
            <ul className="pt-3 list-disc list-inside space-y-1">
              <li>Policy violation alerts</li>
              <li>Exportable audit trails</li>
              <li>Monthly & custom reports</li>
              <li>Integration with accounting/ERP tools</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-12">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              Transform Skills into Success with Talent Development
            </p> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
Effortless Expense 
              <span className="text-blue-700">  Submission</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
Simplify how employees submit expenses. Whether it's travel, meals, or client entertainment, employees can upload receipts directly from mobile or desktop, add notes, and send for approval in seconds. No more lost receipts or manual paperwork.



              <ul className="pt-3 list-disc list-inside space-y-1">
                <li>Mobile & desktop-friendly submission</li>
                <li>Real-time upload of receipts</li>
                <li>Quick categorization of expense types</li>
                <li>Seamless user interface for faster input</li>
              </ul>
            </p>
          </motion.div>

          {/* Right: screenshot / card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your real screenshot */}
              <img
                src="/img/Reimburshment.jpg"
                alt="Payroll / contract dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <DrishtiCTA />
    </>
  );
}
