import type { Metadata } from "next";
import { Chakra_Petch, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-chakra",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

const jet = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jet",
});

const TITLE = "HAO.SYS — Hao Nguyen The · Backend Developer";
const DESCRIPTION =
  "Backend Developer in Ho Chi Minh City. NestJS, PostgreSQL, Redis, Elasticsearch. Systems designed for 100M+ users.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "HAO.SYS",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

/** Person schema so search engines read this as a personal profile. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hao Nguyen The",
  jobTitle: "Backend Developer",
  url: SITE_URL,
  email: "mailto:thehao155@gmail.com",
  telephone: "+84373346086",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN",
  },
  sameAs: [
    "https://github.com/thehao1505",
    "https://www.linkedin.com/in/haonguyenthe/",
  ],
  knowsAbout: [
    "NestJS",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Elasticsearch",
    "BullMQ",
    "AWS",
    "Docker",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ho Chi Minh City University of Technology and Education",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chakra.variable} ${plex.variable} ${jet.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
