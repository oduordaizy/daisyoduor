import Link from "next/link";

const Footer = () => (
  <footer className="legacy-footer">
    <div>
      <Link href="/" className="legacy-wordmark">Daisy Oduor<span>.</span></Link>
      <p>Software engineer in Nairobi, Kenya.</p>
    </div>
    <nav aria-label="Footer navigation">
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    <a href="mailto:oduordaizy@gmail.com">oduordaizy@gmail.com</a>
    <small>© {new Date().getFullYear()} Daisy Oduor</small>
  </footer>
);

export default Footer;
