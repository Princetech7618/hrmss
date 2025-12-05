"use client";
import Link from "next/link";

import React from "react";
import { motion } from "framer-motion";

import DrishtiCTA from "../../Components/getready";
export default function HrPolicies() {
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
            Drishti HR Policies <span className="text-blue-700"> Software</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto">
            Enhance hiring efficiency with seamless job posting, structured
            candidate management, and a streamlined onboarding process using
            Drishti HR Policies Software.
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
                src="/img/HRpolicy.jpg"
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
              Centralized Drishti HR Policy
              <span className="text-blue-700"> Repository</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Managing multiple policies across departments can be overwhelming.
              A centralized Drishti HR policy repository gives your organization
              one organized location where all rules, regulations, and
              guidelines are stored digitally. From onboarding to exit
              protocols, employees can easily search and access up-to-date
              policies anytime — reducing confusion and increasing transparency.
            </p>
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
              Policy Acknowledgment &{" "}
              <span className="text-blue-700"> Employee Consent Updates</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Ensure employees not only have access to policies but also confirm
              they’ve read and understood them. With a digital acknowledgment
              feature, Drishti HR can request confirmations, send automatic
              reminders, and keep a record of who has agreed to which policy.
              This minimizes compliance risks and builds a culture of
              accountability across the organization.
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
                src="/img/HRpolicy.jpg"
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
                src="/img/HRpolicy.jpg"
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
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              Performance Monitoring
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Real-Time Policy Updates &
              <span className="text-blue-700"> Alerts</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Drishti HR departments can update existing policies or roll out
              new ones within seconds. Real-time alerts ensure employees are
              informed the moment a policy changes. Whether it’s a change in
              leave policy or a new work-from-home guideline, everyone stays on
              the same page — no matter where they are working from.
            </p>
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
              Compliance Monitoring &
              <span className="text-blue-700"> Analytics</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Gain a clear picture of how well policies are being followed with
              built-in compliance tracking. Visual dashboards help Drishti HR
              teams spot trends, identify knowledge gaps, and ensure no one
              misses a critical update. Exportable reports make it easy to share
              insights with leadership, legal teams, or auditors — keeping your
              organization prepared and protected.
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
                src="/img/HRpolicy.jpg"
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
