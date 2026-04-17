const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24">
      
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE (TEXT) */}
        <div>
          <p className="text-[#64ffda] mb-4 text-sm">
            Hi, my name is
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Pratik Patil.
          </h1>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-400 mt-2">
            I build scalable backend systems & production-ready web apps.
          </h2>

          <p className="mt-6 max-w-xl text-gray-400">
            I'm a Software Engineer at PTC, specializing in building backend systems and modern web applications using Spring Boot and React.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda]/10 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf" target="_blank"
              className="border border-gray-400 px-6 py-3 rounded hover:bg-gray-700/20 transition"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="relative">
            <img
                src="/profile.jpeg"
                className="w-72 h-72 object-cover rounded-2xl border border-gray-700 z-10 relative"
            />

            <div className="absolute inset-0 bg-[#64ffda] blur-3xl opacity-20 rounded-2xl"></div>
        </div>

      </div>

    </section>
  );
};

export default Hero;