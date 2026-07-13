import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiSend,
} from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    // This copies the text to the user's clipboard
    navigator.clipboard.writeText("pprquintal@gmail.com");

    // Briefly show a "Copied!" message
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* SECTION-SPECIFIC BLOBS */}
      <div className="absolute top-30 left-1/2 -translate-x-1/2 w-150 h-150 bg-rose-500/10 rounded-full mix-blend-screen filter blur-[150px] animate-blob"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center flex flex-col md:items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-accent">06.</span> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Connect
            </h3>
            <div className="flex flex-col gap-6">
              {/* 3. The updated Email Button */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-4 w-fit text-gray-400 hover:text-accent transition-colors duration-300 group focus:outline-none"
              >
                <div className="w-12 h-12 bg-dark-200 rounded-full flex items-center justify-center border border-dark-100 group-hover:border-accent/50 transition-colors">
                  <FiMail className="text-xl" />
                </div>
                <span className="font-medium text-lg">
                  {/* This swaps the text instantly when clicked */}
                  {copied ? "Copied to clipboard! ✓" : "pprquintal@gmail.com"}
                </span>
              </button>
              <a
                href="https://github.com/Powlopi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-fit text-gray-400 hover:text-accent transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-dark-200 rounded-full flex items-center justify-center border border-dark-100 group-hover:border-accent/50 transition-colors">
                  <FiGithub className="text-xl" />
                </div>
                <span className="font-medium text-lg">github.com/Powlopi</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-fit text-gray-400 hover:text-accent transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-dark-200 rounded-full flex items-center justify-center border border-dark-100 group-hover:border-accent/50 transition-colors">
                  <FiLinkedin className="text-xl" />
                </div>
                <span className="font-medium text-lg">
                  linkedin.com/in/yourusername
                </span>
              </a>
              <a
                href="https://www.facebook.com/powlopi15/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-fit text-gray-400 hover:text-accent transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-dark-200 rounded-full flex items-center justify-center border border-dark-100 group-hover:border-accent/50 transition-colors">
                  <FiFacebook className="text-xl" />
                </div>
                <span className="font-medium text-lg">Peter Paul Quintal</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-dark-200/50 backdrop-blur-sm p-8 rounded-2xl border border-dark-100 shadow-xl flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-300 border border-dark-100 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Please enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark-300 border border-dark-100 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-dark-300 border border-dark-100 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-accent text-dark-300 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors"
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
