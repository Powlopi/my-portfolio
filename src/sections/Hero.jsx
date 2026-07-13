import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import profile from "/src/assets/RJS06328.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-accent font-medium tracking-wide text-xl"
          >
            Hi there, my name is
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Peter Paul R. Quintal
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-3xl font-bold text-gray-400 tracking-tight"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-lg text-gray-400 text-lg leading-relaxed pt-4 text-justify"
          >
            I'm a Computer Science Graduate and Frontend Developer specializing
            in building exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-6"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-dark-300 font-semibold rounded-md hover:bg-accent-hover transition-colors duration-300"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="/QUINTAL-RESUME.pdf"
              download="Peter_Paul_Quintal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-md hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Download Resume <FiDownload />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative hidden md:flex justify-center"
        >
          <div className="w-80 h-100 rounded-2xl border border-dark-100 bg-dark-200/50 backdrop-blur-sm shadow-2xl overflow-hidden group">
            <img
              src={profile}
              alt="Peter Paul Quintal"
              className="w-80 h-110 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
