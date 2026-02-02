function Skills() {
  const skills = [
    "Python", "JavaScript", "React", "Django", "Flask",
    "AWS", "SQL", "OpenCV", "NumPy", "Pandas"
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="border border-blue-400 px-6 py-3 rounded-lg">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
