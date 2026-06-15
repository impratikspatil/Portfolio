const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[#00d9ff] text-xs">// 01</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e6f0ff]">about_me</h2>
          <div className="flex-1 h-px bg-[#1e2d3d] max-w-xs" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* LEFT — 3 cols */}
          <div className="md:col-span-3 space-y-4 text-[#5a7a9a] text-sm leading-relaxed">
            <p>
              Hello! I'm <span className="text-[#e6f0ff] font-medium">Pratik</span>, a
              backend-focused Software Engineer with{" "}
              <span className="text-[#e6f0ff]">2+ years of experience</span> designing
              and shipping production-grade distributed systems at enterprise scale.
            </p>
            <p>
              At <span className="text-[#00d9ff]">PTC</span>, I architected the{" "}
              <span className="text-[#e6f0ff]">Central Server Manager</span> — an
              internal developer platform serving 600+ engineers — delivering 30% API
              performance gains, 40% CI/CD automation improvement, and measurable
              infrastructure cost reduction.
            </p>
            <p>
              I'm proficient in <span className="text-[#e6f0ff]">Java (Spring Boot)</span>,{" "}
              <span className="text-[#e6f0ff]">Python (Django)</span>, and{" "}
              <span className="text-[#e6f0ff]">React</span>, with deep experience in
              RBAC/LDAP security, Redis-based async processing, and cloud-native
              engineering on Azure & AWS.
            </p>

            <div className="pt-4">
              <p className="font-mono text-[#00d9ff] text-xs mb-3">// technologies I work with</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Java & Spring Boot",
                  "Python & Django",
                  "React & Redux",
                  "PostgreSQL & MongoDB",
                  "Redis & Caching",
                  "Docker & Kubernetes",
                  "Azure & AWS",
                  "Jenkins & CI/CD",
                ].map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#5a7a9a]">
                    <span className="text-[#00d9ff]">▹</span>{tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — 2 cols */}
          <div className="md:col-span-2 space-y-4">

            <div className="card rounded-xl p-5">
              <p className="font-mono text-[#00d9ff] text-xs mb-3">// quick_stats</p>
              {[
                { k: "company", v: "PTC Software" },
                { k: "role", v: "Software Engineer" },
                { k: "exp", v: "2+ years" },
                { k: "location", v: "Pune, India" },
                { k: "education", v: "B.E. CS · CGPA 9.0" },
              ].map(({ k, v }) => (
                <div key={k} className="flex items-center gap-2 py-1.5 border-b border-[#1e2d3d] last:border-0">
                  <span className="font-mono text-[#1e2d3d] text-xs w-20 shrink-0">{k}:</span>
                  <span className="font-mono text-[#e6f0ff] text-xs">{v}</span>
                </div>
              ))}
            </div>

            <div className="card rounded-xl p-5">
              <p className="font-mono text-[#00d9ff] text-xs mb-3">// achievements</p>
              <div className="space-y-2 text-xs text-[#5a7a9a]">
                <p><span className="text-[#00d9ff]">▹</span> Flipkart GRID 4.0 — Top 5% nationally</p>
                <p><span className="text-[#00d9ff]">▹</span> CodeChef <span className="text-[#e6f0ff]">1680</span></p>
                <p><span className="text-[#00d9ff]">▹</span> Codeforces <span className="text-[#e6f0ff]">1260</span></p>
                <p><span className="text-[#00d9ff]">▹</span> <span className="text-[#e6f0ff]">500+</span> DSA problems</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;