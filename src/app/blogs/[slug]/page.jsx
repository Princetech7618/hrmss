"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
  FaShareAlt,
  FaBookmark,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const blogData = {
  "why-hrms-is-important-for-modern-businesses": {
    title: "Why HRMS is Important for Modern Businesses?",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "Dec 4, 2025",
    author: "HR Tech Expert",
    readTime: "5 min read",
    category: "HR Technology",
    tags: ["HRMS", "Automation", "Productivity", "Digital Transformation"],
    excerpt:
      "Discover how HRMS transforms traditional HR operations into efficient, automated processes that drive business growth.",
    content: `
<div class="blog-content space-y-6 sm:space-y-8">
  <p class="text-lg sm:text-xl text-gray-700 leading-relaxed">
    In today's fast-paced business environment, <strong class="text-blue-600">Human Resource Management Systems (HRMS)</strong> have evolved from being a luxury to an absolute necessity. These comprehensive platforms are revolutionizing how organizations manage their most valuable asset: people.
  </p>
  
  <div class="bg-white shadow-lg sm:shadow-2xl p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-blue-500">
    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
      Key Benefits of Implementing HRMS
    </h3>
    <ul class="space-y-3 sm:space-y-4">
      <li class="flex items-start gap-3">
        <div class="flex-shrink-0 mt-1">
          <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
        </div>
        <div>
          <span class="font-semibold text-gray-900">Automated Attendance & Payroll:</span>
          <p class="text-gray-600 text-sm sm:text-base">Eliminate manual errors and save countless hours with automated systems.</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <div class="flex-shrink-0 mt-1">
          <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
        </div>
        <div>
          <span class="font-semibold text-gray-900">Enhanced Team Productivity:</span>
          <p class="text-gray-600 text-sm sm:text-base">Streamlined processes free up HR teams to focus on strategic initiatives.</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <div class="flex-shrink-0 mt-1">
          <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
        </div>
        <div>
          <span class="font-semibold text-gray-900">Real-time Analytics & Reporting:</span>
          <p class="text-gray-600 text-sm sm:text-base">Make data-driven decisions with comprehensive dashboards and insights.</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <div class="flex-shrink-0 mt-1">
          <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">4</div>
        </div>
        <div>
          <span class="font-semibold text-gray-900">Seamless Employee Onboarding:</span>
          <p class="text-gray-600 text-sm sm:text-base">Create exceptional first impressions with automated onboarding workflows.</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <div class="flex-shrink-0 mt-1">
          <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">5</div>
        </div>
        <div>
          <span class="font-semibold text-gray-900">Enhanced Employee Experience:</span>
          <p class="text-gray-600 text-sm sm:text-base">Self-service portals and mobile access improve employee satisfaction.</p>
        </div>
      </li>
    </ul>
  </div>

  <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">The Strategic Advantage of Modern HRMS</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
    <div class="bg-white p-4 sm:p-6 rounded-xl shadow-md sm:shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <h4 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Why Companies Love HRMS?</h4>
      <p class="text-gray-700 text-sm sm:text-base">
        Organizations globally are adopting HRMS not just for automation, but for the strategic advantage it provides. 
        By reducing manual workload by up to 70%, HR teams can focus on talent development, culture building, and 
        strategic planning rather than administrative tasks.
      </p>
    </div>
    
    <div class="bg-white p-4 sm:p-6 rounded-xl shadow-md sm:shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <h4 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">ROI & Cost Savings</h4>
      <p class="text-gray-700 text-sm sm:text-base">
        Studies show that companies implementing comprehensive HRMS solutions see an average ROI of 300% within 
        the first two years through reduced operational costs and increased productivity.
      </p>
    </div>
  </div>

  <div class="relative bg-white shadow-lg sm:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden mt-6 sm:mt-8">
    <div class="absolute top-2 sm:top-4 right-2 sm:right-4 text-4xl sm:text-6xl text-blue-100">❝</div>
    <blockquote class="text-lg sm:text-xl md:text-2xl italic font-light leading-relaxed relative z-10 pr-4 sm:pr-8">
      "HRMS is not just software—it's a complete transformation of HR operations that bridges the gap between 
      administrative tasks and strategic human capital management."
    </blockquote>
    <p class="mt-4 sm:mt-6 text-blue-600 font-medium text-sm sm:text-base">— Global HR Innovation Report 2025</p>
  </div>

  <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">The Future of HR Technology</h3>
  
  <div class="bg-white shadow-lg sm:shadow-2xl text-black p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl">
    <h4 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Emerging Trends</h4>
    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      <div class="text-center p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 shadow-sm sm:shadow-md text-black rounded-lg sm:rounded-xl transition-colors">
        <h5 class="font-bold text-sm sm:text-base mb-1 sm:mb-2">AI & Machine Learning</h5>
        <p class="text-xs sm:text-sm text-gray-600">Predictive analytics and intelligent automation</p>
      </div>
      <div class="text-center p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 shadow-sm sm:shadow-md text-black rounded-lg sm:rounded-xl transition-colors">
        <h5 class="font-bold text-sm sm:text-base mb-1 sm:mb-2">Cloud Systems</h5>
        <p class="text-xs sm:text-sm text-gray-600">Scalable, secure, and accessible anywhere</p>
      </div>
      <div class="text-center p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 shadow-sm sm:shadow-md text-black rounded-lg sm:rounded-xl transition-colors">
        <h5 class="font-bold text-sm sm:text-base mb-1 sm:mb-2">Mobile First</h5>
        <p class="text-xs sm:text-sm text-gray-600">Employee self-service on mobile devices</p>
      </div>
      <div class="text-center p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 shadow-sm sm:shadow-md text-black rounded-lg sm:rounded-xl transition-colors">
        <h5 class="font-bold text-sm sm:text-base mb-1 sm:mb-2">Enhanced Security</h5>
        <p class="text-xs sm:text-sm text-gray-600">Blockchain and advanced data protection</p>
      </div>
    </div>
  </div>

  <p class="text-base sm:text-lg text-gray-700 leading-relaxed mt-6 sm:mt-8">
    The future belongs to businesses that embrace <strong class="text-blue-600">digital HR transformation</strong>. 
    As remote work becomes standard and the workforce becomes more digitally native, HRMS platforms will continue 
    to evolve, offering even more sophisticated tools for managing, engaging, and retaining top talent.
  </p>
</div>
    `,
  },
};

export default function BlogDetails({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const blog = blogData[slug];
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add scroll animation trigger
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
          el.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center py-12 px-6 max-w-md mx-auto">
          <div className="text-5xl mb-6">📄</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <FaArrowLeft /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold">Navigation</h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FaTimes size={20} />
            </button>
          </div>
          
          {/* Table of Contents Mobile */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-900 mb-4">📋 Table of Contents</h4>
            <ul className="space-y-3">
              {["Key Benefits", "Strategic Advantage", "ROI & Cost Savings", "Future Trends"].map((item, index) => (
                <li key={item} className="flex items-center gap-3 py-2 border-b border-gray-100">
                  <span className="text-xs text-blue-600 font-bold">0{index + 1}</span>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Articles Mobile */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">📚 Related Articles</h4>
            <div className="space-y-4">
              {[
                { title: "AI in HR: The Future is Now", readTime: "4 min" },
                { title: "Employee Engagement Strategies 2025", readTime: "6 min" },
                { title: "Cloud-Based HR Solutions Guide", readTime: "5 min" }
              ].map((article, index) => (
                <div key={index} className="pb-3 border-b border-gray-100 last:border-0">
                  <h5 className="font-medium text-gray-900 text-sm mb-1">{article.title}</h5>
                  <p className="text-xs text-gray-500">{article.readTime} read</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4 z-40">
        <div className="flex justify-between items-center">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-gray-700 font-medium"
          >
            <FaArrowLeft /> Blogs
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg ${isBookmarked ? "text-blue-600" : "text-gray-600"}`}
            >
              <FaBookmark size={18} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons for Desktop */}
      <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`p-3 rounded-full shadow-lg ${isBookmarked ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
        >
          <FaBookmark size={18} />
        </motion.button>
        
        <motion.div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowShare(!showShare)}
            className="p-3 rounded-full bg-white shadow-lg text-gray-700"
          >
            <FaShareAlt size={18} />
          </motion.button>
          
          {showShare && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-full mr-3 top-0 bg-white rounded-lg shadow-xl p-3 min-w-[160px]"
            >
              <p className="font-semibold mb-2 text-gray-900 text-sm">Share</p>
              <div className="flex gap-2">
                <button className="p-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
                  <FaFacebook size={16} />
                </button>
                <button className="p-2 bg-sky-100 text-sky-600 rounded-md hover:bg-sky-200">
                  <FaTwitter size={16} />
                </button>
                <button className="p-2 bg-blue-200 text-blue-700 rounded-md hover:bg-blue-300">
                  <FaLinkedin size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

        {/* Background Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-end pt-16 lg:pt-0">
          <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl"
            >
              {/* Category Tag */}
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
                {blog.category}
              </span>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {blog.title}
              </h1>

              <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl">
                {blog.excerpt}
              </p>

              {/* Author & Meta Info */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/90">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sm sm:text-base">HT</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{blog.author}</p>
                    <p className="text-xs sm:text-sm text-gray-300">HR Technology Specialist</p>
                  </div>
                </div>

                <div className="h-4 sm:h-6 w-px bg-white/30 hidden sm:block" />

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-300 text-sm sm:text-base" />
                    <span className="text-sm sm:text-base">{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-blue-300 text-sm sm:text-base" />
                    <span className="text-sm sm:text-base">{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Back Button for Desktop */}
      <div className="hidden lg:block container mx-auto px-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-50 transition-all duration-300 hover:shadow-lg active:scale-95 border border-gray-200 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to Articles</span>
          </Link>
        </motion.div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-2"
          >
            <div
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none scroll-animate"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {blog.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 hover:text-blue-600 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors active:scale-95"
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 sm:mt-12 bg-white shadow-md sm:shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-bold text-white">HT</span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    About the Author
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {blog.author} is a leading expert in HR technology with over
                    15 years of experience helping organizations transform their
                    HR operations. She specializes in digital transformation,
                    automation, and employee experience optimization.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    <button className="px-4 py-2 cursor-pointer bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors active:scale-95">
                      Follow
                    </button>
                    <button className="px-4 py-2 cursor-pointer border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors active:scale-95">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar for Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="hidden lg:block lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Table of Contents
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Key Benefits",
                    "Strategic Advantage",
                    "ROI & Cost Savings",
                    "Future Trends",
                  ].map((item, index) => (
                    <li key={item} className="flex items-center gap-3 py-2">
                      <span className="text-xs text-blue-600 font-bold">
                        0{index + 1}
                      </span>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "AI in HR: The Future is Now", readTime: "4 min" },
                    {
                      title: "Employee Engagement Strategies 2025",
                      readTime: "6 min",
                    },
                    {
                      title: "Cloud-Based HR Solutions Guide",
                      readTime: "5 min",
                    },
                  ].map((article, index) => (
                    <div
                      key={index}
                      className="pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <h4 className="font-medium text-gray-900 text-sm mb-1 hover:text-blue-600 cursor-pointer line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500">{article.readTime} read</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white shadow-md rounded-xl p-5 text-black">
                <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest HR tech insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-300 text-black placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <button className="w-full py-2.5 bg-blue-600 cursor-pointer text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors active:scale-95">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </article>

      {/* Next/Prev Navigation */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between">
          <Link
            href="/blogs"
            className="group flex-1 p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <div className="text-xs sm:text-sm text-gray-500 mb-2">Previous</div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaArrowLeft className="text-blue-600 text-sm sm:text-base group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-blue-600 line-clamp-2">
                HR Tech Trends to Watch
              </span>
            </div>
          </Link>

          <Link
            href="/blogs"
            className="group flex-1 p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all active:scale-[0.98] text-right"
          >
            <div className="text-xs sm:text-sm text-gray-500 mb-2">Next</div>
            <div className="flex items-center gap-2 sm:gap-3 justify-end">
              <span className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-blue-600 line-clamp-2">
                Remote Workforce Management
              </span>
              <FaArrowLeft className="text-blue-600 text-sm sm:text-base rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Bar for Actions */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 z-40">
        <div className="flex justify-between items-center gap-3">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg ${
              isBookmarked
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-700"
            } active:scale-95`}
          >
            <FaBookmark /> {isBookmarked ? "Saved" : "Save"}
          </button>
          <button
            onClick={() => setShowShare(!showShare)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg active:scale-95"
          >
            <FaShareAlt /> Share
          </button>
          <Link
            href="/blogs"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg active:scale-95"
          >
            <FaArrowLeft /> Back
          </Link>
        </div>
      </div>

      {/* Mobile Share Modal */}
      {showShare && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className="bg-white rounded-t-2xl p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Share this post</h3>
              <button
                onClick={() => setShowShare(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <FaFacebook size={24} />
                </div>
                <span className="text-sm font-medium">Facebook</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-sky-50">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center">
                  <FaTwitter size={24} />
                </div>
                <span className="text-sm font-medium">Twitter</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50">
                <div className="w-12 h-12 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center">
                  <FaLinkedin size={24} />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </button>
            </div>
            <button
              onClick={() => setShowShare(false)}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium active:scale-95"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 475px) {
          .blog-content h2,
          .blog-content h3,
          .blog-content h4 {
            scroll-margin-top: 80px;
          }
        }

        .blog-content h2,
        .blog-content h3,
        .blog-content h4 {
          scroll-margin-top: 100px;
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .scroll-animate.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .blog-content img,
          .blog-content iframe {
            width: 100% !important;
            height: auto !important;
            border-radius: 12px !important;
          }
          
          .prose {
            font-size: 1rem !important;
            line-height: 1.7 !important;
          }
          
          .prose h2 {
            font-size: 1.5rem !important;
            margin-top: 1.5rem !important;
          }
          
          .prose h3 {
            font-size: 1.25rem !important;
            margin-top: 1.25rem !important;
          }
        }

        .prose {
          font-size: 1.125rem;
          line-height: 1.8;
        }

        .prose h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.75rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .prose p {
          margin-bottom: 1.25rem;
        }

        .prose ul {
          margin-bottom: 1.25rem;
        }

        .prose blockquote {
          border-left-width: 3px;
          border-color: #3b82f6;
          padding-left: 1rem;
          font-style: italic;
          margin: 1.5rem 0;
          color: #374151;
        }

        /* Extra small devices (phones, less than 400px) */
        @media (max-width: 400px) {
          .blog-content h2 {
            font-size: 1.25rem !important;
          }
          
          .blog-content h3 {
            font-size: 1.125rem !important;
          }
          
          .prose p {
            font-size: 0.9375rem !important;
          }
        }

        /* Touch-friendly tap targets */
        @media (max-width: 768px) {
          button, 
          a {
            min-height: 44px;
            min-width: 44px;
          }
          
          input, 
          textarea {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }

        /* Prevent horizontal overflow */
        .overflow-wrap-anywhere {
          overflow-wrap: anywhere;
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}