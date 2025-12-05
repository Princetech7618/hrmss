"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DrishtiCTA from "../../Components/getready";

const PayrollHeroPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Drishti Payroll Management{" "}
            <span className="text-blue-700">Software</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto">
            Experience seamless payroll, management, and compliance with Drishti
            HRMS, ensuring accuracy, efficiency, and stress‑free Drishti HR
            operations in one platform.
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
        </motion.section>
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
              CONTRACT MANAGEMENT
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Manage All the{" "}
              <span className="text-blue-700">Contracts &amp; Agreements</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Drishti HRMS Contract Management offers a user-friendly solution
              for managing employment agreements. You can effortlessly create
              contracts, define compensation options, set contract duration, and
              manage leave settings. The platform supports various wage types,
              allowing for easy customization of work arrangements for
              employees.
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
                src="/img/Payroll.jpg"
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
                src="/img/payroll.jpg"
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
              ALLOWANCE MANAGEMENT
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Manage Allowances with <span className="text-blue-700">Ease</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Drishti Open Source Payroll Software offers a user-friendly
              interface to manage various types of allowances. It allows you to
              create and customize different types of allowances, set conditions
              for eligibility, and specify whether allowances are fixed or
              variable. You can easily target allowances to specific employee
              groups and define maximum limits for certain allowances.Drishti
              HRMS Software simplifies the process of managing employee
              allowances, helping you follow your organization's policies and
              ensure fairness in compensation.
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
              Deduction Management{" "}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Streamline Deduction
              <span className="text-blue-700">Management</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Drishti Open Source Payroll Software provides an intuitive
              interface for efficiently managing various types of deductions.
              You can create and personalize deductions, set conditions for
              eligibility, and choose between fixed or variable amounts. Easily
              target deductions to specific employee groups and set maximum
              limits as needed. Drishti HRMS Software simplifies employee
              deductions, streamlines policy adherence, and ensures fair
              compensation practices.
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
                src="/img/Payroll.jpg"
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
                src="/img/payroll.jpg"
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
              Federal Tax{" "}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Manage Federal Taxes with
              <span className="text-blue-700">Ease</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Drishti Open Source Payroll Management Software simplifies tax
              calculations with its intuitive interface. You can define tax
              brackets for different filing statuses, set tax rates based on
              income ranges, and customize descriptions. The system automates
              tax calculations, ensuring accurate withholdings for employees.
              With Drishti HRMS Software, handling taxes becomes hassle-free,
              enabling compliance and smooth payroll processing.
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
              Payslip Generation
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Generate Payslip
              <span className="text-blue-700">Easily</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Generate professional and detailed payslips effortlessly with
              Drishti HRMS Software. The Drishti Open Source Payroll software
              automatically calculates employee salaries, including allowances,
              deductions, and taxes, and generates accurate and comprehensive
              payslips for each pay period.
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
                src="/img/Payroll.jpg"
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
};

export default PayrollHeroPage;
