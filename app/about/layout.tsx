import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, SITE_URL } from "../seo";

export const metadata: Metadata = {
  title: "About",
  description: `About Daisy Oduor, a software engineer based in Nairobi, Kenya. ${DEFAULT_DESCRIPTION}`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Daisy Oduor | Software Engineer",
    description: `Meet Daisy Oduor, a software engineer in Nairobi, Kenya. ${DEFAULT_DESCRIPTION}`,
    url: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
