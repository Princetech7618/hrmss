"use client";
import Link from "next/link";
import React from "react";
import DrishtiCTA from "../../Components/getready";
import { motion } from "framer-motion";

export default function Onboarding() {
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
            Drishti Onboarding Management
            <span className="text-blue-700">Software</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto">
            Enhance hiring efficiency with seamless job posting, structured
            candidate management, and a streamlined onboarding process using
            Drishti Onboarding Management Software.
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
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              Progress{" "}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Progress
              <span className="text-blue-700">notifications</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Users can utilise DrishtiHR to stay updated on the status of their
              tasks or requests. Users can remain informed and involved during
              the application process by delivering real-time updates, push
              notifications, email notifications, dashboard updates, tailored
              notifications, feedback, and confirmation. Star Icon ImageMonitor
              all company projects and tasks in one place. Star Icon
              ImageDelegate to, and notify, only the relevant staff. Star Icon
              ImageSetup reminders for milestones and deadlines. Star Icon
              ImageView and download reports on the progress of your tasks.
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
                src="/img/onboarding.jpg"
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
                src="/img/onboarding.jpg"
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
              Delegate tasks{" "}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Delegate tasks and set reminders
              <span className="text-blue-700">reminders</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              A must-have set of productivity and time management tools. Ensure
              jobs are performed quickly, efficiently, and without missing
              important deadlines or events. Delegate tasks to individuals,
              managers, or teams. Every staff member can access their own
              message board. Advance notifications to the right people about
              actions and deadlines. Send notes to ensure employees have
              everything they need to complete the task.
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
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              Performance Monitoring
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Real-Time
              <span className="text-blue-700"> Performance</span>
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
                src="/img/onboarding.jpg"
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
                src="/img/onboarding.jpg"
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
              Track task status
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Trac
              <span className="text-blue-700">king</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              DrishtiHR can keep tabs on the status of tasks and give managers
              and workers real-time updates. This can ensure that work is
              finished on schedule and that any possible bottlenecks are found
              and dealt with. It help organizations streamline workflows,
              increase productivity, and improve task visibility. Star Icon
              ImageTask scheduling Star Icon ImagePrioritization Star Icon
              ImageReminders and notifications Star Icon ImageMessage boards for
              tasks and teams
            </p>
          </motion.div>
        </div>
      </section>


      <DrishtiCTA/>
    </>
  );
}
