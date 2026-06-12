import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shopnoltd.dpdns.org"),
  title: {
    default: "ShopNo Domain Platform | Open infrastructure, in production.",
    template: "%s | ShopNo Domain Platform",
  },
  description:
    "ShopNo Domain Platform builds and operates open-access systems for domains, DNS, and developer infrastructure used by hundreds of thousands of users globally.",
  applicationName: "ShopNo Domain Platform",
  keywords: [
    "ShopNo Domain Platform",
    "open infrastructure",
    "DNS",
    "domain infrastructure",
    "developer infrastructure",
    "nonprofit infrastructure",
    "FreeDomain",
    "OpenSource.ngo",
  ],
  openGraph: {
    title: "ShopNo Domain Platform | Open infrastructure, in production.",
    description:
      "ShopNo Domain Platform builds and operates open-access systems for domains, DNS, and developer infrastructure used by hundreds of thousands of users globally.",
    url: "https://shopnoltd.dpdns.org",
    siteName: "ShopNo Domain Platform",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopNo Domain Platform | Open infrastructure, in production.",
    description:
      "ShopNo Domain Platform builds and operates open-access systems for domains, DNS, and developer infrastructure used by hundreds of thousands of users globally.",
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
