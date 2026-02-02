'use client';

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="about" className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6">
            <motion.p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about leveraging AI and machine learning to solve real-world problems. With a strong foundation in both theory and practical implementation, I bridge the gap between cutting-edge AI research and production systems.
            </motion.p>

            <motion.p className="text-lg text-gray-300 leading-relaxed">
              My journey spans across Python development, cloud infrastructure with AWS, and building full-stack applications with React. I'm constantly learning new technologies and sharing knowledge with the community.
            </motion.p>

            <motion.p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in AI/ML research, contributing to open-source projects, or mentoring aspiring developers.
            </motion.p>
          </motion.div>

          <motion.div className="space-y-6">
            <motion.div
              className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl backdrop-blur-sm hover:border-blue-500/60 transition-all duration-300"
              whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.6)" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Experience</h3>
              <p className="text-gray-400">Building AI/ML solutions and full-stack applications with focus on real-world impact</p>
            </motion.div>

            <motion.div
              className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300"
              whileHover={{ scale: 1.02, borderColor: "rgba(34, 211, 238, 0.6)" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Education</h3>
              <p className="text-gray-400">B.Tech in Computer Science Engineering (AI) from KL University</p>
            </motion.div>

            <motion.div
              className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl backdrop-blur-sm hover:border-blue-500/60 transition-all duration-300"
              whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.6)" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Passion</h3>
              <p className="text-gray-400">Creating innovative solutions that make a tangible difference in people's lives</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
