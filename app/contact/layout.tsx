import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, SITE_URL } from "../seo";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Daisy Oduor, a software engineer in Nairobi, Kenya, about software and web development projects. ${DEFAULT_DESCRIPTION}`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Daisy Oduor | Software Engineer",
    description: "Get in touch with Daisy Oduor about software engineering and web development.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
