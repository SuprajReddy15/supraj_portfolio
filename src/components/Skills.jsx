'use client';

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Python", "JavaScript", "React", "Django", "Flask",
    "AWS", "SQL", "OpenCV", "NumPy", "Pandas"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900/30 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur" />

              <div className="relative px-6 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-blue-500/40 hover:border-blue-400/80 rounded-lg text-center font-semibold text-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text group-hover:from-blue-200 group-hover:to-cyan-200">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
