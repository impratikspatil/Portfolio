import { useState, useEffect } from "react";

const links = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#080e17]/95 backdrop-blur-md border-b border-[#1e2d3d]" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">

        <a href="#" className="font-mono text-[#00d9ff] font-bold text-lg tracking-tight">
          pp<span className="text-[#5a7a9a]">.dev</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a href={l.href} key={l.href}
              className={`nav-link font-mono text-xs tracking-widest transition-colors duration-200 ${
                active === l.href.slice(1)
                  ? "text-[#00d9ff] active"
                  : "text-[#5a7a9a] hover:text-[#e6f0ff]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="/resume.pdf" target="_blank" rel="noreferrer"
            className="hidden md:flex font-mono text-xs text-[#00d9ff] border border-[#00d9ff30] px-4 py-2 rounded hover:bg-[#00d9ff10] hover:border-[#00d9ff] transition-all duration-200"
          >
            resume.pdf
          </a>

          <button
            className="md:hidden text-[#5a7a9a] hover:text-[#00d9ff] transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1923] border-t border-[#1e2d3d] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a href={l.href} key={l.href} onClick={() => setMenuOpen(false)}
              className={`font-mono text-xs tracking-widest ${
                active === l.href.slice(1) ? "text-[#00d9ff]" : "text-[#5a7a9a]"
              }`}
            >
              <span className="text-[#00d9ff30] mr-2">//</span>{l.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer"
            className="font-mono text-xs text-[#00d9ff] border border-[#00d9ff30] px-4 py-2 rounded w-fit">
            resume.pdf
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;