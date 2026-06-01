const projects = [
    {
      title: "AI Learning Journey",
      description: "我的 AI 学习路线与实践记录。",
      status: "Ongoing",
      link: "/projects/ai-learning",
    },
    {
      title: "Portfolio Website",
      description: "个人作品集网站，从 0 到上线。",
      status: "Building",
      link: "/projects/portfolio-website",
    },
    {
      title: "Personal Knowledge System",
      description: "正在构建中的 AI 知识体系。",
      status: "Coming Soon",
      link: "/projects/knowledge-system",
    },
  ];
  
  export default function ProjectsPage() {
    return (
      <main className="min-h-screen bg-[#f7fbff] px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Navbar */}
          <nav className="mb-14 flex justify-between items-center">
            <a
              href="/"
              className="text-lg font-semibold hover:text-sky-600 transition"
            >
              ← Home
            </a>
  
            <p className="text-zinc-500 text-sm">
              Selected Projects
            </p>
          </nav>
  
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-3">
              Projects
            </h1>
  
            <p className="text-zinc-500">
              Things I'm building & learning.
            </p>
          </div>
  
          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                href={project.link}
                key={index}
                className="
                group relative overflow-hidden
                bg-white/80 backdrop-blur-md
                rounded-[28px] p-8
                border border-sky-100
                transition-all duration-500 ease-out
                hover:-translate-y-1.5
                hover:scale-[1.02]
                hover:shadow-[0_20px_50px_rgba(14,165,233,0.18)]
                "
              >
                {/* Hover Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100/0 to-cyan-100/0 group-hover:from-sky-100/60 group-hover:to-cyan-100/40 transition-all duration-500" />
  
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <p className="text-sm text-sky-600">
                      {project.status}
                    </p>
  
                    <span className="text-zinc-400 group-hover:translate-x-2 group-hover:text-sky-500 transition-all duration-300">
                      →
                    </span>
                  </div>
  
                  <h2 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h2>
  
                  <p className="text-zinc-600">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    );
  }