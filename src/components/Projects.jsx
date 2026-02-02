function Projects() {
  const projects = [
    {
      title: "Vehicle Classification System",
      desc: "AI model using OpenCV and Machine Learning to classify vehicles from images and video streams.",
      tech: "Python • OpenCV • ML",
      link: "https://github.com/SuprajReddy15/vehicle_classifier"
    },
    {
      title: "Student Registration System",
      desc: "Full-stack student management system built using Django with authentication and database integration.",
      tech: "Django • SQLite • HTML/CSS",
      link: "https://github.com/SuprajReddy15/student_rs_srs"
    },
    {
      title: "Movielite",
      desc: "Movie browsing web app using TMDB API with Firebase authentication and modern React UI.",
      tech: "React • Tailwind • Firebase • API",
      link: "https://github.com/SuprajReddy15/MoviElite"
    },
    {
      title: "Resume Insight Analyzer",
      desc: "AI-powered resume analysis tool using a local LLM (Ollama) to compare resumes with job descriptions, extract skills, match keywords, and generate improvement insights.",
      tech: "Python • Flask • Ollama • LLM",
      link: "https://github.com/SuprajReddy15/ai-resume-assistant"
    }
  ];

  return (
    <section id="projects" className="py-24 px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              {p.title}
            </h3>
            <p className="mb-4 text-gray-300">{p.desc}</p>

            <p className="mb-4 text-sm text-gray-400 italic">
              Tech Stack: {p.tech}
            </p>

            <a
              href={p.link}
              target="_blank"
              className="text-blue-400 font-semibold hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
