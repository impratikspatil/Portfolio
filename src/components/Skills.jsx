const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mb-16 max-w-2xl">
          I specialize in building scalable backend systems, designing APIs,
          and deploying production-grade applications.
        </p>

        {/* 🔥 HERO SKILL (Backend Focus) */}
        <div className="bg-[#112240] border border-[#64ffda]/30 rounded-xl p-8 mb-12">
          
          <h3 className="text-2xl font-semibold text-[#64ffda] mb-4">
            ⚙️ Backend Engineering
          </h3>

          <p className="text-gray-400 mb-6 max-w-3xl">
            Experienced in designing scalable systems, building REST APIs,
            implementing authentication, and working with microservices architecture.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Spring Boot",
              "Spring Security",
              "Spring Data JPA",
              "Hibernate",
              "REST APIs",
              "Microservices",
              "JWT",
              "OAuth2"
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm bg-[#0a192f] border border-gray-700 rounded-md
                hover:border-[#64ffda] hover:text-[#64ffda] transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 🔥 OTHER SKILLS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Languages */}
          <div className="bg-[#112240] border border-gray-700 rounded-xl p-6">
            <h3 className="text-[#64ffda] font-semibold mb-4">💻 Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", "C++", "JavaScript", "SQL"].map((s, i) => (
                <span key={i} className="text-sm bg-[#0a192f] px-3 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="bg-[#112240] border border-gray-700 rounded-xl p-6">
            <h3 className="text-[#64ffda] font-semibold mb-4">🗄️ Databases</h3>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "MongoDB", "MySQL", "MSSQL", "Redis"].map((s, i) => (
                <span key={i} className="text-sm bg-[#0a192f] px-3 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="bg-[#112240] border border-gray-700 rounded-xl p-6">
            <h3 className="text-[#64ffda] font-semibold mb-4">☁️ DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Jenkins",
                "Docker",
                "Kubernetes",
                "Azure",
                "AWS",
                "Linux",
                "Git"
              ].map((s, i) => (
                <span key={i} className="text-sm bg-[#0a192f] px-3 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Testing */}
          <div className="bg-[#112240] border border-gray-700 rounded-xl p-6">
            <h3 className="text-[#64ffda] font-semibold mb-4">🧪 Testing</h3>
            <div className="flex flex-wrap gap-2">
              {["Pytest", "unittest", "Postman"].map((s, i) => (
                <span key={i} className="text-sm bg-[#0a192f] px-3 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Core */}
          <div className="bg-[#112240] border border-gray-700 rounded-xl p-6 col-span-2">
            <h3 className="text-[#64ffda] font-semibold mb-4">🧠 Core Concepts</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "System Design",
                "DSA",
                "Multithreading",
                "Caching",
                "API Design"
              ].map((s, i) => (
                <span key={i} className="text-sm bg-[#0a192f] px-3 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;