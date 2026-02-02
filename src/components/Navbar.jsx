function Navbar() {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md p-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-blue-400">Supraj Reddy</h1>
      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
