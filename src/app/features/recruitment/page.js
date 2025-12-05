"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DrishtiCTA from "../../Components/getready";

export default function Recruitment() {
  return (
    <>
      <div className="min-h-screen bg-slate-100 flex flex-col py-4">
        {/* top hero */}
        <section className="flex-1 flex items-center justify-center px-4 py-22">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-6xl text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900">
              Drishti Recruitment Management{" "}
              <span className="text-blue-700">Software</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-700 max-w-3xl mx-auto">
              Enhance hiring efficiency with seamless job posting, structured
              candidate management, and a streamlined onboarding process using
              Drishti Recruitment Management Software.
            </p>

        <Link href={"/contact-us"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex  cursor-pointer items-center justify-center rounded-full bg-blue-700 px-8 py-3 text-sm sm:text-base font-medium text-white shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              TALK TO US
            </motion.button>
        
        
        </Link>
          </motion.div>
        </section>
      </div>

      {/* progress section */}
      <section className="bg-slate-100 px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* left text */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-2">
              Job Posting Management
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Job Posting Management Done
              <span className="text-blue-700">Right</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Drishti HRMS Job Posting Management feature allows Drishti HR
              professionals to create and manage job postings within the open
              source recruitment management system. They can specify important
              details for each job posting, such as the job position, required
              qualifications, and number of vacancies. This feature allows HR
              professionals to easily oversee and organize their job openings.{" "}
            </p>
          </div>

          {/* right image placeholder */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your real screenshot */}
              <img
                src="/img/Recuirement.jpg"
                alt="Progress notifications dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* Left: image */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* change src to your real screenshot path */}
              <img
                src="/img/Recuirement.jpg"
                alt="Task table showing delegate tasks"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: text content */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              Interview Management
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Manage & Keep Track of Each
              <span className="text-blue-700">Interview</span>
            </h2>

            <div className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-700">
              <p>
                The interview management feature allows Drishti HR professionals
                to schedule and manage interviews for candidates. They can
                assign interviewers or managers to conduct the interviews,
                ensuring a structured and organized interview process. This
                feature streamlines interview scheduling and facilitates
                practical candidate assessment.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100 px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* left text */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-2">
              Candidate Progress Tracking
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Keep Tabs on Potential
              <span className="text-blue-700">Candidates</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              This feature enables Drishti HR professionals to create different
              stages within the recruitment management process. These stages can
              be customized based on job positions or specific requirements.
              Drishti HR professionals can assign managers to oversee and manage
              each stage, ensuring a smooth flow of candidates through the
              hiring process. The feature also provides manual options, like
              dropdown selection or drag-and-drop functionality, to update
              candidate stages.
            </p>
          </div>

          {/* right image placeholder */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your real screenshot */}
              <img
                src="/img/Recuirement.jpg"
                alt="Progress notifications dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* Left: image */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* change src to your real screenshot path */}
              <img
                src="/img/Recuirement.jpg"
                alt="Task table showing delegate tasks"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: text content */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              Email Communication
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Keep in Touch without
              <span className="text-blue-700">Hassle</span>
            </h2>

            <div className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-700">
              <p>
                Drishti HR professionals can send acknowledgement emails to
                candidates directly from the system using the email
                communication feature. This feature provides a convenient way to
                initiate and maintain communication with candidates throughout
                the hiring process. It streamlines the candidate correspondence
                process and ensures prompt communication.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100 px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* left text */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-2">
              Candidate Remark Notes{" "}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Capture candidate insights with Remark
              <span className="text-blue-700">Notes</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              The candidate remark notes feature allows Drishti HR professionals
              to add remarks or notes about candidates. This feature serves as a
              record of important information or observations throughout the
              hiring process. Drishti HR professionals can mark specific
              requirements or observations related to interviews or the overall
              hiring process. It provides a comprehensive overview and aids in
              making informed decisions about candidates.
            </p>
          </div>

          {/* right image placeholder */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your real screenshot */}
              <img
                src="/img/Recuirement.jpg"
                alt="Progress notifications dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* Left: image */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* change src to your real screenshot path */}
              <img
                src="/img/Recuirement.jpg"
                alt="Task table showing delegate tasks"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: text content */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              Resume Viewing
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Review & Assess Resumés with
              <span className="text-blue-700">Ease</span>
            </h2>

            <div className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-700">
              <p>
                This feature enables Drishti HR professionals to access a
                candidate's detailed resume from within the open source
                recruitment management software system. Drishti HR professionals
                can easily view and review all the candidate's information,
                qualifications, and experience. This feature streamlines the
                resume review process and supports effective candidate
                evaluation.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100 px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* left text */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-2">
              Application Form{" "}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Enroll Candidates through
              <span className="text-blue-700">Links</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              The application form feature provides a URL path that candidates
              can use to register themselves for open recruitments. By filling
              out the form, candidates can automatically register for the
              initial stage of the recruitment management process. This feature
              simplifies the candidate application process and ensures seamless
              integration of applicant information.
            </p>
          </div>

          {/* right image placeholder */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your real screenshot */}
              <img
                src="/img/Recuirement.jpg"
                alt="Progress notifications dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>


      <DrishtiCTA />
    </>
  );
}
