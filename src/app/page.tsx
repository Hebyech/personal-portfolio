export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-black overflow-hidden relative">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-zinc-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Heb ✦
          </h1>

          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-black transition">
              Projects
            </a>
            <a href="#" className="hover:text-black transition">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Blue Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-sky-300 rounded-full blur-[140px] opacity-35" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-cyan-300 rounded-full blur-[140px] opacity-35" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl relative z-10">
          <p className="mb-5 text-zinc-500 text-lg">
            👋 Hey, I’m Heb
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building cool things
            <br />
            with AI & Product.
          </h1>

          <p className="text-zinc-600 text-lg md:text-xl mb-10">
            信息管理与信息系统学生 · AI Coding · Product · Learning
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/projects"
            className="bg-black text-white px-7 py-4 rounded-full hover:scale-105 transition duration-300 inline-block"
          >
            Projects
          </a>
            <button className="border border-zinc-300 px-7 py-4 rounded-full hover:bg-zinc-100 transition duration-300">
              About Me
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}