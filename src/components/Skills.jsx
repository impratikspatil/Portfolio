const skillGroups = [
  {
    label: "Backend",
    icon: "⚙️",
    featured: true,
    description: "Designing distributed systems, building secure REST APIs, RBAC/LDAP auth, microservices architecture at enterprise scale.",
    skills: ["Spring Boot", "Spring Security", "Spring Cloud Gateway", "Hibernate/JPA", "Django REST", "Node.js", "Microservices", "REST APIs", "JWT", "OAuth 2.0", "RBAC", "LDAP"],
  },
  {
    label: "Languages",
    icon: "💻",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    label: "Frontend",
    icon: "🎨",
    skills: ["React", "Redux", "Context API", "Angular", "Ant Design", "ApexCharts", "HTML5", "CSS3"],
  },
  {
    label: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    label: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI/CD", "Prometheus", "Grafana", "Linux (RHEL)"],
  },
  {
    label: "Platforms",
    icon: "🧰",
    skills: ["Backstage (IDP)", "ServiceNow", "Figma", "Firebase", "WATI APIs"],
  },
  {
    label: "Core Concepts",
    icon: "🧠",
    skills: ["Distributed Systems", "System Design", "DSA", "OOP", "DBMS", "Event-Driven Architecture", "Async Processing"],
  },
];

const Skills = () => {
  const featured = skillGroups.find((g) => g.featured);
  const rest = skillGroups.filter((g) => !g.featured);

  return (
    <section id="skills" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[#00d9ff] text-xs">// 03</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e6f0ff]">skills</h2>
          <div className="flex-1 h-px bg-[#1e2d3d] max-w-xs" />
        </div>

        {/* Featured — Backend */}
        <div className="card rounded-xl p-6 mb-6 border-[#00d9ff20]">
          <div className="flex items-center gap-2 mb-2">
            <span>{featured.icon}</span>
            <span className="font-mono text-[#00d9ff] text-sm font-semibold">{featured.label}</span>
            <span className="font-mono text-[#1e2d3d] text-xs ml-2">// primary focus</span>
          </div>
          <p className="text-[#5a7a9a] text-xs mb-4">{featured.description}</p>
          <div className="flex flex-wrap gap-2">
            {featured.skills.map((s, i) => (
              <span key={i} className="tag hover:border-[#00d9ff40] hover:text-[#00d9ff]">{s}</span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((group, i) => (
            <div key={i} className="card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">{group.icon}</span>
                <span className="font-mono text-[#00d9ff] text-xs">{group.label}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s, j) => (
                  <span key={j} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;