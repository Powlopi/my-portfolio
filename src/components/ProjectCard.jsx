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
      className="
group
relative
flex
flex-col
h-full
overflow-hidden
rounded-3xl
border
border-slate-700/60
bg-slate-900/60
backdrop-blur-xl
shadow-lg
transition-all
duration-500
hover:-translate-y-3
hover:border-sky-400/40
hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]
"
    >
      {/* Screenshot Placeholder */}
      <div className="relative h-60 overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={title}
          className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-700
    group-hover:scale-110
"
        />
        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-sky-400/5 opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        <h3
          className="
    text-2xl
    font-bold
    tracking-tight
    text-white
    min-h-24
    mb-3
    transition-colors
    duration-300
    group-hover:text-sky-400
    flex
    items-start
"
        >
          {title}
        </h3>

        {badges && (
          <div className="flex flex-wrap content-start gap-2 mb-5 min-h-15">
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

        <div className="my-5 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent"></div>

        <p
          className="
    text-slate-400
    text-sm
    leading-7
    min-h-30
    mb-6
    text-justify
"
        >
          {description}
        </p>

        {/* Tech Stack Tags */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <li
              key={index}
              className="
px-3
py-1
rounded-full
text-xs
font-medium
border
border-slate-700
bg-slate-800
text-slate-300
transition-all
duration-300
hover:border-sky-400/50
hover:bg-sky-500/10
hover:text-sky-300
"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
        flex-1
        flex
        items-center
        justify-center
        gap-2
        py-3
        rounded-xl
        border
        border-slate-700
        bg-slate-800
        text-slate-300
        text-sm
        font-medium
        transition-all
        duration-300
        hover:border-sky-400
        hover:bg-sky-500/10
        hover:text-sky-300
      "
            >
              <FiGithub />
              GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="
        flex-1
        flex
        items-center
        justify-center
        gap-2
        py-3
        rounded-xl
        border
        border-slate-700
        bg-slate-800
        text-slate-300
        text-sm
        font-semibold
        transition-all
        duration-300
        hover:border-sky-400
        hover:bg-sky-500/10
        hover:text-sky-300
      "
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
