import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Law Enforcement & Subpoena Policy",
  description: "ShopNo Domain Platform law enforcement and subpoena policy.",
};

export default function LawEnforcementSubpoenaPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <Link href="/" className="text-sm text-[color:var(--accent)]">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">
        Law Enforcement &amp; Subpoena Policy
      </h1>
      <p className="mt-3 text-sm text-[color:var(--subtle)]">Last updated: March 21, 2026</p>

      <div className="mt-8 space-y-8 text-base leading-8 text-[color:var(--muted)]">
        <section className="space-y-6">
          <p>
            ShopNo Domain Platform Foundation operates public internet infrastructure and is committed to protecting user privacy
            while complying with applicable laws and valid legal processes.
          </p>
          <p>
            This policy outlines how ShopNo Domain Platform responds to subpoenas, court orders, and law enforcement requests.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Legal Process</h2>
          <p>
            ShopNo Domain Platform only discloses information when required by applicable law and in response to valid legal
            process, including subpoenas, court orders, or other legally binding requests.
          </p>
          <p>All requests must be issued by a competent authority with proper jurisdiction.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            Scope of Data Disclosure
          </h2>
          <p>ShopNo Domain Platform does not sell user data and does not voluntarily share user information with third parties.</p>
          <p>Information will only be disclosed if:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>It exists within our systems</li>
            <li>It is reasonably accessible</li>
            <li>Disclosure is legally required</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Data Retention</h2>
          <p>
            ShopNo Domain Platform follows a minimal data retention model aligned with its role as a public infrastructure
            provider.
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Certain systems do not retain long-term logs or user data</li>
            <li>Data associated with deleted domains or accounts may not be recoverable</li>
            <li>Backup availability, if any, is limited and not guaranteed</li>
          </ul>
          <p>As a result, ShopNo Domain Platform may be unable to provide historical data in many cases.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Request Submission</h2>
          <p>Legal requests must be submitted in written form.</p>
          <p>
            Email (preferred):{" "}
            <Link href="mailto:contact@shopnoltd.dpdns.org" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
              contact@shopnoltd.dpdns.org
            </Link>
          </p>
          <p>Requests must include:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Issuing authority</li>
            <li>Case reference or subpoena number</li>
            <li>Specific identifiers (such as domains, accounts, or IP addresses)</li>
            <li>A clear description of the requested data</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Response Process</h2>
          <p>Upon receiving a valid legal request, ShopNo Domain Platform will:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Review the legal validity of the request</li>
            <li>Identify any responsive data within its systems</li>
            <li>Respond within a reasonable timeframe</li>
          </ul>
          <p>If no data is found, ShopNo Domain Platform will confirm that no responsive records are available.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">User Notification</h2>
          <p>
            Unless prohibited by law (for example, due to a non-disclosure order), ShopNo Domain Platform may notify affected
            users of legal requests.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Abuse and Misuse</h2>
          <p>
            ShopNo Domain Platform prohibits the use of its infrastructure for unlawful activities, including phishing, fraud,
            malware distribution, and other forms of abuse.
          </p>
          <p>We reserve the right to suspend or restrict services that violate our Acceptable Use Policy.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Disclaimer</h2>
          <p>This policy is provided for informational purposes only and does not constitute legal advice.</p>
          <p>ShopNo Domain Platform Foundation reserves the right to update this policy at any time.</p>
        </section>
      </div>
    </main>
  );
}
