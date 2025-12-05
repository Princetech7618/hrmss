"use client";

import React from "react";
import DrishtiCTA from "../../Components/getready";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Leave() {
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
            Drishti Leave Management
            <span className="text-blue-700"> Software</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto">
            Enhance hiring efficiency with seamless job posting, structured
            candidate management, and a streamlined onboarding process using
            Drishti Leave Management Software.
          </p>

         
        <Link href={"/contact-us"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex  cursor-pointer items-center justify-center rounded-full bg-blue-700 px-8 py-3 text-sm sm:text-base font-medium text-white shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              TALK TO US
            </motion.button>
        
        
        </Link>
        </motion.div>
      </div>

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
              Progress{" "}
            </p> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Intuitive
              <span className="text-blue-700">Features</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Customise the leave function to match company policies.
              <ul className="pt-3 list-disc list-inside space-y-1">
                <li>Star Icon ImageManage advanced leave requirements.</li>
                <li>
                  Star Icon ImageAutomatically monitor the sick leave rule.
                </li>
                <li>Star Icon ImageAutomatically track leave balances.</li>
                <li>
                  Star Icon ImageSet up advanced rules, e.g., long-service leave
                  policies.
                </li>
                <li>
                  Star Icon ImageInclude all leave types that comply with
                  employment laws.
                </li>
                <li>
                  Star Icon ImageSet up additional leave types, such as study
                  leave.
                </li>
                <li>
                  Star Icon ImageAccess system anywhere, anytime, from the PC,
                  smartphone, or tablet.
                </li>
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
                src="/img/Leave.jpg"
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
                src="/img/Leave.jpg"
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
              Delegate tasks{" "}
            </p> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Managers’ Decision
              <span className="text-blue-700">Making</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              DrishtiHR allows you to monitor performance through dashboards and
              detailed reports. Track task completion, measure productivity, and
              gain insights to enhance efficiency across your team.
            </p>
            <ul className="pt-3 list-disc list-inside space-y-1">
              <li>Real-time progress dashboards</li>
              <li>Track deadlines and task completion rates</li>
              <li>Identify high and low performers</li>
              <li>Time-based efficiency analytics</li>
              <li>Exportable performance reports</li>
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
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              Track task status
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Employ <span className="text-blue-700">ees</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              As the ones who request and use the leave entitlements offered by
              their employer, employees play a key part. Maintaining a positive
              work-life balance, guaranteeing appropriate personnel, and
              preventing operational delays due to unscheduled absences all
              depend on the efficient handling of employees’ leaves.
              <ul className="pt-3 list-disc list-inside space-y-1">
                <li>Employee access to leave balance and history.</li>
                <li>Apply for leave online or from the smartphone app.</li>
              
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
                src="/img/Leave.jpg"
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
                src="/img/Leave.jpg"
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
              Delegate tasks{" "}
            </p> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
Many Other 
              <span className="text-blue-700">Features</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        Some of the other features to help you manage leave more efficiently are:


            </p>
            <ul className="pt-3 list-disc list-inside space-y-1">
              <li>Automatically take public holidays into account.</li>
              <li>Integrate your leave calendar with Outlook, Google or other calendars.</li>
              <li>Set-up departments with different approvers.</li>
              <li>Time-based efficiency analytics</li>
              <li>Comprehensive reporting with exports to Excel or CSV.</li>
            </ul>
          </motion.div>
        </div>
      </section>
      <DrishtiCTA />
    </>
  );
}
