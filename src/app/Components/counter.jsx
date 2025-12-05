// src/app/Components/StatsStrip.jsx
"use client";

import CountUp from "react-countup";

const StatsStrip = ({ stats }) => {
  return (
    <section className="bg-[#e6ecfb] py-10 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 ">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="text-4xl md:text-4xl">{item.icon}</div>

              {/* Counter number */}
              <p className="text-3xl md:text-4xl font-semibold text-[#0056d6] ">
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2}
                  delay={0.2}
                />
              </p>

              <p className="text-sm md:text-base text-slate-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default StatsStrip;
