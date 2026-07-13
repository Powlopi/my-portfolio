import { motion } from "framer-motion";
import TimelineItem from "../components/TimelineItem";

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    organization: "Tech Solutions Inc.",
    date: "Jun 2023 - Present",
    description:
      "Assisted in developing and maintaining client-facing web applications using React and Tailwind CSS. Collaborated with senior developers to optimize website performance and ensure cross-browser compatibility.",
    type: "work",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    date: "Jan 2022 - May 2023",
    description:
      "Designed and developed responsive, high-converting landing pages for local businesses. Managed client communications, project timelines, and deployed sites using modern web hosting platforms.",
    type: "work",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    organization: "Personal Projects & GitHub",
    date: "2021 - Present",
    description:
      "Continuously building full-stack applications and contributing to open-source UI libraries. Focused on writing clean, accessible, and reusable code components.",
    type: "work",
  },
  {
    id: 4,
    title: "B.S. in Computer Science",
    organization: "Catanduanes State University",
    date: "2022 - 2026",
    description:
      "Graduated with Academic Distinction. Relevant coursework included Data Structures, Algorithms, Machine Learning, and Software Engineering.",
    type: "education",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-24 relative">
      {/* SECTION-SPECIFIC BLOBS */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-emerald-500/15 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div
        className="absolute top-2/3 right-10 w-100 h-100 bg-indigo-600/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center md:justify-center gap-3">
            <span className="text-accent">04.</span> Experience & Education
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6 md:mx-auto"></div>

          <p className="text-gray-400 max-w-2xl md:mx-auto leading-relaxed">
            My professional journey and academic background. A timeline of my
            growth as a developer.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-12 md:mt-20">
          {/* ADDED: The central lines for the alternating layout */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-dark-100 -translate-x-1/2"></div>
          <div className="block md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-dark-100"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <TimelineItem
                key={item.id}
                title={item.title}
                organization={item.organization}
                date={item.date}
                description={item.description}
                type={item.type}
                isLast={index === experienceData.length - 1}
                /* ADDED: This prop tells the item which side to render on */
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
