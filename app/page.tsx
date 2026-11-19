import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Navbar from "./components/Navbar";

const projects = [
  {
    name: "iTravas",
    category: "Mobility · Full-stack",
    description:
      "A ridesharing platform connecting drivers and passengers across Kenya, with a focus on practical, secure journeys.",
    image: "/projects/itravas.png",
    technologies: ["React", "Django", "PostgreSQL"],
    href: "https://itravas.com",
  },
  {
    name: "Avoworld Africa",
    category: "Logistics · Web platform",
    description:
      "A digital home for an avocado logistics company, bringing its services and operations online.",
    image: "/projects/avoworld.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://avoworldafrica.co.ke/",
  },
  {
    name: "Afritox Mobile Lab",
    category: "Healthcare · Web platform",
    description:
      "A healthcare platform that helps people book mobile lab services and access testing information.",
    image: "/projects/afritox.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "http://187.127.229.137:3005",
  },
  {
    name: "Elite Africa Football Academy",
    category: "Sports · Website",
    description:
      "A clear, content-led website for a football academy, with room to share news and updates.",
    image: "/projects/eafa.jpg",
    technologies: ["Next.js", "TypeScript", ".NET"],
    href: "https://eliteafricafa.com",
  },
  {
    name: "Lintech Web Solutions",
    category: "Technology · Corporate website",
    description:
      "A company website that presents IT services, portfolio work, and the business behind them.",
    image: "/projects/lintech.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://lintechwebsolutions.co.ke",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Frontend engineering",
    description:
      "Responsive, accessible interfaces built with React, Next.js, and TypeScript.",
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Practical application logic and API integrations with Django, .NET, and PostgreSQL.",
  },
  {
    number: "03",
    title: "Product thinking",
    description:
      "Turning real needs into clear user flows, maintainable features, and useful web products.",
  },
];

export default function Home() {
  return (
    <main className="portfolio">
      <Navbar />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title">
              I build
              <br />
              <span>software</span>
              <br />
              for people.
            </h1>
            <p className="hero-description">
              I&apos;m Daisy Oduor, a software engineer creating thoughtful,
              reliable web applications for real-world needs.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="#work">
                Explore my work <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <a className="text-link" href="mailto:oduordaizy@gmail.com">
                Let&apos;s talk <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/oduordaizy" target="_blank" rel="noreferrer">
                <Github aria-hidden="true" size={16} /> GitHub
              </a>
              <a href="https://linkedin.com/in/daisyoduor" target="_blank" rel="noreferrer">
                <Linkedin aria-hidden="true" size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="portrait-column">
            <div className="portrait-frame">
              <Image
                src="/daisyoduor.jpeg"
                alt="Daisy Oduor, software engineer based in Nairobi, Kenya"
                fill
                priority
                sizes="(max-width: 760px) 76vw, 38vw"
              />
              <span className="portrait-label">DAISY ODUOR · ENGINEER</span>
            </div>
            <p className="portrait-caption">
              Building for the web, with curiosity and care.
            </p>
          </div>
        </div>
        <a className="scroll-cue" href="#work">
          <span>Scroll to explore</span> <ArrowDown aria-hidden="true" size={15} />
        </a>
      </section>

      <section className="stack-strip" aria-label="Technologies">
        <span>TOOLS I WORK WITH</span>
        <p>TypeScript <i /> React <i /> Next.js <i /> Django <i /> PostgreSQL <i /> .NET</p>
      </section>

      <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">SELECTED PROJECTS · 2024—2026</p>
            <h2 id="work-title">Work in the real world<span>.</span></h2>
          </div>
          <p>
            A selection of digital products and websites I&apos;ve helped bring
            to life across mobility, logistics, healthcare, and more.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card${index === 0 ? " project-featured" : ""}`} key={project.name}>
              <a
                className="project-image"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.name} website`}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} website project`}
                  fill
                  sizes={index === 0 ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 100vw, 40vw"}
                />
                <span className="project-open"><ArrowUpRight aria-hidden="true" size={19} /></span>
              </a>
              <div className="project-info">
                <div className="project-title-line">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <ArrowUpRight className="project-arrow" aria-hidden="true" size={20} />
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-wrap about-inner">
          <div className="about-intro">
            <p className="section-kicker">A LITTLE ABOUT ME</p>
            <h2 id="about-title">
              Engineer by craft.
              <br />
              <span>Curious by nature.</span>
            </h2>
            <p>
              I&apos;m a Nairobi-based software engineer who enjoys taking an
              idea from the first sketch to a working product. I care about
              accessible interfaces, dependable code, and technology that
              solves a meaningful problem.
            </p>
            <p>
              I work across the stack—from responsive frontends to APIs and
              data-backed applications—and collaborate with teams and clients
              to make the details work.
            </p>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.number}>
                <span>{capability.number}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <ArrowUpRight aria-hidden="true" size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
        <p className="section-kicker">HAVE A GOOD ONE IN MIND?</p>
        <h2 id="contact-title">Let&apos;s build something<br /><span>that matters.</span></h2>
        <a className="button button-light" href="mailto:oduordaizy@gmail.com">
          Start a conversation <ArrowUpRight aria-hidden="true" size={17} />
        </a>
        <p className="contact-location">Based in Nairobi, Kenya · Working everywhere</p>
      </section>

      <footer className="portfolio-footer">
        <Link className="wordmark" href="/" aria-label="Daisy Oduor home">DO<span>.</span></Link>
        <p>© {new Date().getFullYear()} Daisy Oduor · Software Engineer</p>
        <a href="mailto:oduordaizy@gmail.com">oduordaizy@gmail.com</a>
      </footer>
    </main>
  );
}
