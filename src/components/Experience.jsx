const experiences = [
  {
    role: "Software Engineer",
    company: "PTC Software (India) Pvt. Ltd.",
    duration: "Jul 2024 – Present",
    points: [
      "Architected Central Server Manager (CSM) — IDP adopted by 600+ engineers, using Java Spring Boot, PostgreSQL, and distributed backend services",
      "Engineered REST APIs with pagination & dynamic filtering, processing 10,000+ records with sub-second response times",
      "Reduced API latency & DB load by 30% via Redis multi-layer caching, query indexing, and connection pool tuning",
      "Designed RBAC integrated with enterprise LDAP/Active Directory, securing all platform APIs for 600+ internal users",
      "Built async job execution workflows using Redis queuing & Spring async patterns, reducing manual effort by 20%",
      "Engineered CI/CD pipelines with Jenkins & GitLab CI/CD, cutting release effort by 40%",
      "Automated Azure infrastructure provisioning & cleanup using Azure CLI and Python",
      "Built full-stack React dashboards with Redux, ApexCharts & lazy loading for real-time platform visibility",
      "Integrated Backstage (IDP), ServiceNow & Azure Marketplace to standardize internal developer experience",
      "Improved observability via global exception handling, input validation & structured logging, cutting MTTR by 30%",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Jenkins", "Azure", "React", "Docker"],
  },
  {
    role: "Software Engineer Intern",
    company: "PTC Software (India) Pvt. Ltd.",
    duration: "Jul 2023 – Jun 2024",
    points: [
      "Designed end-to-end system architecture, API contracts & UI/UX wireframes (Figma) for the CSM platform",
      "Enhanced internal tools (Django REST Framework, React, PostgreSQL) — improving query performance & UI responsiveness",
      "Automated server health monitoring & Azure resource lifecycle management using Python, reducing infra costs by ~10%",
      "Gained production-grade experience with Linux (RHEL), Azure (VMs, Blob Storage, CLI)",
    ],
    tech: ["Python", "Django", "React", "PostgreSQL", "Azure", "Linux"],
  },
  {
    role: "Android Developer Intern",
    company: "Memoneet Pvt. Ltd.",
    duration: "Dec 2022 – Jun 2023",
    points: [
      "Shipped features for an Android app with 1M+ downloads, integrating REST APIs & optimizing client-side data handling",
      "Integrated WATI APIs to automate FAQ responses & push notifications for 20,000+ active users",
      "Delivered a key in-app feature contributing to a 30% increase in subscription conversions",
      "Instrumented Firebase Analytics to track user behavior funnels and surface data-driven product insights",
    ],
    tech: ["Kotlin", "Firebase", "MVVM", "Android", "REST APIs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[#00d9ff] text-xs">// 02</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e6f0ff]">experience</h2>
          <div className="flex-1 h-px bg-[#1e2d3d] max-w-xs" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="card rounded-xl p-6 md:p-8 group">

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-base font-semibold text-[#e6f0ff] group-hover:text-[#00d9ff] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-[#00d9ff] text-xs mt-0.5">{exp.company}</p>
                </div>
                <span className="font-mono text-[#5a7a9a] text-xs shrink-0 bg-[#080e17] border border-[#1e2d3d] px-3 py-1 rounded w-fit">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2 mb-5">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5a7a9a] text-sm">
                    <span className="text-[#00d9ff] mt-0.5 shrink-0 font-mono">▹</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1e2d3d]">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;