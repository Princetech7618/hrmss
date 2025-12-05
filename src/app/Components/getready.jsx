"use client"; 

import React from "react";
import Link from "next/link";
export default function DrishtiCTA() {
  return (
    <main className=" p-10 flex items-center justify-center">
      <section className="w-full  ">
        <div className="max-w-6xl bg-[#e7ecf8] mx-auto  rounded shadow-md py-4 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Get Ready To <span className="text-blue-700">Dive In!</span>
          </h2>

          <p className="text-gray-700 mt-3 text-base md:text-lg">
            Get Early Access to DRISHTI HR Management Software
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
           <Link href="/demo"
           >
            <button className="bg-[#032B55] cursor-pointer text-white font-semibold py-3 px-8 rounded-full shadow-lg w-full md:w-auto hover:bg-blue-800 transition">
              Stay 30 days free trial
            </button>
           </Link>

           <Link href="/demo" 
           >
            <button className="bg-[#032B55] cursor-pointer  text-white font-semibold py-3 px-8 rounded-full shadow-lg w-full md:w-auto hover:bg-blue-800 transition">
              Request demo
            </button>
           
           </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
