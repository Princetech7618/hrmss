"use client";

import { motion } from "framer-motion";
import DrishtiCTA from "../Components/getready";
const PrivacyPolicyPage = () => {
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
          Privacy <span className="text-blue-600">&</span>  Policy
        </h1>

        <section className="space-y-8 text-slate-800 text-sm sm:text-base leading-relaxed">
          <ArticleBlock
            title="We are committed to protecting your privacy"
            text="We collect the minimum amount of information necessary to provide you with our services and maintain a satisfactory experience on this website."
          />
          <ArticleBlock
            title="Information Collected"
            text="Depending on how you use our website, we may collect contact details and usage information required to manage your requests and improve our services."
          />
          <ArticleBlock
            title="Use of Information"
            text="The information collected is used primarily to process your requests, secure your account, and communicate important updates about the website."
          />
          <ArticleBlock
            title="Disclosing Information"
            text="Personal information is not shared with third parties except when required by law or when you provide explicit consent for specific services."
          />
          <ArticleBlock
            title="Changes to this Policy"
            text="From time to time, this policy may be updated. Any changes will be posted on this page, and continued use of the website will indicate your acceptance."
          />
          <ArticleBlock
            title="Contacting Us"
            text={
              <>
                If you have any questions about our Privacy Policy, or if you
                want to know what information we have collected about you,
                please email us at{" "}
                <a
                  href="mailto:info@kanakdrishtiinfo.com"
                  className="text-blue-600 underline"
                >
                  info@kanakdrishtiinfo.com
                </a>
                . You can also correct any factual errors in that information or
                require us to remove your details from any list under our
                control.
              </>
            }
          />
        </section>
      </motion.main>


      
    </div>


     <DrishtiCTA />
    </>
  );
};

const ArticleBlock = ({ title, text }) => (

 
 
  <div>
    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
      {title}
    </h2>
    <p>{text}</p>
  </div>
 








);

export default PrivacyPolicyPage;
