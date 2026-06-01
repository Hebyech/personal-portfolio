import Link from "next/link";

const tags = [
  { label: "Cursor", tint: "bg-sky-50 text-sky-700" },
  { label: "ChatGPT", tint: "bg-emerald-50 text-emerald-700" },
  { label: "Claude", tint: "bg-violet-50 text-violet-700" },
  { label: "Next.js", tint: "bg-amber-50 text-amber-800" },
  { label: "GitHub", tint: "bg-rose-50 text-rose-700" },
];

const skills = [
  {
    title: "Cursor",
    desc: "把 AI 写进日常开发流程",
    tint: "bg-sky-50",
    icon: "✦",
  },
  {
    title: "GitHub",
    desc: "版本管理 & 项目沉淀",
    tint: "bg-rose-50",
    icon: "◎",
  },
  {
    title: "Next.js",
    desc: "从想法到可访问的网站",
    tint: "bg-amber-50",
    icon: "▲",
  },
  {
    title: "Product",
    desc: "边做边学，用 build 理解产品",
    tint: "bg-violet-50",
    icon: "◈",
  },
];

const journey = [
  {
    date: "2026.05",
    title: "开始学习 AI Coding",
    desc: "第一次用 Cursor 写代码，摸索 AI 辅助开发的感觉。",
  },
  {
    date: "2026.05",
    title: "搭建第一个个人网站",
    desc: "用 Next.js 把作品集从 0 搭起来，真正上线了一版。",
  },
  {
    date: "Now",
    title: "持续 build 中",
    desc: "一边学一边做，把这个页面和更多项目慢慢打磨好。",
    active: true,
  },
];

export default function AILearningPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff] text-zinc-900">
      <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-sky-300 opacity-30 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-cyan-300 opacity-30 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-14 md:pt-20">
        <Link
          href="/projects"
          className="mb-14 inline-flex items-center gap-2 text-zinc-500 transition hover:text-sky-600"
        >
          <span aria-hidden>←</span>
          Back to Projects
        </Link>

        {/* Hero */}
        <header className="mb-20 grid items-start gap-10 md:mb-28 lg:grid-cols-[1fr_240px] lg:gap-12">
          <div>
            <span className="mb-6 inline-block rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-sky-600 shadow-sm">
              Ongoing Project ✦
            </span>

            <h1 className="mb-5 text-[2.75rem] font-bold leading-[1.08] tracking-tight md:text-6xl">
              AI Learning
              <br />
              <span className="text-sky-500">Journey</span>
            </h1>

            <p className="mb-8 max-w-md text-lg leading-relaxed text-zinc-600 md:text-xl">
              用 AI 把想法一点点变成真实的东西。
              <br />
              这是我的成长记录 ✨
            </p>

            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-xl px-4 py-2 text-sm font-medium md:text-base ${tag.tint}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] bg-white/80 p-6 shadow-[0_12px_40px_rgba(14,165,233,0.1)] backdrop-blur-sm lg:mt-10">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
              <p className="text-sm font-medium text-zinc-500">Currently learning</p>
            </div>

            <p className="mb-5 text-lg font-semibold leading-snug text-zinc-800">
              AI Coding
              <br />
              & Product
            </p>

            <ul className="space-y-3 border-t border-zinc-100 pt-4 text-sm text-zinc-500">
              <li className="flex items-center gap-2">
                <span className="text-sky-400">→</span>
                搭建个人作品集
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-400">→</span>
                探索 AI 工作流
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-400">→</span>
                记录学习过程
              </li>
            </ul>
          </aside>
        </header>

        {/* About */}
        <section className="mb-16 md:mb-20">
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">About</h2>

          <article className="rounded-[32px] bg-white/75 p-8 shadow-[0_8px_36px_rgba(14,165,233,0.07)] backdrop-blur-sm md:rounded-[36px] md:p-10">
            <p className="mb-6 text-xl font-medium leading-relaxed text-zinc-800 md:text-2xl">
              说白了，这就是我的一个「学习日记」📓
            </p>

            <div className="grid gap-5 md:grid-cols-2 md:gap-8">
              <p className="text-base leading-[1.85] text-zinc-600 md:text-lg">
                之前我对 coding 几乎零基础。AI 工具出现之后，我开始想：能不能不靠背语法，
                而是靠「有想法 + 会提问」，把东西做出来？
              </p>
              <p className="text-base leading-[1.85] text-zinc-600 md:text-lg">
                这个项目记录我怎么学 Cursor、管 GitHub、用 Next.js 搭网站——
                以及在 build 中慢慢理解产品。不追求完美，只求每一步都真实发生。
              </p>
            </div>
          </article>
        </section>

        {/* Learning */}
        <section className="mb-16 md:mb-20">
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">
            What I&apos;m Learning
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] bg-white/75 p-7 shadow-[0_6px_28px_rgba(14,165,233,0.06)] backdrop-blur-sm md:p-8"
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl text-base ${item.tint}`}
                >
                  {item.icon}
                </div>
                <h3 className="mb-1.5 text-xl font-semibold">{item.title}</h3>
                <p className="text-base leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Journey */}
        <section>
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">Journey</h2>

          <article className="rounded-[32px] bg-white/75 p-8 shadow-[0_8px_36px_rgba(14,165,233,0.07)] backdrop-blur-sm md:rounded-[36px] md:p-10">
            <ol>
              {journey.map((step, index) => (
                <li
                  key={step.title}
                  className="relative flex gap-5 pb-8 last:pb-0 md:gap-6"
                >
                  {index < journey.length - 1 && (
                    <span
                      className="absolute left-[9px] top-5 h-[calc(100%-12px)] w-px bg-sky-200/80"
                      aria-hidden
                    />
                  )}

                  <span
                    className={`relative z-10 mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-white ${
                      step.active
                        ? "bg-sky-500 shadow-[0_0_0_3px_rgba(14,165,233,0.15)]"
                        : "bg-sky-300"
                    }`}
                    aria-hidden
                  />

                  <div
                    className={`min-w-0 flex-1 rounded-2xl px-5 py-4 md:px-6 md:py-5 ${
                      step.active ? "bg-sky-50/80" : "bg-zinc-50/60"
                    }`}
                  >
                    <p className="mb-1 text-sm font-medium text-sky-600">
                      {step.date}
                    </p>
                    <h3 className="mb-1.5 text-lg font-semibold text-zinc-800 md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-500 md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </section>
      </div>
    </main>
  );
}
