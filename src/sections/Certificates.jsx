import { motion } from "framer-motion";
import CertificateCard from "../components/CertificateCard";
import cert1 from "../assets/Peter Paul R. Quintal_page-0001.jpg";
import cert2 from "../assets/UI_UX_CERT.png";
import cert3 from "../assets/CISCO-INTRO-TO-CYBERSEC-CERT_page-0001.jpg";
import cert4 from "../assets/sql_basic certificate_page-0001.jpg";
import cert5 from "../assets/Sonder 2025_ Google Dev World Tour in Vietnam - Peter Paul R. Quintal_page-0001.jpg";
import cert6 from "../assets/Peter-Paul-Roslin-Quintal_page-0001.jpg";

const certificatesData = [
  {
    id: 1,
    title:
      "Real-Time Intelligence: Data Streaming and Stream Processing in AI Systems",
    issuer: "Mrs. Mae Ezra A. Bautista",
    date: "March 2026",
    image: cert1,
    link: "#",
  },
  {
    id: 2,
    title: "UI! UXpect the unexpected | UI/UX Workshop",
    issuer: "GDGoC | University of Immaculate Concepcion",
    date: "April 2025",
    image: cert2,
    link: "#",
  },
  {
    id: 3,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "April 2025",
    image: cert3,
    link: "#",
  },
  {
    id: 4,
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "April 2025",
    image: cert4,
    link: "#",
  },
  {
    id: 5,
    title: "Sonder 2025: Google Dev World Tour in Vietnam",
    issuer: "GDGoC",
    date: "February 2025",
    image: cert5,
    link: "#",
  },
  {
    id: 6,
    title:
      "Microsoft Office Specialist: Excel Associate Certification Training Program",
    issuer: "Data Analytics Philippines",
    date: "Febuary 2025",
    image: cert6,
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
