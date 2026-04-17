const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Me
            </h2>

            <div className="text-gray-400 space-y-5">
              <p>
                Hello! I'm <span className="text-white font-medium">Pratik</span>, a Software Engineer currently working at 
                <span className="text-[#64ffda]"> PTC</span>.
              </p>

              <p>
                I specialize in building <span className="text-white">scalable backend systems</span> and 
                modern web applications using Spring Boot and React. I’ve worked on 
                optimizing internal tools, improving workflows, and contributing to 
                production-grade systems used by engineers.
              </p>

              <p>
                I enjoy solving real-world problems and building systems that create 
                measurable impact — especially platforms that improve efficiency 
                and user experience.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (🔥 HIGHLIGHT CARD) */}
          <div className="bg-[#112240] border border-gray-700 rounded-xl p-6 
                          hover:border-[#64ffda] transition duration-300">

            <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
              🚀 Quick Highlights
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>▹ Software Engineer at PTC</li>
              <li>▹ Built scalable backend systems</li>
              <li>▹ Worked on tools used by 600+ engineers</li>
              <li>▹ Strong in Spring Boot & Microservices</li>
              <li>▹ Experience with CI/CD & DevOps</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;