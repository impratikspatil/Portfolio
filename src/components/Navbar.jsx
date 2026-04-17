const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0a192f]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        
       <a href="#" className="text-xl font-bold text-[#64ffda]">
        Pratik Patil
        </a>

        <div className="hidden md:flex gap-8 text-sm">
            <a href="#about">About</a>
             <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>

        <a
          href="/resume.pdf" target="blank"
          className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda]/10 text-sm"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;