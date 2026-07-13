import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

// Mock data based on your requirements
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing products, orders, and customer data with real-time analytics.",
    image: "https://placehold.co/600x400/1E293B/38BDF8?text=Project+1",
    tech: ["React", "Tailwind CSS", "Recharts", "Node.js"],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    id: 2,
    title: "TaskFlow Manager",
    description:
      "A minimalist Kanban-style task management application designed for developer productivity and seamless collaboration.",
    image: "https://placehold.co/600x400/1E293B/38BDF8?text=Project+2",
    tech: ["React", "Framer Motion", "Firebase"],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    id: 3,
    title: "Crypto Tracker",
    description:
      "A real-time cryptocurrency tracking web application utilizing external APIs to display current market trends and historical charts.",
    image: "https://placehold.co/600x400/1E293B/38BDF8?text=Project+3",
    tech: ["React", "Tailwind", "REST API"],
    github: "https://github.com/",
    live: "https://example.com/",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="projects" className="min-h-screen py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-accent">03.</span> Projects
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>

          <p className="text-gray-400 max-w-2xl leading-relaxed">
            A selection of my recent work, showcasing frontend architecture,
            responsive design, and integration with modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
