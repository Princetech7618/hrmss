"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ title, description, image, date, slug }) {
  return (
    <Link href={`/blogs/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.04, y: -6 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 220, damping: 15 }}
        className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 
                   hover:shadow-2xl transition-all duration-300 cursor-pointer max-w-sm w-full"
      >
        {/* Image */}
        <div className="relative w-full h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm text-gray-500">{date}</p>

          <h2 className="text-xl font-semibold mt-2 text-gray-800">
            {title}
          </h2>

          <p className="text-gray-600 mt-2 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          <button 
      
          className=" bg-blue-600 mt-4 inline-block text-white rounded-xl p-2 font-medium hover:bg-blue-700 cursor-pointer shadow">
            Read More →
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
