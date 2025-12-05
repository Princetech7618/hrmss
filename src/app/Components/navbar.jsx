"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";

// Replace these image URLs with your actual images
const menuItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us"},
    { name: "Blogs", href: "/blogs"},

];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 z-50 font-serif">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.07 }}>
          <Link href="/">
            <img
              src="/img/logo.png"
              alt="NexSell Logo"
              className="h-12 w-auto object-contain rounded"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item, i) => (
            <motion.div key={i} className="relative cursor-pointer group">
              <Link href={item.href} className="flex flex-col items-center">
                <span className="text-gray-700 text-sm font-medium hover:text-blue-600">{item.name}</span>
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[3px] bg-blue-500/70 rounded-full transition-all duration-300"></span>
            </motion.div>
          ))}


  {/* Start Free Trial Button */}
<Link href="/demo"> 


      <button className="p-2 bg-blue-800 cursor-pointer rounded text-white">
        Start Free Trial
      </button>
      </Link>

      {/* Book a Demo Button with Link */}
      <Link href="/demo">
        <button className="p-2 bg-gray-800   cursor-pointer rounded text-white">
          Book a Demo
        </button>
      </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="md:hidden bg-white shadow-lg p-6 flex flex-col gap-5"
        >
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="relative cursor-pointer group flex items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <Link
                href={item.href}
                className="text-gray-800 text-lg font-semibold hover:text-indigo-600 transition"
              >
                {item.name}
              </Link>
            </div>
          ))}


     <Link href="/Bookademo"> 


      <button className="p-2 bg-blue-800 cursor-pointer rounded text-white">
        Start Free Trial
      </button>
      </Link>

      {/* Book a Demo Button with Link */}
      <Link href="/Bookademo">
        <button className="p-2 bg-gray-800   cursor-pointer rounded text-white">
          Book a Demo
        </button>
      </Link>
        </motion.div>
      )}
    </nav>
  );
}
