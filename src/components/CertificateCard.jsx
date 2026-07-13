import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

const CertificateCard = ({ title, issuer, date, image, link }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group flex flex-col bg-dark-200/50 backdrop-blur-sm border border-dark-100 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-accent/50 transition-all duration-300 shadow-lg relative"
    >
      <div className="w-full h-48 overflow-hidden relative bg-dark-300">
        <img
          src={image}
          alt={title}
          className="w-fit h-fit object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-dark-300/30 group-hover:bg-transparent transition-colors duration-300"></div>

        {/* Decorative Icon badge */}
        <div className="absolute top-4 right-4 bg-dark-300/80 backdrop-blur-md p-2 rounded-full text-accent border border-dark-100 shadow-md">
          <FiAward className="text-xl" />
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 font-medium mb-4">{issuer}</p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-dark-100/50">
          <span className="text-gray-400 text-sm font-mono">{date}</span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center gap-1 text-sm font-medium"
            >
              Verify <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
