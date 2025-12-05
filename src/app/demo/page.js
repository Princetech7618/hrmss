


"use client";

import { motion } from "framer-motion";

const DemoBookingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-25 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-6 sm:p-8"
      >
        {/* header */}
        <div className="flex items-center justify-center mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 mr-2">
            📞
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Book a Free Demo
          </h1>
        </div>

        {/* form */}
        <form className="space-y-4 ">
          <FormField label="Full Name*" type="text" />
          <FormField label="Company Name*" type="text" />
          <FormField label="Email*" type="email" />
          <FormField label="Phone Number*" type="tel" />
          <FormField label="Preferred Demo Date*" type="date"  />
          <FormField label="Preferred Time*" type="time" helper="Please select between 10:00 AM to 7:00 PM" />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-2  cursor-pointer rounded-lg bg-blue-700 py-3 text-white font-medium shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            📅 Book Demo
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

const FormField = ({ label, type, helper }) => (
  <div className="w-full">
    <label className="block mb-1 text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
      placeholder={type === "date" ? "dd-mm-yyyy" : type === "time" ? "--:--" : ""}
    />
    {helper && (
      <p className="mt-1 text-xs text-gray-500">
        {helper}
      </p>
    )}
  </div>
);

export default DemoBookingPage;
