export default function FreshmanAgentPage() {
  const features = [
    "新生信息导航",
    "培养方案解读",
    "个性化成长建议",
    "校园资源推荐",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#edf8ff] via-[#dff3ff] to-[#cfeeff] text-black px-6 py-24 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-black transition mb-10"
        >
          ← Back to Projects
        </a>

        {/* Hero */}
        <section className="mb-10">
          <div className="rounded-[56px] bg-white/70 backdrop-blur-xl border border-white/70 shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-10 md:p-16 hover:-translate-y-1 transition duration-300">

            <div className="inline-flex px-5 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-6">
              AI Product · In Progress
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              新生领航
            </h1>

            <p className="text-zinc-600 text-xl md:text-2xl leading-relaxed max-w-3xl">
              帮助新生适应大学节奏，
              找到方向，减少迷茫与信息差。
            </p>
          </div>
        </section>

        {/* Overview + Inspiration */}
        <section className="grid lg:grid-cols-2 gap-6 mb-6">

          <div className="rounded-[42px] bg-white/70 backdrop-blur-xl border border-white/70 shadow-md p-10 hover:-translate-y-1 transition">
            <h2 className="text-3xl font-bold mb-5">
              Overview
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed">
              新生领航是一个面向大学新生的 AI Agent，
              希望帮助刚进入大学的学生更快适应节奏，
              理解复杂的培养方案，并找到属于自己的成长方向。
            </p>
          </div>

          <div className="rounded-[42px] bg-white/70 backdrop-blur-xl border border-white/70 shadow-md p-10 hover:-translate-y-1 transition">
            <h2 className="text-3xl font-bold mb-5">
              Inspiration
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed">
              灵感来源于 Chatbot，
              但我希望它不只是“问答工具”，
              而是一个真正理解大学新生需求的 AI 领航者。
            </p>
          </div>

        </section>

        {/* Problem */}
        <section className="rounded-[42px] bg-white/70 backdrop-blur-xl border border-white/70 shadow-md p-10 mb-6 hover:-translate-y-1 transition">
          <h2 className="text-3xl font-bold mb-6">
            Problem
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="rounded-[28px] bg-sky-50 p-6">
              <h3 className="font-semibold text-xl mb-3">
                新生迷茫
              </h3>

              <p className="text-zinc-600">
                不知道大学应该如何开始，
                缺少方向感。
              </p>
            </div>

            <div className="rounded-[28px] bg-sky-50 p-6">
              <h3 className="font-semibold text-xl mb-3">
                信息差
              </h3>

              <p className="text-zinc-600">
                校园资源碎片化，
                很多信息没人告诉。
              </p>
            </div>

            <div className="rounded-[28px] bg-sky-50 p-6">
              <h3 className="font-semibold text-xl mb-3">
                培养方案难懂
              </h3>

              <p className="text-zinc-600">
                课程与培养路径复杂，
                难以快速理解。
              </p>
            </div>

          </div>
        </section>

        {/* Features */}
        <section className="rounded-[42px] bg-white/70 backdrop-blur-xl border border-white/70 shadow-md p-10 mb-6 hover:-translate-y-1 transition">
          <h2 className="text-3xl font-bold mb-6">
            Key Features
          </h2>

          <div className="flex flex-wrap gap-4">
            {features.map((item) => (
              <div
                key={item}
                className="px-5 py-3 rounded-full bg-sky-100 text-sky-700 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Status + Vision */}
        <section className="grid lg:grid-cols-2 gap-6">

          <div className="rounded-[42px] bg-white/70 backdrop-blur-xl border border-white/70 shadow-md p-10 hover:-translate-y-1 transition">
            <h2 className="text-3xl font-bold mb-5">
              Current Status
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed">
              项目目前处于开发中，
              已完成概念设计与方向探索，
              正在持续完善功能与体验。
            </p>
          </div>

          <div className="rounded-[42px] bg-white/70 backdrop-blur-xl border border-white/70 shadow-md p-10 hover:-translate-y-1 transition">
            <h2 className="text-3xl font-bold mb-5">
              Future Vision
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed">
              希望未来能够推广到整个学校，
              让更多新生更快融入大学生活，
              减少因为信息差带来的焦虑与迷茫。
            </p>
          </div>

        </section>

      </div>
    </main>
  );
}