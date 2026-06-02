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

const basicInfo = [
  { icon: "◎", label: "姓名", value: "Raree (Heb)" },
  { icon: "▣", label: "专业", value: "信息管理与信息系统" },
  { icon: "✉", label: "邮箱", value: "your@email.com" },
  { icon: "⌖", label: "所在地", value: "China" },
];

const skills = [
  { icon: "⚡", name: "AI Coding" },
  { icon: "✦", name: "Prompt Engineering" },
  { icon: "◈", name: "Product Thinking" },
  { icon: "◇", name: "Figma" },
  { icon: "→", name: "Cursor" },
  { icon: "◎", name: "Learning Systems" },
];

const learning = [
  {
    title: "Cursor",
    status: "Ongoing",
    badge: "bg-sky-100 text-sky-700",
    icon: "✦",
  },
  {
    title: "Claude Code",
    status: "Learning",
    badge: "bg-emerald-100 text-emerald-700",
    icon: "C",
  },
  {
    title: "Next.js",
    status: "Learning",
    badge: "bg-emerald-100 text-emerald-700",
    icon: "▲",
  },
  {
    title: "AI Agent",
    status: "Using",
    badge: "bg-sky-100 text-sky-700",
    icon: "◎",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f7fbff] via-[#f4f9ff] to-[#eef6ff] text-zinc-900">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-200/50 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-14 md:pt-20">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-zinc-500 transition hover:text-sky-600 md:mb-12"
        >
          <span aria-hidden>←</span>
          Home
        </Link>

        <header className="mb-12 md:mb-16">
          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            About Me
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-500 md:text-xl">
            信息管理与信息系统学生，正在探索 AI、编程与产品设计。
          </p>
        </header>

        <div className="space-y-8 md:space-y-10">
          <SectionCard>
            <SectionTitle icon={<span className="text-lg">👤</span>} title="Basic Information" />

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
              {basicInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 items-start gap-4 rounded-3xl border-2 border-sky-200/60 bg-zinc-50/70 p-5 md:rounded-[32px] md:p-6"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sky-200/70 bg-sky-100 text-sm text-sky-600">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-sm text-zinc-400">{item.label}</p>
                    <p className="break-words font-medium leading-snug text-zinc-800 md:text-lg">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <SectionTitle icon={<span className="text-lg">★</span>} title="Skills & Toolkit" />

            <div className="flex flex-wrap gap-3.5 md:gap-4">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-3 rounded-3xl border-2 border-sky-200/60 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-[0_4px_16px_rgba(14,165,233,0.06)] md:px-6 md:py-3.5 md:text-base"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-sky-200/70 bg-sky-100 text-xs text-sky-600">
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <SectionTitle icon={<span className="text-lg">🚀</span>} title="Learning Journey" />

            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
              {learning.map((item) => (
                <article
                  key={item.title}
                  className="flex w-full min-w-0 flex-col items-center rounded-[36px] border-2 border-sky-200/60 bg-zinc-50/80 px-5 py-8 text-center md:rounded-[40px] md:px-6 md:py-9"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200/70 bg-sky-100 text-lg font-semibold text-sky-600">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 w-full break-words text-base font-semibold text-zinc-800 md:text-lg">
                    {item.title}
                  </h3>
                  <span
                    className={`rounded-2xl border border-sky-200/50 px-4 py-1.5 text-xs font-medium md:text-sm ${item.badge}`}
                  >
                    {item.status}
                  </span>
                </article>
              ))}
            </div>
          </SectionCard>

          <SectionCard className="relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <SectionTitle icon={<span className="text-lg">🎨</span>} title="Aesthetic Style" />
              <p className="text-base leading-[1.85] text-zinc-600 md:text-lg">
                我喜欢干净、留白多的界面。柔和蓝色、白色卡片、轻阴影——
                让内容本身成为主角，而不是炫技。
              </p>
            </div>
            <div
              className="pointer-events-none absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-gradient-to-br from-sky-200/80 via-violet-200/60 to-cyan-200/50 blur-2xl md:right-4 md:h-48 md:w-48"
              aria-hidden
            />
          </SectionCard>

          <SectionCard className="relative overflow-hidden">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <SectionTitle icon={<span className="text-lg">💡</span>} title="Future Vision" />
                <p className="text-base leading-[1.85] text-zinc-600 md:text-lg">
                  继续深入 AI Coding 与产品设计，搭建个人知识体系，
                  把学到的变成能分享、能复用的真实项目。
                </p>
              </div>

              <div
                className="mx-auto flex h-28 w-28 flex-col items-center justify-end md:mx-0 md:h-32 md:w-32"
                aria-hidden
              >
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-sky-300 to-cyan-400 shadow-[0_12px_32px_rgba(56,189,248,0.35)]" />
                <div className="mt-3 h-3 w-20 rounded-full bg-gradient-to-r from-zinc-200 to-zinc-100 shadow-sm" />
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
