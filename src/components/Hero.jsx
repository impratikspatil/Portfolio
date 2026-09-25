import { useState, useEffect } from "react";

const roles = [
  "Backend Engineer",
  "Platform Engineer",
  "Distributed Systems",
  "Cloud & DevOps",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">

      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00d9ff] rounded-full blur-[140px] opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-16 items-center py-24 relative z-10">

        {/* LEFT */}
        <div>
          <p className="font-mono text-[#00d9ff] text-xs tracking-widest mb-6 animate-fade-in animate-delay-1">
            <span className="text-[#1e2d3d]">// </span>hello world
          </p>

          <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-4 animate-fade-in animate-delay-2">
            <span className="text-[#e6f0ff]">Pratik</span>
            <br />
            <span className="text-[#00d9ff] text-glow">Patil</span>
            <span className="text-[#1e2d3d]">.</span>
          </h1>

          <div className="flex items-center gap-2 mb-6 h-8 animate-fade-in animate-delay-3">
            <span className="text-[#5a7a9a] font-mono text-sm">~$</span>
            <span className="text-[#e6f0ff] font-mono text-sm md:text-base">{displayed}</span>
            <span className="cursor text-[#00d9ff] font-mono">|</span>
          </div>

          <p className="text-[#5a7a9a] text-sm leading-relaxed max-w-md mb-8 animate-fade-in animate-delay-4">
            Backend & DevOps Engineer with{" "}
            <span className="text-[#e6f0ff]">3+ years</span> of experience
            building scalable backend systems and automating cloud-native
            infrastructure. I design distributed systems and high-volume REST
            APIs with Java, Spring Boot, and Redis, then ship them with Docker,
            Kubernetes, Terraform, and Jenkins CI/CD on{" "}
            <span className="text-[#e6f0ff]">Azure</span>—with observability and
            security built in.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in animate-delay-5">
            <a href="#projects"
              className="font-mono text-xs text-[#00d9ff] border border-[#00d9ff] px-6 py-3 rounded hover:bg-[#00d9ff10] transition-all duration-200">
              view_projects()
            </a>
            <a href="#contact"
              className="font-mono text-xs text-[#5a7a9a] border border-[#1e2d3d] px-6 py-3 rounded hover:border-[#5a7a9a] hover:text-[#e6f0ff] transition-all duration-200">
              get_in_touch()
            </a>
          </div>

          <div className="flex gap-8 mt-10 pt-8 border-t border-[#1e2d3d] animate-fade-in animate-delay-5">
            {[
              { value: "2+", label: "years exp" },
              { value: "600+", label: "engineers served" },
              { value: "30%", label: "perf gains" },
              { value: "40%", label: "CI/CD faster" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-mono text-[#00d9ff] text-lg font-bold">{stat.value}</p>
                <p className="font-mono text-[#5a7a9a] text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className="flex justify-center md:justify-end animate-fade-in animate-delay-3">
          <div className="relative">
            <div className="absolute -inset-3 border border-[#00d9ff20] rounded-2xl" />
            <div className="absolute -inset-6 border border-[#00d9ff10] rounded-3xl" />
            <img src="/profile.jpeg" alt="Pratik Patil"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#00d9ff] rounded-br-2xl z-20" />
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#00d9ff] rounded-tl-2xl z-20" />
            <div className="absolute inset-0 bg-[#00d9ff] blur-3xl opacity-10 rounded-2xl" />
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[#1e2d3d] text-xs">scroll</span>
        <svg className="w-4 h-4 text-[#1e2d3d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;