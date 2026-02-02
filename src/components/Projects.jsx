'use client';

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Vehicle Classification System",
      desc: "AI model using OpenCV and Machine Learning to classify vehicles from images and video streams with high accuracy.",
      tech: ["Python", "OpenCV", "ML"],
      link: "https://github.com/SuprajReddy15/vehicle_classifier"
    },
    {
      title: "Student Registration System",
      desc: "Full-stack student management system built using Django with comprehensive authentication and database integration.",
      tech: ["Django", "SQLite", "HTML/CSS"],
      link: "https://github.com/SuprajReddy15/student_rs_srs"
    },
    {
      title: "Movielite",
      desc: "Movie browsing web app using TMDB API with Firebase authentication and a modern, responsive React UI.",
      tech: ["React", "Tailwind", "Firebase", "API"],
      link: "https://github.com/SuprajReddy15/MoviElite"
    },
    {
      title: "Resume Insight Analyzer",
      desc: "AI-powered resume analysis tool using local LLM (Ollama) to compare resumes with job descriptions and generate insights.",
      tech: ["Python", "Flask", "Ollama", "LLM"],
      link: "https://github.com/SuprajReddy15/ai-resume-assistant"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/30 hover:border-blue-400/70 rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/30 h-full flex flex-col">
                <div className="absolute top-4 right-4 flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg transition-all duration-300 text-blue-300 hover:text-blue-200"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg transition-all duration-300 text-cyan-300 hover:text-cyan-200"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>

                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent pr-20">
                  {project.title}
                </h3>

                <p className="mb-6 text-gray-300 flex-grow leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm rounded-full hover:bg-blue-500/40 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
