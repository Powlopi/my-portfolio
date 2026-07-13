import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { DiMysql, DiMongodb } from "react-icons/di";
import { BiLogoTailwindCss, BiLogoFlask } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: (
            <FaHtml5
              size={24}
              className="group-hover:text-[#E34F26] transition-colors"
            />
          ),
        },
        {
          name: "CSS",
          icon: (
            <FaCss3Alt
              size={24}
              className="group-hover:text-[#1572B6] transition-colors"
            />
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <FaJs
              size={24}
              className="group-hover:text-[#F7DF1E] transition-colors"
            />
          ),
        },
        {
          name: "React",
          icon: (
            <FaReact
              size={24}
              className="group-hover:text-[#61DAFB] transition-colors"
            />
          ),
        },
        {
          name: "Tailwind CSS",
          icon: (
            <BiLogoTailwindCss
              size={24}
              className="group-hover:text-[#06B6D4] transition-colors"
            />
          ),
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: (
            <FaNodeJs
              size={24}
              className="group-hover:text-[#339933] transition-colors"
            />
          ),
        },
        {
          name: "Express",
          icon: (
            <FaJs
              size={24}
              className="group-hover:text-white transition-colors"
            />
          ),
        },
        {
          name: "Flask",
          icon: (
            <BiLogoFlask
              size={24}
              className="group-hover:text-white transition-colors"
            />
          ),
        },
        {
          name: "PHP",
          icon: (
            <FaPhp
              size={24}
              className="group-hover:text-[#777BB4] transition-colors"
            />
          ),
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MySQL",
          icon: (
            <DiMysql
              size={28}
              className="group-hover:text-[#4479A1] transition-colors"
            />
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <DiMongodb
              size={28}
              className="group-hover:text-[#47A248] transition-colors"
            />
          ),
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: (
            <FaGitAlt
              size={24}
              className="group-hover:text-[#F05032] transition-colors"
            />
          ),
        },
        {
          name: "GitHub",
          icon: (
            <FaGithub
              size={24}
              className="group-hover:text-white transition-colors"
            />
          ),
        },
        {
          name: "VS Code",
          icon: (
            <TbBrandVscode
              size={24}
              className="group-hover:text-[#007ACC] transition-colors"
            />
          ),
        },
        {
          name: "Figma",
          icon: (
            <FaFigma
              size={24}
              className="group-hover:text-[#F24E1E] transition-colors"
            />
          ),
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-dark-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-accent">02.</span> Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-200/50 border border-dark-100 rounded-2xl p-6 hover:border-dark-100/80 hover:bg-dark-200 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-dark-100 pb-4">
                {category.title}
              </h3>

              <div className="flex flex-col space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="text-xl flex items-center space-x-4 text-gray-400 group cursor-pointer"
                  >
                    <div className="p-2 bg-dark-300 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-medium group-hover:text-gray-200 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
