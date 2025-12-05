"use client";

import React from "react";
import Link from "next/link";
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
            Drishti Performance Management
            <span className="text-blue-700"> Software</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto">
            Horilla's Attendance Management Software ensures accurate tracking,
            real-time insights, and effortless monitoring through a seamless
            check-in/out system and an intuitive dashboard.
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
                src="/img/Performance.jpg"
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
              Empower Growth with Talent Development
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Align your performance objectives with your company
              <span className="text-blue-700"> mission</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Align all goals and communicate them throughout the business, from
              the highest levels downward. Each person must achieve the section
              goals, each section must achieve departmental goals, while each
              department achieves business goals.
            </p>
            <ul className="pt-3 list-disc list-inside space-y-1">
              <li>Better alignment with strategy</li>
              <li>Auto-Sync Goal Achievements</li>
              <li>Library & Goal Plans</li>
              <li>Cascade Goals</li>
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
              Transform Skills into Success with Talent Development
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Talent
              <span className="text-blue-700"> Development</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Fostering talent growth embodies the aspiration for excellence.
              Fast-track career growth with actionable development plans that
              nurture your best talent and help retain it. Boost career plans
              with learning recommendations that help employees fill their skill
              gaps to reach their next career milestones faster.{" "}
              <ul className="pt-3 list-disc list-inside space-y-1">
                <li>Career Plans & IDP</li>
                <li>Efficient employee case management</li>
                <li>Smart HR workflows</li>
                <li>Insightful analytics</li>
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
                src="/img/Performance.jpg"
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
                src="/img/Performance.jpg"
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
              Hour Account
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Conversat <span className="text-blue-700"> ions</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Create a nimble performance culture by giving managers the tools
              to record performance and engage employees at critical times.
              Incorporate continuous feedback from relevant stakeholders, making
              performance management multi-dimensional.
            </p>
            <ul className="pt-3 list-disc list-inside space-y-1">
              <li>Daily performance management, not an annual event</li>
              <li>Status Updates</li>
              <li>Performance Journals</li>
              <li>Continuous Feedback</li>
              <li>Multi-Stakeholder Feedback</li>
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
Day-to-Day Performance Improvement

            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
Multi-Stakeholder 
              <span className="text-blue-700"> Feedback</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
           Managers and employees use mobile-first check-ins, journals, and continuous feedback to manage and improve day-to-day performance. Help your employees become the best versions of themselves with a talent lens far beyond performance.


            
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
                src="/img/Performance.jpg"
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
