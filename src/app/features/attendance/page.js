


"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DrishtiCTA from "../../Components/getready";
const AttendanceHeroPage = () => {
  return (
 <>
 
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
          Drishti Attendance Management{" "}
          <span className="text-blue-700">Software</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto">
          Experience seamless payroll, attendance tracking, and compliance with
          Drishti HRMS, ensuring accuracy, efficiency, and stress‑free HR
          operations in a single platform.
        </p>

        <Link href={"/contact-us"}>
    
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-blue-700 px-10 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          TALK TO US
        </motion.button>
    </Link>
      </motion.section>
    </div>



      
    <section className="bg-slate-100 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* Left: text */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
              ATTENDANCE TRACKING
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Simplify Attendance <span className="text-blue-700">Tracking</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        The time and attendance tracking software serves as a central tool for Drishti HR professionals to track and manage employee attendance efficiently. Employees can mark their attendance using the online attendance tracker check-in/out system. This allows for accurate recording of entry and exit times, helping Drishti HR professionals maintain comprehensive attendance records. The open source software system tracks various attendance aspects, including late arrivals, early departures, and overtime, providing valuable insights into employee attendance patterns.


            </p>
          </div>

          {/* Right: screenshot / card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your actual image */}
              <img
                src="/img/Attendance.jpg"
                alt="Employee attendance dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>






<section className="bg-slate-100 px-4 py-12">
  <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
    {/* left: screenshot / card */}
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
      >
        <img
          src="/img/Attendance.jpg"
          alt="Employee attendance dashboard"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>

    {/* right: text */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
      Check-In/Check-Out
      </p>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
Efficient Check-In/Check-Out with
<span className="text-blue-700"> Drishti HRMS</span>
      </h2>

      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
      The check-in/out system within the best employee attendance software allows employees to mark their entry and exit times. The system calculates the duration of their work and generates corresponding attendance records. This feature provides a streamlined and accurate method for tracking employee attendance, ensuring that records are up-to-date and reliable.


      </p>
    </motion.div>
  </div>
</section>




  
   <section className="bg-slate-100 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
      >
        {/* Left: text */}
        <div>
          <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
Attendance View
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
See All Attendances At <span className="text-blue-700">A Glance</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
The attendance view offers Drishti HR professionals an organized and intuitive interface to manage attendance effectively. It presents validated tabs for different types of attendance data. The "Validate Attendance" tab displays attendance records that require verification, such as potential errors or corrected entries. The "Validated Attendance" tab showcases attendance records that have been approved, including any overtime hours. Additionally, there is a tab that presents all validated attendance records, offering a comprehensive overview of employee attendance.

          </p>
        </div>

        {/* Right: screenshot / card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            {/* replace src with your actual image */}
            <img
              src="/img/Attendance.jpg"
              alt="Employee attendance dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>



<section className="bg-slate-100 px-4 py-12">
  <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
    {/* left: screenshot / card */}
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
      >
        <img
          src="/img/Attendance.jpg"
          alt="Employee attendance dashboard"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>

    {/* right: text */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
Hour Account
      </p>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
Simply Track Hours with Hour 
<span className="text-blue-700"> Account</span>
      </h2>

      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
The hour account feature enables Drishti HR professionals to track employees' contributions to the company in terms of hours worked. It provides a detailed view of each employee's total worked hours per month and year. This feature helps HR professionals monitor employee productivity, calculate wages accurately, and gain insights into overall workforce efficiency.



      </p>
    </motion.div>
  </div>
</section>





  <section className="bg-slate-100 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* Left: text */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
Late Come & Early Out            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
           Track Late Come and Early <span className="text-blue-700">Out</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
The employee time attendance software includes a mechanism to identify late arrivals and early departures based on employees' check-in and check-out times in relation to their scheduled shifts. If an employee checks in after the scheduled start time or leaves before the shift ends, the open source attendance management software marks it as a late come or early out. This feature helps monitor punctuality and adherence to work schedules.



            </p>
          </div>

          {/* Right: screenshot / card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your actual image */}
              <img
                src="/img/Attendance.jpg"
                alt="Employee attendance dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>





      
<section className="bg-slate-100 px-4 py-12">
  <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
    {/* left: screenshot / card */}
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
      >
        <img
          src="/img/Attendance.jpg"
          alt="Employee attendance dashboard"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>

    {/* right: text */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">

Attendance Activity      </p>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
Track Each Attendance 
<span className="text-blue-700"> Activity</span>
      </h2>

      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
The attendance activity page provides Drishti HR professionals with a comprehensive overview of all employee attendance-related actions. It serves as a centralized hub for managing attendance activities, including check-in and check-out events. This feature allows HR professionals to track and review attendance actions easily, ensuring accurate attendance records and facilitating effective monitoring of employee attendance behavior.



      </p>
    </motion.div>
  </div>
</section>



    <section className="bg-slate-100 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* Left: text */}
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-500 mb-3">
           My Attendance
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Stay in the Loop with your 
 <span className="text-blue-700">Attendances</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
The My Attendance feature caters to individual employees who do not have direct access to the attendance management software. It provides them with a personalized page where they can view their previous attendance records. If employees notice any mistakes in their validated attendance, they can request a revalidation by clicking the designated button, and initiating the verification process with their manager. This feature promotes transparency and empowers employees to participate in maintaining accurate attendance records.



            </p>
          </div>

          {/* Right: screenshot / card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace src with your actual image */}
              <img
                src="/img/Attendance.jpg"
                alt="Employee attendance dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>



      <DrishtiCTA />
 </>
  );
};

export default AttendanceHeroPage;
