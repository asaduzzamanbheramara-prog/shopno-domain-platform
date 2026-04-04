import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About DigitalPlat Foundation.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <Link href="/" className="text-sm text-[color:var(--accent)]">
        Back to home
      </Link>

      <div className="mt-6 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-[color:var(--subtle)]">About</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[color:var(--text)] sm:text-5xl">
          Builder-led internet infrastructure for public access.
        </h1>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-8 shadow-[var(--shadow)]">
          <div className="space-y-6 text-base leading-8 text-[color:var(--muted)]">
            <p>
              DigitalPlat is a nonprofit organization focused on building and operating open internet infrastructure.
            </p>
            <p>
              The organization develops systems around domains, DNS, and developer platforms with a focus on access,
              reliability, and public availability. Its infrastructure is used by hundreds of thousands of users
              and projects across a global network.
            </p>
            <p>
              DigitalPlat was founded by Edward Hsing at age 15 as an effort to reduce barriers to internet access.
              What began as a small infrastructure experiment has grown into production systems that support a broad
              and distributed public.
            </p>
          </div>
        </section>

        <aside className="rounded-[2rem] border border-[color:var(--border)] bg-slate-950 p-8 text-white shadow-[var(--shadow)]">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Organization</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p>DigitalPlat Foundation</p>
            <p>Nonprofit focused on open internet infrastructure</p>
            <p>Domains, DNS, and developer systems</p>
            <p>Internet infrastructure with global reach</p>
          </div>
        </aside>
      </div>

      <section className="mt-10 rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[var(--shadow)]">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-[color:var(--subtle)]">Founder</p>
        <div className="mt-6 max-w-4xl space-y-6 text-base leading-8 text-[color:var(--muted)]">
          <p>Edward Hsing is the founder of DigitalPlat Foundation and the CEO of EdgeAlphix LLC.</p>
          <p>
            His work focuses on internet infrastructure, open systems, and large-scale developer platforms. Across
            these efforts, he has helped build and operate systems used by hundreds of thousands of people globally.
          </p>
          <p>
            In addition to DigitalPlat, he has launched nonprofit and open-source projects centered on access,
            infrastructure, and developer tooling.
          </p>
          <p>
            The organization remains builder-led, with a focus on practical systems, long-term operation, and access
            by default.
          </p>
        </div>
      </section>
    </main>
  );
}
