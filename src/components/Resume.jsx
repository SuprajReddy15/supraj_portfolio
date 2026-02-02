function Resume() {
  return (
    <section id="resume" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
          Resume Overview
        </h2>

        {/* EDUCATION */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Education</h3>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-lg font-semibold">
              B.Tech in Computer Science Engineering (AI)
            </p>
            <p>KL University | 2022 – 2026</p>
            <p>CGPA: 9.1</p>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              AWS Certified Cloud Practitioner
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              Red Hat Certified System Administrator
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              Salesforce Certified AI Associate
            </div>
          </div>
        </div>

        {/* SKILLS SUMMARY */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Python", "JavaScript", "React", "Django", "Flask",
              "AWS", "SQL", "OpenCV", "NumPy", "Pandas"
            ].map((s, i) => (
              <span
                key={i}
                className="bg-blue-500/20 border border-blue-500 px-4 py-2 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* RESUME PREVIEW */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Resume Preview
          </h3>

          <iframe
            src="/resume.pdf"
            title="resume"
            className="w-full h-[600px] border border-gray-700 rounded-lg"
          />
        </div>

        {/* DOWNLOAD */}
        <div className="text-center mt-6">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 px-6 py-3 rounded-lg text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
