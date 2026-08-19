import {
  LockKeyhole,
  ShieldCheck,
  Database,
  Network,
  Sparkles,
  UserCog,
} from "lucide-react";

const sections = [
  {
    id: "information-we-use",
    title: "Information we use",
    icon: Database,
    content: [
      "Account details such as your name, email address, and password credentials are used to create and protect your account. Passwords are handled through the authentication service and are not stored in plain text by KuizRoom.",
      "When you host or join a room, we process room codes, nicknames, quiz activity, submitted answers, scores, and results so the live game can work correctly.",
    ],
  },
  {
    id: "how-the-system-works",
    title: "How the system works",
    icon: Network,
    content: [
      "KuizRoom uses Supabase for authentication and persistent application data, and Socket.IO for live room events such as player joins, questions, timers, answer confirmations, and leaderboard updates.",
      "The system records synchronization information such as perceived latency, server-confirmed latency, consistency, reconciliation, simulated delay, and throughput. These records support the project's academic evaluation and may be reviewed in aggregated form.",
    ],
  },
  {
    id: "ai-practice-uploaded-material",
    title: "AI practice and uploaded material",
    icon: Sparkles,
    content: [
      "If you use AI practice or quiz-generation features, the prompts, questions, and material you provide may be sent to the configured AI provider to produce a response. Do not submit confidential, sensitive, or personal information that you do not have permission to share.",
      "Uploaded documents are used to extract learning content for quiz assistance. Remove files you do not want processed and avoid including information about other people without their consent.",
    ],
  },
  {
    id: "your-choices-data-rights",
    title: "Your choices and data rights",
    icon: UserCog,
    content: [
      "You may stop using the service, update account information where the interface supports it, and ask the project administrator about access, correction, or deletion of your personal data. Room hosts should also consider that quiz and result records can be visible to participants in that room.",
      "KuizRoom is a dissertation research prototype. Availability, retention periods, and data processing may change as the system is evaluated or developed further.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        {/* Soft glow background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_55%)]" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
          {/* Header */}
          <header className="border-b border-slate-800 pb-12">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-indigo-300">
              <LockKeyhole size={17} aria-hidden="true" />
              Privacy and Policy
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              This policy explains what KuizRoom processes when you create quizzes, join live rooms, use AI-assisted tools, and take part in synchronization research.
            </p>
            <p className="mt-4 text-sm text-slate-500">Last updated: 19 August 2026</p>
          </header>

          {/* Table of contents */}
          <nav className="my-10" aria-label="Table of contents">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              On this page
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300 transition hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Policy sections */}
          <div className="space-y-6">
            {sections.map(({ id, title, content, icon: Icon }) => (
              <section
                key={id}
                id={id}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-indigo-500/50 hover:bg-slate-900/70 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-300">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">{title}</h2>
                    <div className="mt-3 space-y-4 text-sm leading-7 text-slate-400">
                      {content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Notice */}
          <div className="mt-8 flex gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-sm leading-6 text-slate-300">
            <ShieldCheck
              className="mt-0.5 shrink-0 text-emerald-300"
              size={20}
              aria-hidden="true"
            />
            <p>
              For account or data questions, contact the KuizRoom project administrator through the channel provided by your institution or project team.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}