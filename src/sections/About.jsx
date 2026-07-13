import { motion } from "framer-motion";
import { FiCode, FiCoffee, FiGlobe, FiLayout } from "react-icons/fi";

const About = () => {
  // Stats data for the right column
  const stats = [
    {
      id: 1,
      icon: <FiCode size={24} />,
      title: "Frontend",
      subtitle: "Specialist",
    },
    {
      id: 2,
      icon: <FiLayout size={24} />,
      title: "UI/UX",
      subtitle: "Enthusiast",
    },
    {
      id: 3,
      icon: <FiGlobe size={24} />,
      title: "Web",
      subtitle: "Accessibility",
    },
    {
      id: 4,
      icon: <FiCoffee size={24} />,
      title: "Endless",
      subtitle: "Coffee",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-dark-200/50 border-t border-dark-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-accent">01.</span> About Me
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: The Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-400 text-xl leading-relaxed text-justify"
          >
            <p>
              Hello! I'm Peter Paul, a developer who enjoys creating things that
              live on the internet. My interest in web development actually
              started back at my 1st year in college, during our subject
              Computer Programming 1, where I was introduced to HTML and CSS.
            </p>
            <p>
              Fast-forward to today, and I'm a recent Computer Science graduate
              with a passion for building accessible, inclusive products and
              digital experiences. I thrive in environments where I can bridge
              the gap between engineering and design.
            </p>
            <p>
              When I'm not at my computer, I'm usually spending time with my
              family, hanging out with my cat, playing video games, or trying to
              perfect my pour-over coffee technique.
            </p>
          </motion.div>

          {/* Right Column: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="p-6 rounded-xl border border-dark-100 bg-dark-300/50 hover:bg-dark-100 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">
                  {stat.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{stat.subtitle}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
