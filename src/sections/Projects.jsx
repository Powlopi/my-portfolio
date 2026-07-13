import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import kuholImage from "../assets/kuhol.png";

// Mock data based on your requirements
const projectsData = [
  {
    id: 1,
    title: "Web-Based Golden Apple Snail (Kuhol) Detection",
    description:
      "A web application that uses YOLOv11 to detect Golden Apple Snail (Kuhol) egg clusters and visualize their locations through an interactive geospatial map.",
    image: kuholImage,
    badges: ["Capstone Thesis", "Group Project", "Completed"],
    tech: [
      "React",
      "Flask",
      "Tailwind CSS",
      "Python",
      "Yolov11",
      "OpenCV",
      "MySQL",
      "Google Maps API",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    id: 2,
    title: "Web-Based Gate Pass Application for CatSU - Security Services",
    description:
      "A web-based gate pass management system that digitizes requests, approvals, and record keeping for the CatSU Security Services Office.",
    image: "https://placehold.co/600x400/1E293B/38BDF8?text=Project+2",
    badges: ["Client Project", "Completed"],
    tech: [
      "React",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "XAMPP",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    id: 3,
    title: "IT Job App",
    description:
      "A full-stack job portal that connects IT students and professionals with internship and employment opportunities through an intuitive application platform.",
    image: "https://placehold.co/600x400/1E293B/38BDF8?text=Project+3",
    badges: ["Personal Project", "In Development"],
    tech: ["React", "Tailwind CSS", "Flask", "MySQL"],
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
    <section id="projects" className="min-h-screen py-24 relative">
      {/* 2. SECTION-SPECIFIC BLOBS */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div
        className="absolute bottom-30 -left-20 w-125 h-125 bg-sky-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* 3. Added relative z-10 to the container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
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

          <p className="text-gray-400 max-w-xl leading-relaxed">
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
              badges={project.badges}
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
