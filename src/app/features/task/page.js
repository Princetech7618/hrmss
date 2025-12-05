  "use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DrishtiCTA from "../../Components/getready";
const TaskManagementHero = () => {
  return (

    <>
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* top hero */}
      <section className="flex-1 flex items-center justify-center px-4 py-22">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-6xl text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900">
            Drishti Task Management <span className="text-blue-700">Software</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-700 max-w-3xl mx-auto">
            Enhance hiring efficiency with structured candidate management and a
            streamlined onboarding process using Drishti Task Management Software.
          </p>

        <Link href={"/contact-us"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 cursor-pointer inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-3 text-sm sm:text-base font-medium text-white shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            TALK TO US
          </motion.button>
        </Link>
        </motion.div>
      </section>

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
            <p className="text-xs tracking-[0.25em] text-slate-500 mb-2">
              PROGRESS
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Progress <span className="text-blue-700">notifications</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
        Users can utilise DrishtiHR to stay updated on the status of their tasks or requests. Users can remain informed and involved during the application process by delivering real-time updates, push notifications, email notifications, dashboard updates, tailored notifications, feedback, and confirmation. Star Icon ImageMonitor all company projects and tasks in one place. Star Icon ImageDelegate to, and notify, only the relevant staff. Star Icon ImageSetup reminders for milestones and deadlines. Star Icon ImageView and download reports on the progress of your tasks.
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
                src="/img/task1.jpg"
                alt="Progress notifications dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>



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
              src="/img/task1.jpg"
              alt="Task table showing delegate tasks"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: text content */}
        <div>
          <p className="text-xs tracking-[0.25em] text-slate-500 mb-3">
            DELEGATE TASKS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
            Delegate tasks and set{" "}
            <span className="text-blue-700">reminders</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Keep every task on schedule with clear ownership, reminders, and
            updates so deadlines are never missed.
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-700">
            <li>Assign tasks to individuals, managers, or entire teams.</li>
            <li>Give each staff member a dedicated space for their updates.</li>
            <li>Send proactive notifications before important deadlines.</li>
            <li>Share notes so everyone has the context they need.</li>
          </ul>
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
        {/* Left: text */}
        <div>
          <p className="text-xs tracking-[0.25em] text-slate-500 mb-3">
Performance Monitoring          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
         Real-Time <span className="text-blue-700">Performance</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-4">
     DrishtiHR allows you to monitor performance through dashboards and detailed reports. Track task completion, measure productivity, and gain insights to enhance efficiency across your team.
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-700">
            <li>Real-time progress dashboards</li>
            <li>Track deadlines and task completion rates</li>
            <li>Identify high and low performers</li>
            <li>Time-based efficiency analytics</li>
            <li>
                Exportable performance reports

            </li>
          </ul>
        </div>

        {/* Right: image / card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            {/* Replace src with your actual image */}
            <img
              src="/img/task1.jpg"
              alt="Task reminder dashboard"
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
              src="/img/task1.jpg"
              alt="Task table showing delegate tasks"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: text content */}
        <div>
          <p className="text-xs tracking-[0.25em] text-slate-500 mb-3">
          Track task status

          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
Trac
            <span className="text-blue-700">king</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-4">
       DrishtiHR can keep tabs on the status of tasks and give managers and workers real-time updates. This helps ensure that work is finished on schedule and any bottlenecks are quickly identified and addressed. It helps organizations streamline workflows, increase productivity, and improve task visibility.


          </p>

          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-700">
            <li>Task scheduling</li>
            <li>Prioritization</li>
            <li>Reminders and notifications</li>
            <li>Message boards for tasks and teams</li>
          </ul>
        </div>
      </motion.div>
    </section>
     <DrishtiCTA/>
    </>
  );
};

export default TaskManagementHero;
