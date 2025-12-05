"use client";

import BlogCard from "../Components/blogscard";

const blogs = [
  {
    title: "Why HRMS is Important?",
    description: "HR automation is changing the corporate world completely...",
    image: "/img/About.avif",
    date: "Dec 4, 2025",
    slug: "why-hrms-is-important-for-modern-businesses",
  },

];

export default function BlogsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full flex flex-col">
        <img
          className="w-full h-[580px] object-cover"
          src="/img/About.avif"
          alt="HRMS Blogs"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
            Our Blogs
          </h1>
          <p className="text-2xl md:text-3xl py-6 font-semibold text-white drop-shadow-lg max-w-2xl text-center">
            Complete HRMS Knowledge Hub for Modern Businesses
          </p>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-black to-blue-600 bg-clip-text text-transparent">
            HRMS <span className="text-blue-600">Blogs</span>
          </h2>
          <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
            Latest insights and trends in Human Resource Management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.slug} {...blog} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </>
  );
}
