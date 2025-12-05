"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import DrishtiCTA from "../../Components/getready";
export default function Assets() {
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
            Drishti Assets Management{" "}
            <span className="text-blue-700">Software</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto">
            Drishti Assets Management Software ensures accurate tracking,
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
              Asset Category
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Categorize Each
              <span className="text-blue-700"> Asset</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              In our Asset Management Software, assets are effectively
              categorized, making it easier to track and manage them. This
              streamlined process enables data-driven decision-making for better
              resource allocation and planning. Moreover, the asset management
              system offers a user-friendly Asset Import function for seamless
              data uploads from external sources and an Asset Export feature for
              effortless data retrieval and report generation, enhancing overall
              asset management productivity and integration with external
              systems.
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
                src="/img/Assets.png"
                alt="Payroll / contract dashboard"
                className="w-80 h-80 object-cover"
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
                src="/img/Assets2.png"
                alt="Allowance management dashboard"
                className="w-80 h-80 object-cover"
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
              Asset Management
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Manage Assets
              <span className="text-blue-700"> Effortlessly</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our Best Asset Management Software represents individual assets
              with essential attributes such as asset name, description,
              tracking ID, purchase date, purchase cost, category, status, and
              optional lot association. These details allow for efficient
              organization and categorization of assets, helping users to track,
              manage, and make data-driven decisions for effective resource
              allocation and planning.
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
              Asset Requests
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Streamline Asset Requests with
              <span className="text-blue-700"> Ease</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              This tab contains a list of asset requests that have been
              submitted by users to request new assets or to request changes to
              existing assets. The user can view and approve or reject asset
              requests based on the availability and suitability of the
              requested assets.
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
                src="/img/Assets.png"
                alt="Payroll / contract dashboard"
                className="w-80 h-80 object-cover"
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
                src="/img/Assets2.png"
                alt="Allowance management dashboard"
                className="w-80 h-80 object-cover"
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
              Asset Allocation
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Efficient Asset
              <span className="text-blue-700"> Allocation</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              This tab contains a list of allocated assets, which are assets
              that have been assigned to specific users for their use. The user
              can view and manage asset allocations, such as approving
              allocation requests, re-assigning assets, and tracking asset
              usage. user can also return the asset.
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
              Asset Batch Number
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Streamline Asset Requests with
              <span className="text-blue-700"> Ease</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The Asset Batch Number view in our Asset Tracking Software allows
              users to create, edit, and update asset information with a unique
              batch number for easy tracking and management. In summary, the
              Asset Batch Number view in our Asset Management System provides
              users with a powerful tool for tracking and managing their assets,
              with a user-friendly interface and advanced filtering
              capabilities.
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
                src="/img/Assets.png"
                alt="Payroll / contract dashboard"
                className="w-80 h-80 object-cover"
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
                src="/img/Assets2.png"
                alt="Allowance management dashboard"
                className="w-80 h-80 object-cover"
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
              Attendance Activity
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Track Each Attendance
              <span className="text-blue-700"> Activity</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The attendance activity page provides Drishti HR professionals
              with a comprehensive overview of all employee attendance-related
              actions. It serves as a centralized hub for managing attendance
              activities, including check-in and check-out events. This feature
              allows Drishti HR professionals to track and review attendance
              actions easily, ensuring accurate attendance records and
              facilitating effective monitoring of employee attendance behavior.
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
              My Attendance
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Stay in the Loop with your
              <span className="text-blue-700"> Attendances</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The My Attendance feature caters to individual employees who do
              not have direct access to the attendance management software. It
              provides them with a personalized page where they can view their
              previous attendance records. If employees notice any mistakes in
              their validated attendance, they can request a revalidation by
              clicking the designated button, and initiating the verification
              process with their manager. This feature promotes transparency and
              empowers employees to participate in maintaining accurate
              attendance records.
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
                src="/img/Assets.png"
                alt="Payroll / contract dashboard"
                className="w-80 h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <DrishtiCTA />
    </>
  );
}
