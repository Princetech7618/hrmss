"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DrishtiCTA from "../Components/getready";

export default function Contact() {
  return (
    <>
      <section className="w-full min-h-screen bg-[#e0e6f8] flex flex-col items-center py-22 px-4 md:px-10 lg:px-20">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gray-800 text-center"
        >
          Contact Us
        </motion.h1>

        {/* Form + Image Container */}
        <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-10 w-full space-y-6"
          >
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="font-medium text-gray-700">Employee Count</label>
                <input
                  type="number"
                  placeholder="Number of employees"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  placeholder="Enter country"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Your message..."
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32 resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 cursor-pointer text-white px-6 py-3 rounded-full mt-4 font-semibold shadow-lg hover:bg-blue-900 transition-all duration-300"
            >
              Submit
            </motion.button>
          </motion.form>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center items-center w-full"
          >
            <Image
              src="/img/ContactUs.avif"
              width={500}
              height={500}
              alt="Contact Illustration"
              className="w-full max-w-md lg:max-w-lg rounded-xl object-contain"
            />
          </motion.div>
        </div>
      </section>

      <DrishtiCTA />
    </>
  );
}
