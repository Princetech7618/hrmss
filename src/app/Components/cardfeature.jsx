"use client";
import { useRouter } from "next/navigation";

const ClientFeatureCard = ({ icon, title, description, buttonText, link }) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl hover:border-indigo-600 hover:bg-indigo-200 shadow-sm border border-slate-200 px-6 sm:px-4 py-8 sm:py-4 max-w-md w-full mx-auto">
      
      {/* Icon + Title */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#0056d6] text-[#0056d6] text-xl">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm sm:text-base text-center text-slate-600 leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <div className="mt-7 flex justify-center ">
        <button
          onClick={() => router.push(link)}
          className="w-full cursor-pointer sm:w-auto px-10 py-2 rounded-full border border-[#0056d6] text-[#0056d6] font-medium text-sm sm:text-base hover:bg-[#0056d6] hover:text-white transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ClientFeatureCard;
