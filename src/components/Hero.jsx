'use client';

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900/50 to-black text-white px-6 pt-20">
      <motion.div
        className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT SIDE — TEXT */}
        <motion.div variants={itemVariants}>
          <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight" variants={itemVariants}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Supraj Reddy
            </span>
          </motion.h1>

          <motion.p className="mt-8 text-2xl md:text-3xl font-semibold text-gray-200" variants={itemVariants}>
            AI Engineer • Cloud Enthusiast • Full Stack Developer
          </motion.p>

          <motion.p className="mt-8 text-lg text-gray-400 max-w-2xl leading-relaxed" variants={itemVariants}>
            AI/ML enthusiast who loves building real-world projects, exploring new technologies, and contributing to impactful solutions. Flexible across domains, quick to learn, and always ready to collaborate and create.
          </motion.p>

          <motion.div className="mt-10 flex gap-6 flex-wrap" variants={itemVariants}>
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 hover:border-blue-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — PHOTO */}
        <motion.div className="flex justify-center md:justify-end" variants={itemVariants}>
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 blur-3xl opacity-40"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
              src="profile.jpg"
              alt="Supraj"
              className="w-80 h-80 object-cover rounded-2xl border-2 border-blue-400/50 shadow-2xl shadow-blue-500/30 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
