import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder Story",
  description: "The story behind ShopNo Domain Platform from founder Edward Hsing.",
};

export default function FounderStoryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <Link href="/" className="text-sm text-[color:var(--accent)]">
        Back to home
      </Link>

      <div className="mt-6 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-[color:var(--subtle)]">Founder story</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[color:var(--text)] sm:text-5xl">
          I started ShopNo Domain Platform when I was 15.
        </h1>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="max-w-sm">
          <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow)]">
            <Image
              src="/images/avatar.jpg"
              alt="Edward Hsing"
              width={720}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl space-y-6 text-base leading-8 text-[color:var(--muted)]">
          <p>
            At the time, I wasn&apos;t trying to build a company or a platform. I just wanted to understand how the
            internet actually works, not from tutorials, but by running real systems myself. DNS, domains, and
            infrastructure: I wanted to see what happens when things break, scale, and get used by real people.
          </p>
          <p>What began as a small experiment slowly turned into something people relied on.</p>
          <p>
            At first, it was a few developers testing things. Then small projects started using it. Then
            communities. Over time, it grew into infrastructure serving hundreds of thousands of users across more
            than 190 countries.
          </p>
          <p>
            Today, ShopNo Domain Platform operates production systems 24/7. It provides domain and DNS infrastructure used by
            developers, students, and communities worldwide.
          </p>
          <p>
            I built the system end-to-end, including the DNS infrastructure, backend systems, and management
            platform. As usage grew, the focus shifted from just building to operating: keeping systems stable,
            handling abuse, and making sure the platform remains usable at scale.
          </p>
          <p>The idea behind ShopNo Domain Platform has always been simple: the internet should be accessible to everyone.</p>
          <p>
            Not as a product, not locked behind pricing tiers, but as infrastructure people can build on freely. That
            idea shaped every decision, from keeping services open to focusing on reliability over features to
            designing systems that can actually run long-term.
          </p>
          <p>
            Alongside ShopNo Domain Platform, I also work on infrastructure and systems projects through EdgeAlphix, as well as
            several open-source initiatives focused on developer tooling, container systems, and operating
            environments.
          </p>
          <p>I&apos;m still building. Still learning. Still scaling.</p>
          <p className="font-medium text-[color:var(--text)]">- Edward Hsing</p>
        </div>
      </div>
    </main>
  );
}
