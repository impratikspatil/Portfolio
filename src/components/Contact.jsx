const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">

        {/* Card Wrapper */}
        <div className="bg-[#112240] border border-gray-700 rounded-2xl p-10 text-center
          shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]
          hover:shadow-[0_20px_60px_-10px_rgba(100,255,218,0.2)]
          transition duration-300">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Connect
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            I'm open to backend engineering roles, collaborations, and impactful projects.
            Let’s build something great together.
          </p>

          {/* CTA */}
          <a
            href="mailto:impratikspatil@gmail.com?subject=Opportunity%20for%20you&body=Hi%20Pratik,"
            className="inline-block bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-lg 
            font-semibold hover:scale-105 transition duration-300 mb-10"
          >
            📩 Say Hello
          </a>

          {/* Links */}
          <div className="flex justify-center gap-8 text-sm text-gray-400 mt-6">

            <a
              href="mailto:impratikspatil@gmail.com"
              className="hover:text-[#64ffda] transition"
            >
              Email
            </a>

            <a
              href="https://linkedin.com/in/pratikspatil007"
              target="_blank"
              className="hover:text-[#64ffda] transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/impratikspatil"
              target="_blank"
              className="hover:text-[#64ffda] transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;