import Link from "next/link";

const roundedBorder =
  "rounded-[40px] border-2 border-sky-200/70 md:rounded-[48px]";

function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`${roundedBorder} overflow-hidden bg-white/85 p-10 shadow-[0_8px_40px_rgba(14,165,233,0.08)] backdrop-blur-sm md:p-12 lg:p-14 ${className}`}
    >
      {children}
    </section>
  );
}

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 md:mb-7">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-200/80 bg-sky-100 text-sky-600">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-zinc-900 md:text-[1.65rem]">
        {title}
      </h2>
    </div>
  );
}

const tools = [
  { icon: "✦", name: "Cursor" },
  { icon: "◎", name: "ChatGPT" },
  { icon: "C", name: "Claude" },
  { icon: "▲", name: "Next.js" },
  { icon: "→", name: "GitHub" },
];

const learning = [
  {
    title: "Cursor",
    desc: "AI Coding workflow",
    status: "Ongoing",
    badge: "bg-sky-100 text-sky-700",
    icon: "✦",
  },
  {
    title: "GitHub",
    desc: "Version control",
    status: "Using",
    badge: "bg-sky-100 text-sky-700",
    icon: "◎",
  },
  {
    title: "Next.js",
    desc: "Building websites",
    status: "Learning",
    badge: "bg-emerald-100 text-emerald-700",
    icon: "▲",
  },
  {
    title: "Product",
    desc: "Learning by building",
    status: "Learning",
    badge: "bg-emerald-100 text-emerald-700",
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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f7fbff] via-[#f4f9ff] to-[#eef6ff] text-zinc-900">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-200/50 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-14 md:pt-20">
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 text-zinc-500 transition hover:text-sky-600 md:mb-12"
        >
          <span aria-hidden>←</span>
          Back to Projects
        </Link>

        {/* Hero */}
        <header className="mb-12 grid items-start gap-10 md:mb-16 lg:grid-cols-[1fr_240px] lg:gap-12">
          <div>
            <span className="mb-5 inline-block rounded-3xl border-2 border-sky-200/70 bg-sky-100 px-5 py-2 text-sm font-medium text-sky-700 md:px-6 md:py-2.5">
              Ongoing Project
            </span>
            <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
              AI Learning Journey
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-zinc-500 md:text-xl">
              用 AI 把想法一点点变成真实的东西——这是我的成长记录 ✨
            </p>
          </div>

          <aside className={`${roundedBorder} bg-white/85 p-8 shadow-[0_8px_36px_rgba(14,165,233,0.1)] backdrop-blur-sm md:p-9 lg:mt-6`}>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
              <p className="text-sm font-medium text-zinc-500">Currently learning</p>
            </div>
            <p className="mb-5 text-lg font-semibold text-zinc-800">
              AI Coding & Product
            </p>
            <ul className="space-y-3 border-t border-zinc-100/80 pt-4 text-sm text-zinc-500">
              <li className="flex gap-2">
                <span className="text-sky-500">→</span>
                搭建个人作品集
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">→</span>
                探索 AI 工作流
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">→</span>
                记录学习过程
              </li>
            </ul>
          </aside>
        </header>

        <div className="space-y-8 md:space-y-10">
          {/* Tools */}
          <SectionCard>
            <SectionTitle icon={<span className="text-lg">★</span>} title="Tools I'm Using" />
            <div className="flex flex-wrap gap-3.5 md:gap-4">
              {tools.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-3 rounded-3xl border-2 border-sky-200/60 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-[0_4px_16px_rgba(14,165,233,0.06)] md:px-6 md:py-3.5 md:text-base"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-sky-200/70 bg-sky-100 text-xs text-sky-600">
                    {tool.icon}
                  </span>
                  {tool.name}
                </span>
              ))}
            </div>
          </SectionCard>

          {/* About */}
          <SectionCard className="relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <SectionTitle icon={<span className="text-lg">📓</span>} title="About" />
              <p className="mb-5 text-base leading-[1.85] text-zinc-600 md:text-lg">
                说白了，这就是我的一个「学习日记」。之前我对 coding 几乎零基础，
                但 AI 工具出现之后，我开始认真想：能不能不靠背语法，而是靠「有想法 + 会提问」，
                把东西做出来？
              </p>
              <p className="text-base leading-[1.85] text-zinc-500 md:text-lg">
                不追求完美，只求每一步都真实发生。
              </p>
            </div>
            <div
              className="pointer-events-none absolute -right-6 top-8 h-36 w-36 rounded-full bg-gradient-to-br from-sky-200/70 via-violet-200/50 to-cyan-200/40 blur-2xl md:right-2"
              aria-hidden
            />
          </SectionCard>

          {/* Learning grid */}
          <SectionCard>
            <SectionTitle icon={<span className="text-lg">🚀</span>} title="What I'm Learning" />

            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
              {learning.map((item) => (
                <article
                  key={item.title}
                  className="flex w-full min-w-0 flex-col items-center rounded-[36px] border-2 border-sky-200/60 bg-zinc-50/80 px-5 py-8 text-center md:rounded-[40px] md:px-6 md:py-9"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200/70 bg-sky-100 text-lg font-semibold text-sky-600">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 w-full break-words text-base font-semibold text-zinc-800 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mb-4 w-full break-words px-1 text-xs leading-relaxed text-zinc-400 md:text-sm">
                    {item.desc}
                  </p>
                  <span
                    className={`rounded-2xl border border-sky-200/50 px-4 py-1.5 text-xs font-medium md:text-sm ${item.badge}`}
                  >
                    {item.status}
                  </span>
                </article>
              ))}
            </div>
          </SectionCard>

          {/* Journey timeline */}
          <SectionCard>
            <SectionTitle icon={<span className="text-lg">🛤</span>} title="Journey" />

            <ol>
              {journey.map((step, index) => (
                <li
                  key={step.title}
                  className="relative flex gap-5 pb-10 last:pb-0 md:gap-6"
                >
                  {index < journey.length - 1 && (
                    <span
                      className="absolute left-[9px] top-5 h-[calc(100%-8px)] w-px bg-sky-200"
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
                    className={`min-w-0 flex-1 rounded-[32px] border-2 px-6 py-6 md:rounded-[36px] md:px-8 md:py-7 ${
                      step.active
                        ? "border-sky-200/70 bg-sky-50/90"
                        : "border-sky-200/50 bg-zinc-50/70"
                    }`}
                  >
                    <p className="mb-1 text-sm font-medium text-sky-600">
                      {step.date}
                    </p>
                    <h3 className="mb-2 break-words text-lg font-semibold text-zinc-800">
                      {step.title}
                    </h3>
                    <p className="break-words text-sm leading-relaxed text-zinc-500 md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
