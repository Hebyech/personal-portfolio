export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-gray-400 mb-4 tracking-widest uppercase">
          AI Product · Coding Learner
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Hi, I’m Heb
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-10">
          信息管理与信息系统学生，  
          正在学习 AI Coding 与产品方向，  
          希望构建属于自己的 AI 产品与知识体系。
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            View Projects
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900 transition">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}