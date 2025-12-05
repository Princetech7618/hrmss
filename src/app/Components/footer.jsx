

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function FooterSection() {
  const router = useRouter();

  return (
    <footer className="w-full bg-[#d8dbe0] border-t border-blue-600 py-14 px-4 sm:px-8 lg:px-14 xl:px-20">
      {/* LOGO */}
      <div className="flex justify-center sm:justify-start mb-6">
        <img
          src="/img/logo.png"
          alt="company logo"
          className="w-20 h-20 rounded object-cover"
        />
      </div>

      {/* MAIN CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto space-y-12"
      >
        {/* BRAND & CTA */}
        <motion.div variants={itemVariants} className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black bg-clip-text">
            DRISHTI HR Management
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mt-3 leading-relaxed mx-auto sm:mx-0">
            Complete HR solution for startups & small businesses. Simplify hiring,
            payroll, attendance & more.
          </p>

          <motion.button
            onClick={() => router.push("/demo")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold flex items-center gap-2 mx-auto sm:mx-0 cursor-pointer shadow-lg"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* GRID SECTION */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* NAVIGATION */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ChevronRight className="text-blue-600" /> Navigation
            </h4>

            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-conditions" },
                { name: "Cancellation Policy", href: "/cancellation-policy" },
                                { name: "Blogs", href: "/blogs" },

              ].map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 6 }}
                  className="text-gray-700 hover:text-blue-700 text-sm flex items-center gap-2 cursor-pointer group"
                >
                  <Link href={item.href} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* FEATURES */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ChevronRight className="text-blue-600" /> Features
            </h4>

            <div className="space-y-2">
              {[
                { name: "Task", href: "/features/task" },
                { name: "Attendance", href: "/features/attendance" },
                { name: "Payroll", href: "/features/payroll" },
                { name: "Recruitment", href: "/features/recruitment" },
                { name: "Onboarding", href: "/features/onboarding" },
                { name: "Leave", href: "/features/leave" },
                { name: "Performance", href: "/features/performance" },
                { name: "Reimbursement", href: "/features/reimbursement" },
                { name: "HR Policy", href: "/features/hr-policy" },
                { name: "Assets", href: "/features/assets" },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 6 }}
                  className="text-gray-700 hover:text-blue-700 text-sm flex items-center gap-2 cursor-pointer group"
                >
                  <Link href={item.href} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ChevronRight className="text-blue-600" /> Contact Us
            </h4>

            <div className="space-y-3 text-sm">
              <motion.p
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-700 cursor-pointer"
              >
                <Mail className="text-blue-600 w-5 h-5" />{" "}
                <a href="mailto:sales@kanakdrishtiinfo.com" className="underline">
                  sales@kanakdrishtiinfo.com
                </a>
              </motion.p>

              <motion.p
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-700 cursor-pointer"
              >
                <Phone className="text-blue-600 w-5 h-5" /> +91 9310140174
              </motion.p>

              <motion.p
                whileHover={{ x: 6 }}
                className="flex items-start gap-3 text-gray-700 hover:text-blue-700 cursor-pointer"
              >
                <MapPin className="text-blue-600 w-5 h-5 mt-0.5" />
                <span>
                  A-88, Sector 4 <br /> Noida, UP 201301
                </span>
              </motion.p>
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-700 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-700 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-700 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-blue-600 hover:text-blue-700 transition" />
              </a>
            </div>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900">Stay Updated</h4>
            <p className="text-gray-800 text-sm">Get HR tips & product updates</p>

            <div className="bg-white/10 p-4 rounded-xl border border-black backdrop-blur-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-gray-700 text-gray-900 py-2 outline-none placeholder-gray-500"
              />

              <motion.button
                onClick={() => alert("Your Application has been submitted.")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full mt-3 py-2 cursor-pointer bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold"
              >
                Subscribe Now
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          variants={itemVariants}
          className="pt-6 border-t border-blue-600 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between text-gray-700 text-xs sm:text-sm"
        >
          <p>© {new Date().getFullYear()} Drishti HR. All rights reserved ❤️</p>

          <div className="flex items-center gap-2 mt-3 sm:mt-0">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live Support Available</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
