import { FiUsers, FiCheckCircle, FiCode, FiBriefcase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  github,
  live,
  badges,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const badgeColors = {
    "Capstone Thesis":
      "bg-purple-500/15 text-purple-300 border border-purple-500/30",

    "Group Project":
      "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30",

    "Personal Project": "bg-sky-500/15 text-sky-300 border border-sky-500/30",

    "Client Project":
      "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",

    "Academic Project":
      "bg-pink-500/15 text-pink-300 border border-pink-500/30",

    Completed: "bg-green-500/15 text-green-300 border border-green-500/30",

    "In Development":
      "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",

    Live: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",
  };
  const badgeIcons = {
    "Capstone Thesis": <FaGraduationCap size={14} />,
    "Group Project": <FiUsers size={14} />,
    "Personal Project": <FiCode size={14} />,
    "Client Project": <FiBriefcase size={14} />,
    Completed: <FiCheckCircle size={14} />,
    "In Development": <MdConstruction size={14} />,
  };
  return (
    <motion.div
      variants={cardVariants}
      className="group flex flex-col bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-sky-400/50 transition-all duration-300 shadow-lg"
    >
      {/* Screenshot Placeholder */}
      <div className="w-full h-56 overflow-hidden relative bg-slate-800">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-sky-400 transition-colors duration-300">
          {title}
        </h3>
        {badges && (
          <div className="flex flex-wrap gap-2 mb-4">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  badgeColors[badge] ||
                  "bg-slate-700 text-slate-300 border border-slate-600"
                }`}
              >
                {badgeIcons[badge]}
                {badge}
              </span>
            ))}
          </div>
        )}

        <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <li
              key={index}
              className="text-sky-400 text-xs font-mono bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-4 items-center mt-auto pt-4 border-t border-slate-700/50">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors duration-300 text-sm font-medium"
              aria-label="View Source on GitHub"
            >
              <FiGithub className="text-lg" /> Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors duration-300 text-sm font-medium"
              aria-label="View Live Demo"
            >
              <FiExternalLink className="text-lg" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
