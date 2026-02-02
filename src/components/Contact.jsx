'use client';

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-center text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind? Let's talk! Feel free to reach out through any of these channels.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Email */}
          <motion.a
            href="mailto:2200030590cseh@gmail.com"
            className="group relative overflow-hidden rounded-xl block"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/30 group-hover:border-blue-400/70 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/40 transition-colors">
                  <FaEnvelope className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-blue-300">Email</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    2200030590cseh@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/thamadapally-supraj-reddy-b5356b370/"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl block"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-cyan-500/30 group-hover:border-cyan-400/70 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors">
                  <FaLinkedin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-cyan-300">LinkedIn</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    Connect with me
                  </p>
                </div>
              </div>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/SuprajReddy15"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl block"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/30 group-hover:border-blue-400/70 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/40 transition-colors">
                  <FaGithub className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-blue-300">GitHub</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    @SuprajReddy15
                  </p>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Resume */}
          <motion.a
            href="/resume"
            className="group relative overflow-hidden rounded-xl block"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-cyan-500/30 group-hover:border-cyan-400/70 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors">
                  <FaPhone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-cyan-300">Resume</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    View my full resume
                  </p>
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>

        <motion.div
          className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/20 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://github.com/SuprajReddy15" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-125 transform">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/thamadapally-supraj-reddy-b5356b370/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-125 transform">
              <FaLinkedin />
            </a>
            <a href="mailto:2200030590cseh@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-125 transform">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
