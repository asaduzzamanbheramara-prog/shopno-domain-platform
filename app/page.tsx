import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProjectBlock } from "@/components/project-block";
import { Section } from "@/components/section";
import { Supporters } from "@/components/supporters";
import { capabilities, footerLinks, philosophy, projects, proofPoints, supporters } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="DigitalPlat"
            width={180}
            height={40}
            unoptimized
            className="h-9 w-auto object-contain sm:h-10"
            style={{ filter: "brightness(0) saturate(100%)" }}
            priority
          />
        </Link>
        <details className="relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text)] shadow-[var(--shadow)] [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open navigation menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </summary>
          <div className="absolute right-0 top-14 z-20 min-w-56 rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-3 shadow-[var(--shadow)]">
            <nav className="flex flex-col text-sm text-[color:var(--text)]">
              <Link href="#infrastructure" className="rounded-xl px-4 py-3 hover:bg-white">
                Infrastructure
              </Link>
              <Link href="#projects" className="rounded-xl px-4 py-3 hover:bg-white">
                Projects
              </Link>
              <Link href="#founder-story" className="rounded-xl px-4 py-3 hover:bg-white">
                Founder Story
              </Link>
              <Link href="/about" className="rounded-xl px-4 py-3 hover:bg-white">
                About
              </Link>
              <Link
                href="https://github.com/digitalplatdev"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-3 hover:bg-white"
              >
                GitHub
              </Link>
            </nav>
          </div>
        </details>
        <nav className="hidden items-center gap-8 text-sm text-[color:var(--muted)] md:flex">
          <Link href="#infrastructure" className="hover:text-[color:var(--text)]">
            Infrastructure
          </Link>
          <Link href="#projects" className="hover:text-[color:var(--text)]">
            Projects
          </Link>
          <Link href="/about" className="hover:text-[color:var(--text)]">
            About
          </Link>
          <Link href="https://github.com/digitalplatdev" target="_blank" rel="noreferrer" className="hover:text-[color:var(--text)]">
            GitHub
          </Link>
        </nav>
      </div>

      <Hero />

      <Section
        title="These systems already serve real communities."
        description="DigitalPlat operates live infrastructure at meaningful scale. These systems are already in use across a global network of developers, projects, and communities."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow)]"
            >
              <p className="text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">{point.value}</p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{point.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Supporters items={supporters} />

      <Section
        id="infrastructure"
        eyebrow="What we build"
        title="Infrastructure for access and reliability."
        description="The organization operates systems close to the internet stack. The work spans domains, DNS, APIs, open-source data, and operational safety, with a focus on public access and long-term usefulness."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability) => (
            <Card key={capability.title} title={capability.title} description={capability.description} />
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Core infrastructure projects"
        title="Programs built to hold up in public."
        description="Each project is run like real infrastructure, with attention to uptime, correctness, automation, and long-term public usefulness."
      >
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectBlock key={project.name} {...project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Infrastructure philosophy"
        title="A simple approach."
        description="The operating model is straightforward: build useful systems, keep them open where possible, run them well, and keep them available."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {philosophy.map((statement) => (
            <div
              key={statement}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-8 text-lg font-medium tracking-[-0.03em] text-[color:var(--text)] shadow-[var(--shadow)]"
            >
              {statement}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why it exists"
        title="The internet belongs to everyone."
        description="DigitalPlat is built on a simple idea: access to basic infrastructure should not be limited by cost, geography, or institutional access."
      >
        <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-8 shadow-[var(--shadow)]">
          <div className="max-w-4xl space-y-6 text-base leading-8 text-[color:var(--muted)]">
            <p>
              By lowering the barriers to getting online, DigitalPlat enables individuals, students, and independent
              builders to create, publish, and participate on their own terms.
            </p>
            <p>
              In many parts of the world, the hardest step is simply getting started: having a domain, a working
              system, and a place to build.
            </p>
            <p>
              Our goal is to make that first step easier and more widely available, so more people can take part in
              the open internet. Over time, that helps reduce digital inequality and supports a more accessible,
              resilient web.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="founder-story"
        eyebrow="Founder story"
        title="I started DigitalPlat when I was 15."
        description="What began as an experiment to understand how the internet works has grown into infrastructure used by hundreds of thousands of people worldwide."
      >
        <Link
          href="/founder-story"
          className="inline-flex items-center rounded-full border border-[color:var(--border-strong)] bg-white px-6 py-3 text-sm font-medium text-[color:var(--text)] transition-colors hover:bg-slate-50"
        >
          Read the full story
        </Link>
      </Section>

      <Section
        title="Work with DigitalPlat"
        description="We collaborate with builders, maintainers, funders, and organizations working on real systems. If the work touches infrastructure, public access, digital rights, reliability, or open technology, we want to hear from you."
      >
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-[color:var(--border)] bg-slate-950 px-8 py-8 text-white shadow-[var(--shadow)] lg:flex-row lg:items-center">
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            Partnerships, infrastructure collaboration, fiscal sponsorship conversations, and general inquiries all route through the same channel.
          </p>
          <Link
            href="mailto:contact@digitalplat.org"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-100"
          >
            Get in touch
          </Link>
        </div>
      </Section>

      <Footer companyLinks={footerLinks.company} legalLinks={footerLinks.legal} />
    </main>
  );
}
