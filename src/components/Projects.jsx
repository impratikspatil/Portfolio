const projects = [
  {
    title: "Central Server Manager",
    subtitle: "Internal Developer Platform @ PTC",
    description:
      "IDP adopted by 600+ engineers company-wide. Architected distributed backend services, RESTful APIs, RBAC with LDAP, Redis async job queuing, and full-stack React dashboards with real-time platform visibility.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Jenkins", "Azure", "React"],
    link: null,
    github: null,
    badge: "Production · 600+ users",
  },
  {
    title: "LinkZen",
    subtitle: "High-Performance URL Shortener",
    description:
      "URL shortener with sub-10ms redirect latency via Redis caching, click analytics (browser, device, country), QR code generation, custom aliases, JWT auth, and Docker containerization.",
    tech: ["Spring Boot", "React", "MongoDB", "Redis", "Docker", "JWT"],
    link: "https://link-zen.vercel.app",
    github: "https://github.com/impratikspatil/LinkZen",
    badge: "Live · Vercel",
  },
  {
    title: "QuickServ",
    subtitle: "Service Aggregator Platform",
    description:
      "Full-stack service aggregator with location-based discovery, geospatial queries, JWT + OAuth 2.0 auth, cursor-based pagination, and zero-downtime deployment on Render & Vercel.",
    tech: ["Spring Boot", "React", "MongoDB", "JWT", "OAuth 2.0"],
    link: "https://quickserv.vercel.app/",
    github: "https://github.com/impratikspatil",
    badge: "Live · Vercel",
  },
  {
    title: "Smart Text Diff",
    subtitle: "Real-time Text Comparison Tool",
    description:
      "Web tool to compare and highlight differences between two texts in real-time, improving readability and analysis of changes with an intuitive side-by-side diff view.",
    tech: ["React", "JavaScript", "Diff Algorithm"],
    link: "https://smart-text-diff.vercel.app/",
    github: "https://github.com/impratikspatil/smart-text-diff",
    badge: "Live · Vercel",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[#00d9ff] text-xs">// 04</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e6f0ff]">projects</h2>
          <div className="flex-1 h-px bg-[#1e2d3d] max-w-xs" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div key={index} className="card rounded-xl p-6 flex flex-col group">

              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-[#e6f0ff] font-semibold group-hover:text-[#00d9ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[#5a7a9a] text-xs mt-0.5">{project.subtitle}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="text-[#1e2d3d] hover:text-[#00d9ff] transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer"
                      className="text-[#1e2d3d] hover:text-[#00d9ff] transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Badge */}
              <span className="font-mono text-[#00d9ff] text-xs bg-[#00d9ff10] border border-[#00d9ff20] px-2 py-0.5 rounded w-fit mb-3">
                {project.badge}
              </span>

              {/* Description */}
              <p className="text-[#5a7a9a] text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1e2d3d]">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;