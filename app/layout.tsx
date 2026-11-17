import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DEFAULT_DESCRIPTION, PROFILE_IMAGE_URL, SITE_URL } from "./seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Daisy Oduor | Software Engineer in Nairobi, Kenya",
    template: "%s | Daisy Oduor",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Daisy Oduor Portfolio",
  category: "technology",
  keywords: [
    "Daisy Oduor",
    "software engineer in Nairobi",
    "software developer in Kenya",
    "full-stack web development",
    "Next.js developer",
    "React developer",
    "web applications",
  ],
  authors: [{ name: "Daisy Oduor", url: SITE_URL }],
  creator: "Daisy Oduor",
  publisher: "Daisy Oduor",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: "Daisy Oduor",
    title: "Daisy Oduor | Software Engineer in Nairobi, Kenya",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: PROFILE_IMAGE_URL,
        width: 400,
        height: 400,
        alt: "Daisy Oduor, software engineer in Nairobi, Kenya",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Daisy Oduor | Software Engineer in Nairobi, Kenya",
    description: DEFAULT_DESCRIPTION,
    images: [PROFILE_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#11110f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Daisy Oduor",
        url: SITE_URL,
        image: PROFILE_IMAGE_URL,
        jobTitle: "Software Engineer",
        description: DEFAULT_DESCRIPTION,
        email: "oduordaizy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        areaServed: ["Kenya", "Worldwide"],
        knowsAbout: [
          "Software engineering",
          "Full-stack web development",
          "React",
          "Next.js",
          "TypeScript",
          "Django",
          "PostgreSQL",
          ".NET",
        ],
        sameAs: [
          "https://github.com/oduordaizy",
          "https://linkedin.com/in/daisyoduor",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Daisy Oduor | Software Engineer",
        inLanguage: "en-KE",
        about: { "@id": `${SITE_URL}/#person` },
        author: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
