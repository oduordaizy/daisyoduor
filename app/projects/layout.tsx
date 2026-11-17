import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, SITE_URL } from "../seo";

export const metadata: Metadata = {
  title: "Software Projects",
  description: `Selected software engineering projects by Daisy Oduor, including web applications for mobility, logistics, healthcare, and business. ${DEFAULT_DESCRIPTION}`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Software Projects | Daisy Oduor",
    description: "Selected web development and software engineering projects by Daisy Oduor.",
    url: `${SITE_URL}/projects`,
  },
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
