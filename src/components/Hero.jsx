function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-extrabold mb-4">
        Hi, I'm <span className="text-blue-400">Supraj</span>
      </h1>
      <p className="text-xl mb-6">
        AI Engineer | Cloud Enthusiast | Full Stack Developer
      </p>
      <div className="space-x-4">
        <a href="#projects" className="bg-blue-500 px-6 py-3 rounded-lg">View Projects</a>
        <a href="#contact" className="border border-blue-500 px-6 py-3 rounded-lg">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
