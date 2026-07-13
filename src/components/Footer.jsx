import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark-300 border-t border-dark-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-dark-200 border border-dark-100 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-dark-300 hover:border-transparent transition-all duration-300 mb-8 -mt-20 z-10 shadow-lg"
          aria-label="Back to Top"
        >
          <FiArrowUp className="text-xl" />
        </button>

        {/* Social Icons for Mobile (Optional extra access) */}
        <div className="flex gap-6 mb-6 md:hidden">
          <a
            href="#"
            className="text-gray-400 hover:text-accent transition-colors text-xl"
          >
            <FiGithub />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-accent transition-colors text-xl"
          >
            <FiLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-accent transition-colors text-xl"
          >
            <FiFacebook />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-accent transition-colors text-xl"
          >
            <FiMail />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-lg text-center">
          Designed & Built by{" "}
          <span className="text-accent font-medium">Peter Paul Quintal</span>
        </p>
        <p className="text-gray-600 text-sm mt-2 font-mono">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
