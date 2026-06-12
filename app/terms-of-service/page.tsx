import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ShopNo Domain Platform terms of service.",
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <Link href="/" className="text-sm text-[color:var(--accent)]">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">
        ShopNo Domain Platform – Terms of Service
      </h1>
      <p className="mt-3 text-sm text-[color:var(--subtle)]">Last updated: 1/21/2026</p>

      <div className="mt-8 space-y-8 text-base leading-8 text-[color:var(--muted)]">
        <section className="space-y-6">
          <p>
            Welcome to ShopNo Domain Platform. By accessing or using any website, service, software, or content operated by
            ShopNo Domain Platform (collectively, the “Services”), you agree to be bound by these Terms of Service (“Terms”). If
            you do not agree to these Terms, please do not use the Services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">1. About ShopNo Domain Platform</h2>
          <p>
            ShopNo Domain Platform is an open infrastructure and public-interest technology initiative focused on open-source
            software, digital identity, and internet freedom.
          </p>
          <p>
            ShopNo Domain Platform operates multiple projects, platforms, and services, some of which are open-source, and some
            of which are offered as paid or managed services through affiliated entities.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">2. Scope of These Terms</h2>
          <p>These Terms apply to:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>The ShopNo Domain Platform main website and informational pages</li>
            <li>Documentation, public resources, and community content hosted by ShopNo Domain Platform</li>
            <li>Open-source projects and repositories operated by ShopNo Domain Platform (subject to their respective licenses)</li>
          </ul>
          <p>
            These Terms do not replace or override service-specific terms, including but not limited to ShopNo Domain Platform
            Domain, which are governed by separate agreements as described below.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">3. Open-Source Software</h2>
          <p>Most ShopNo Domain Platform software projects are released as open-source.</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Each open-source project is governed solely by its applicable license</li>
            <li>Use, modification, and redistribution are subject to the terms of that license</li>
            <li>Nothing in these Terms restricts rights granted under an applicable open-source license</li>
          </ul>
          <p>
            ShopNo Domain Platform does not provide warranties or guarantees for open-source software unless explicitly stated in
            writing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            4. Paid and Managed Services
          </h2>
          <p>
            Certain paid, enterprise, or managed services related to ShopNo Domain Platform projects may be provided by affiliated
            entities, including:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>EdwardLab</li>
            <li>EdgeAlphix LLC</li>
          </ul>
          <p>
            Such services are subject to separate agreements, pricing, and terms presented at the time of purchase or
            engagement. ShopNo Domain Platform itself is not responsible for billing, service delivery, or contractual obligations
            arising from those services unless explicitly stated.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            5. ShopNo Domain Platform Domain Services
          </h2>
          <p>ShopNo Domain Platform Domain services are governed by separate, service-specific terms, including:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              ShopNo Domain Platform Domain Terms of Service
              <br />
              <Link
                href="https://domain.shopnoltd.dpdns.org/terms-of-service"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--text)] hover:text-[color:var(--accent)]"
              >
                https://domain.shopnoltd.dpdns.org/terms-of-service
              </Link>
            </li>
            <li>
              ShopNo Domain Platform Domain Acceptable Use Policy
              <br />
              <Link
                href="https://domain.shopnoltd.dpdns.org/acceptable-use-policy"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--text)] hover:text-[color:var(--accent)]"
              >
                https://domain.shopnoltd.dpdns.org/acceptable-use-policy
              </Link>
            </li>
            <li>
              Applicable TLD-specific terms, which are presented during registration at
              <br />
              <Link
                href="https://dash.domain.shopnoltd.dpdns.org/"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--text)] hover:text-[color:var(--accent)]"
              >
                https://dash.domain.shopnoltd.dpdns.org/
              </Link>
            </li>
          </ul>
          <p>
            By using ShopNo Domain Platform Domain services, you agree to be bound by those terms in addition to these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">6. Acceptable Use</h2>
          <p>You agree not to use the Services to:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe intellectual property or privacy rights</li>
            <li>Distribute malware, engage in abuse, or conduct activities that harm infrastructure or users</li>
            <li>Attempt to interfere with, disrupt, or compromise the security or integrity of the Services</li>
          </ul>
          <p>Additional acceptable use requirements may apply to specific services.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            7. Availability and Changes
          </h2>
          <p>The Services are provided on an “as is” and “as available” basis.</p>
          <p>ShopNo Domain Platform may:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Modify or discontinue any part of the Services at any time</li>
            <li>Update these Terms periodically</li>
          </ul>
          <p>Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            8. Disclaimer of Warranties
          </h2>
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>The Services are provided without warranties of any kind</li>
            <li>
              ShopNo Domain Platform disclaims all implied warranties, including merchantability, fitness for a particular
              purpose, and non-infringement
            </li>
          </ul>
          <p>Use of the Services is at your own risk.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            9. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, ShopNo Domain Platform shall not be liable for any indirect, incidental,
            consequential, or special damages arising from or related to the use of the Services.
          </p>
          <p>This includes, but is not limited to, loss of data, loss of profits, or service interruption.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
            10. Third-Party Services and Links
          </h2>
          <p>
            The Services may reference or link to third-party websites, services, or software. ShopNo Domain Platform does not
            control or endorse third-party content and is not responsible for their terms or practices.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">11. Governing Law</h2>
          <p>
            These Terms are governed by applicable laws based on the entity or service providing the relevant
            functionality, without regard to conflict of law principles.
          </p>
          <p>Service-specific agreements may specify a different governing law.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">12. Contact</h2>
          <p>If you have questions about these Terms, please contact:</p>
          <p>ShopNo Domain Platform</p>
          <p>
            Email:{" "}
            <Link href="mailto:contact@shopnoltd.dpdns.org" className="text-[color:var(--text)] hover:text-[color:var(--accent)]">
              contact@shopnoltd.dpdns.org
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
