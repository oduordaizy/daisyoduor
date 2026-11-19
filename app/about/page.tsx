import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { ArrowUpRight, Code2, Database, MapPin, Server, Zap } from 'lucide-react';

const expertise = [
  {
    icon: Code2,
    title: 'Frontend engineering',
    description:
      'Responsive, accessible interfaces built with React, Next.js, and TypeScript, with care for performance and maintainability.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description:
      'Application logic and API integrations with Django, .NET, and PostgreSQL to support useful, data-backed products.',
  },
  {
    icon: Database,
    title: 'Database-driven applications',
    description:
      'Practical, consistent web experiences designed around relational data and dependable application backends.',
  },
  {
    icon: Zap,
    title: 'Product engineering',
    description:
      'Collaboration from requirements through delivery, balancing user needs, clear interfaces, and reliable implementation.',
  },
];

export default function About() {
  return (
    <main className="portfolio about-page">
      <Navbar />
      <div className="about-page-content">
        <section className="about-page-hero" aria-labelledby="about-title">
          <p className="about-page-kicker">About Daisy Oduor</p>
          <h1 className="about-page-title" id="about-title">
            Thoughtful software,
            <br />
            <span>built for people.</span>
          </h1>
          <p className="about-page-lead">
            I&apos;m Daisy, a software engineer in Nairobi, Kenya. I build
            responsive web applications and dependable digital products with
            modern frontend and backend technologies.
          </p>
          <div className="about-page-meta">
            <span><MapPin aria-hidden="true" size={15} /> Nairobi, Kenya</span>
            <span>Working with teams worldwide</span>
          </div>
        </section>

        <section className="about-page-section" aria-labelledby="expertise-title">
          <div className="about-page-section-heading">
            <div>
              <p className="about-page-kicker">What I do</p>
              <h2 id="expertise-title">Engineering with intention.</h2>
            </div>
            <p>
              I bring product thinking and full-stack engineering together to
              create useful, polished digital experiences.
            </p>
          </div>
          <div className="about-page-skills">
            {expertise.map(({ icon: Icon, title, description }) => (
              <article className="about-page-skill" key={title}>
                <div className="about-page-skill-icon">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-page-section about-page-story" aria-labelledby="story-title">
          <div>
            <p className="about-page-kicker">Beyond the code</p>
            <h2 id="story-title">
              Curious by nature.
              <br />
              <span>Thoughtful by design.</span>
            </h2>
          </div>
          <div className="about-page-story-copy">
            <p>
              I enjoy exploring new tools and ideas in software engineering.
              Clean design, readable code, and clear communication are values I
              bring to every project.
            </p>
            <p>
              I believe the best digital experiences happen when solid
              engineering is paired with a real understanding of the people
              using the product.
            </p>
          </div>
        </section>

        <section className="about-page-cta" aria-labelledby="about-cta-title">
          <p className="about-page-kicker">Have a good one in mind?</p>
          <h2 id="about-cta-title">Let&apos;s build something useful.</h2>
          <p>
            Have an application or product idea in mind? I&apos;d love to hear what you&apos;re working on.
          </p>
          <Link className="about-page-button" href="/contact">
            Get in touch <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </section>
      </div>
      <Footer />
    </main>
  );
}
