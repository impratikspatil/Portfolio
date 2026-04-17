const experiences = [
  {
    role: "Software Engineer",
    company: "PTC",
    duration: "Jul 2024 – Present",
    points: [
      "Built Central Server Manager (CSM) platform used by 600+ engineers, replacing fragmented workflows",
      "Optimized backend APIs & DB queries, improving performance by 30%",
      "Implemented global exception handling, validation & logging, reducing debugging time by 30%",
      "Designed transactional services & handled 10k+ records with pagination & sorting",
      "Automated CI/CD pipelines using Jenkins & GitLab, reducing deployment effort by 40%",
      "Reduced server setup time from 5 hours → 30 mins using Azure VM automation",
      "Implemented Redis-based async processing for scalable job execution"
    ],
    tech: ["Java", "Spring Boot", "Redis", "Jenkins", "Azure"]
  },
  {
    role: "Software Engineer Intern",
    company: "PTC",
    duration: "Jul 2023 – Jun 2024",
    points: [
      "Designed system architecture & API workflows for CSM platform",
      "Automated Azure resource cleanup using Python, reducing infra cost by 10%"
    ],
    tech: ["Python", "Azure", "Backend Systems"]
  },
  {
    role: "Android Developer Intern",
    company: "Memoneet",
    duration: "Dec 2022 – Jun 2023",
    points: [
      "Developed features for app with 1M+ downloads using Kotlin & MVVM",
      "Integrated WhatsApp API & Firebase Analytics improving conversions by 20%",
      "Improved campaign effectiveness by 40% using analytics insights"
    ],
    tech: ["Kotlin", "Firebase", "MVVM"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Experience
        </h2>

        <div className="relative border-l border-gray-700 pl-8 space-y-16">

          {experiences.map((exp, index) => (
            <div key={index} className="relative">

              {/* Timeline dot */}
              <div className="absolute -left-[10px] top-2 w-4 h-4 bg-[#64ffda] rounded-full"></div>

              {/* Card */}
              <div className="bg-[#112240] border border-gray-700 rounded-xl p-6
                hover:border-[#64ffda] transition duration-300">

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#64ffda]">
                  {exp.role} — {exp.company}
                </h3>

                {/* Duration */}
                <p className="text-sm text-gray-400 mb-4">
                  {exp.duration}
                </p>

                {/* Points */}
                <ul className="text-gray-400 space-y-2 mb-4">
                  {exp.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#0a192f] px-3 py-1 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;