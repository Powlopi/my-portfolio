import { motion } from "framer-motion";
import CertificateCard from "../components/CertificateCard";

const certificatesData = [
  {
    id: 1,
    title:
      "Microsoft Office Specialist: Excel Associate Certification Training Program",
    issuer: "Data Analytics Philippines",
    date: "Febuary 2025",
    image: "https://placehold.co/600x400/1e1e2e/a6accd?text=Meta+Certificate",
    link: "#",
  },
  {
    id: 2,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "April 2025",
    image: "https://placehold.co/600x400/1e1e2e/a6accd?text=Responsive+Design",
    link: "#",
  },
  {
    id: 3,
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "April 2025",
    image: "https://placehold.co/600x400/1e1e2e/a6accd?text=JS+Algorithms",
    link: "#",
  },
  {
    id: 4,
    title: "UI! UXpect the unexpected | UI/UX Workshop",
    issuer: "GDGoC | University of Immaculate Concepcion",
    date: "April 2025",
    image: "src/assets/UI_UX_CERT.png",
    link: "#",
  },
];

const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="certificates" className="py-24 relative">
      {/* SECTION-SPECIFIC BLOBS (Achievement/Premium) */}
      <div className="absolute top-20 left-1/12 w-125 h-125 bg-fuchsia-600/15 rounded-full blur-[120px] animate-blob"></div>
      <div
        className="absolute bottom-40 right-1/12 w-100 h-100 bg-yellow-500/10 rounded-full blur-[100px] animate-blob"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Main content wrapped in z-10 */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* ... The rest of your Certificates content ... */}
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-accent">05.</span> Certificates
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed text-justify">
            Continuous learning is part of my journey. Here are some of the
            professional certifications I've earned along the way.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificatesData.map((cert) => (
            <CertificateCard key={cert.id} {...cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
