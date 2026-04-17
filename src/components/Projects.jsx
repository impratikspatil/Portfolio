const projects = [
  {
    title: "QuickServ – Service Aggregator Platform",
    description:
      "Built a full-stack platform for location-based service discovery with filtering, authentication, and scalable backend APIs.",
    tech: ["Spring Boot", "React", "MongoDB", "JWT", "OAuth"],
    link: "https://github.com/impratikspatil",
  },
  {
    title: "Central Server Manager (CSM)",
    description:
      "Designed and built a centralized backend system to manage server deployments, used by 600+ engineers, improving efficiency and reducing manual effort.",
    tech: ["Java", "Spring Boot", "Redis", "Jenkins", "Azure"],
    link: "#",
  },
  {
    title: "Android App (Memoneet)",
    description:
      "Developed features for an educational app with 1M+ downloads, integrating APIs and analytics to improve engagement and conversions.",
    tech: ["Kotlin", "Firebase", "MVVM"],
    link: "#",
  },
  {
  title: "Smart Text Diff Tool",
  description:
    "Built a web tool to compare and highlight differences between two texts in real-time, improving readability and analysis of changes.",
  tech: ["React", "JavaScript", "Diff Algorithm"],
  link: "https://smart-text-diff.vercel.app/",
  github: "https://github.com/impratikspatil/smart-text-diff",
}
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240] border border-gray-700 rounded-xl p-6
              hover:-translate-y-2 hover:border-[#64ffda]
              hover:shadow-[0_10px_30px_-10px_rgba(100,255,218,0.2)]
              transition duration-300 flex flex-col justify-between"
            >

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#64ffda] mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#0a192f] px-3 py-1 rounded-md border border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                className="text-sm text-[#64ffda] hover:underline mt-auto"
              >
                View Project →
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;