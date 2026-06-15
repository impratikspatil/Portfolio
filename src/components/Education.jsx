const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[#00d9ff] text-xs">// 05</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e6f0ff]">education</h2>
          <div className="flex-1 h-px bg-[#1e2d3d] max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {/* Education Card */}
          <div className="card rounded-xl p-6">
            <p className="font-mono text-[#00d9ff] text-xs mb-4">// degree</p>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00d9ff10] border border-[#00d9ff20] flex items-center justify-center shrink-0">
                <span>🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-[#e6f0ff] font-semibold text-sm">
                  B.E. Computer Engineering
                </h3>
                <p className="font-mono text-[#00d9ff] text-xs mt-0.5">
                  D.Y. Patil College of Engineering, Pune
                </p>
                <p className="font-mono text-[#1e2d3d] text-xs mt-0.5">2020 – 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-[#080e17] border border-[#00d9ff20] rounded-lg p-4 text-center">
                <p className="font-mono text-[#00d9ff] text-2xl font-bold">9.0</p>
                <p className="font-mono text-[#5a7a9a] text-xs mt-1">CGPA / 10.0</p>
              </div>
              <div className="bg-[#080e17] border border-[#1e2d3d] rounded-lg p-4 text-center">
                <p className="font-mono text-[#e6f0ff] text-2xl font-bold">2024</p>
                <p className="font-mono text-[#5a7a9a] text-xs mt-1">Graduated</p>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="card rounded-xl p-6">
            <p className="font-mono text-[#00d9ff] text-xs mb-4">// achievements</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-4 border-b border-[#1e2d3d]">
                <span className="text-lg shrink-0">🥇</span>
                <div>
                  <p className="text-[#e6f0ff] text-sm font-medium">Flipkart GRID 4.0</p>
                  <p className="text-[#5a7a9a] text-xs mt-1 leading-relaxed">
                    Ranked <span className="text-[#00d9ff]">Top 5% nationally</span> among
                    thousands of engineering applicants across India's largest
                    engineering challenge
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg shrink-0">💻</span>
                <div>
                  <p className="text-[#e6f0ff] text-sm font-medium">Competitive Programming</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="tag">
                      CodeChef <span className="text-[#00d9ff]">1680</span>
                    </span>
                    <span className="tag">
                      Codeforces <span className="text-[#00d9ff]">1260</span>
                    </span>
                    <span className="tag">
                      <span className="text-[#00d9ff]">500+</span> DSA solved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;