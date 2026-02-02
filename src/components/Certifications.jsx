'use client';

import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/earner/earned/badge/9042ea32-ef4a-4077-8070-9d00b98ba4db",
      icon: "☁️"
    },
    {
      title: "Red Hat Certified System Administrator",
      issuer: "Red Hat",
      link: "https://www.credly.com/earner/earned/badge/84ac8f59-bceb-46dc-8eac-57dc8f78f019",
      icon: "🔴"
    },
    {
      title: "Multicloud Network Associate",
      issuer: "Aviatrix",
      link: "https://www.credly.com/earner/earned/badge/87cac9ce-f903-4cbe-8897-fa67a5c3ca13",
      icon: "🌐"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900/30 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl block"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/30 group-hover:border-blue-400/70 rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/40 text-center h-full flex flex-col justify-center">
                <div className="mb-6 text-6xl flex justify-center">
                  {cert.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  {cert.title}
                </h3>

                <p className="text-gray-400 mb-4 flex items-center justify-center gap-2">
                  <FaAward className="text-blue-400" size={16} />
                  {cert.issuer}
                </p>

                <div className="mt-6 inline-block px-6 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg group-hover:bg-blue-500/40 transition-all duration-300">
                  View Credential →
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
