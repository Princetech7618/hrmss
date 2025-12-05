

"use client";

import { motion } from "framer-motion";
import DrishtiCTA from "../Components/getready";

const TermsConditionsPage = () => {
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
          Term <span className="text-blue-600">&</span>  Conditions
        </h1>

        <section className="space-y-8 text-slate-800 text-sm sm:text-base leading-relaxed">
          <Block
            title="Terms"
            text="By using this website you agree to follow these Terms and Conditions and all applicable laws. If you do not accept these terms, please do not use the service."
          />
          <Block
            title="Use License"
            text="You receive a limited, non‑transferable license to access and use the site for personal or internal business purposes, subject to these terms."
          />
          <Block
            title="Use of Information"
            text="Information collected through the site is used mainly to operate the service, prevent abuse, and communicate with you where necessary."
          />
          <Block
            title="Disclaimer"
            text="The website and its content are provided on an 'as is' basis without any warranties, and use of the site is at your own risk."
          />
          <Block
            title="Limitations"
            text="To the fullest extent permitted by law, the site owner is not liable for any indirect, incidental, or consequential damages arising from use of the service."
          />
          <Block
            title="Revisions and Errata"
            text="Content may occasionally contain technical, typographical, or photographic errors and can be updated or removed without notice."
          />
          <Block
            title="Links"
            text="Links to third‑party websites are provided for convenience only and do not imply endorsement; you access them at your own discretion."
          />
          <Block
            title="Site Terms of Use Modifications"
            text="These Terms and Conditions may change from time to time, and continued use of the site after changes means you accept the updated terms."
          />
          <Block
            title="Governing Law"
            text="Any disputes relating to these terms are governed by the laws of the relevant jurisdiction specified by the site owner."
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

export default TermsConditionsPage;
