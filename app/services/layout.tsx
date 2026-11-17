import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, SITE_URL } from "../seo";

export const metadata: Metadata = {
  title: "Software Engineering Services",
  description: `Software engineering and web development services from Daisy Oduor in Nairobi, Kenya. ${DEFAULT_DESCRIPTION}`,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software Engineering Services | Daisy Oduor",
    description: "Web application development and software engineering services from Daisy Oduor.",
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
