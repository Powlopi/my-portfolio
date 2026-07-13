import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

const TimelineItem = ({
  title,
  organization,
  date,
  description,
  type,
  isLast,
  isLeft,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}
    >
      {/* Timeline Line & Dot (Desktop: Center, Mobile: Left) */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-dark-100 -translate-x-1/2"></div>

      {/* Mobile Line */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-dark-100"></div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative md:w-1/2 md:even:ml-auto md:odd:mr-auto md:even:pl-12 md:odd:pr-12 pb-12 group"
      >
        {/* Timeline Dot */}
        <div className="absolute top-1 -left-10 md:top-6 md:-left-7.25 md:group-odd:left-auto md:group-odd:-right-7.25 w-5 h-5 rounded-full bg-dark-300 border-2 border-accent z-10 flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.5)]">
          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-dark-200/50 backdrop-blur-sm border border-dark-100 rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-colors duration-300 shadow-lg relative">
          {/* Icon based on type */}
          <div className="absolute top-6 right-6 text-dark-100/50 text-4xl group-hover:text-accent/10 transition-colors duration-300">
            {type === "education" ? <FiBookOpen /> : <FiBriefcase />}
          </div>

          <span className="inline-block text-accent font-mono text-sm mb-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
            {date}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <h4 className="text-lg text-gray-300 mb-4 font-medium">
            {organization}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
