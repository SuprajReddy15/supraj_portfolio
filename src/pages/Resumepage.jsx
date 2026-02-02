import { FaDownload } from "react-icons/fa";

function ResumePage() {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HEADER CARD */}
        <div className="bg-gray-900 rounded-2xl p-10 flex items-center gap-10 shadow-lg">
          <img
            src="/profile.jpg"
            alt="Supraj"
            className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold text-blue-400">Supraj Reddy</h1>
            <p className="text-gray-300 text-lg mt-2">
              AI Engineer • Cloud Enthusiast • Full Stack Developer
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Education</h2>
          <p className="text-lg font-semibold">
            B.Tech in Computer Science Engineering (AI)
          </p>
          <p>KL University | 2022 – 2026</p>
          <p>CGPA: 9.1</p>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "AWS Certified Cloud Practitioner",
              "Red Hat Certified System Administrator",
              "Salesforce Certified AI Associate",
            ].map((cert, i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-xl text-center shadow-lg"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "Python","React","Django","Flask","AWS",
              "SQL","OpenCV","NumPy","Pandas"
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-blue-500/20 border border-blue-500 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RESUME PREVIEW */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            Resume Preview
          </h2>

          <iframe
            src="/resume.pdf"
            className="w-full h-[600px] rounded-lg border border-gray-700"
          />

          <div className="text-center mt-6">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-500 px-6 py-3 rounded-lg"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResumePage;
