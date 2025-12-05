



"use client";

import { motion } from "framer-motion";
import DrishtiCTA from "../Components/getready";
const CancellationRefundPage = () => {
  return (

    <>
    <div className="min-h-screen bg-slate-100 flex justify-center px-4 py-22">
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl bg-slate-50 shadow-md rounded-2xl px-4 py-10 sm:px-8 lg:px-16"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-slate-900 mb-10">
          Cancellation <span className="text-blue-600">&</span> Refund Policy
        </h1>

        <section className="space-y-8 text-slate-800 text-sm sm:text-base leading-relaxed">
          <p>
            This page explains how cancellations and refunds are handled for your
            orders and projects with our team.
          </p>

          <Block
            title="Refund Policy"
            text="Refunds are usually processed a few business days after a cancellation is approved and are issued using the original payment method."
          />
          <Block
            title="Eligibility for Refund"
            text="Projects or services may qualify for a refund based on the stage of work completed and any written agreements made before starting."
          />
          <Block
            title="Shipping and Handling"
            text="When products must be returned, you are generally responsible for return shipping unless the issue is due to our error or defective items."
          />
          <Block
            title="Contact"
            text="For any questions about cancellations or refunds, please contact our support team using the email or phone number listed on the website."
          />
        </section>
      </motion.main>
    </div>
<DrishtiCTA />
    </>
  );
};

const Block = ({ title, text }) => (
  <div>
    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
      {title}
    </h2>
    <p>{text}</p>
  </div>
);

export default CancellationRefundPage;
