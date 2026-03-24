import { Link } from "react-router-dom";
import { socialLinks } from "../../utils/data";
import logo from "../../assets/nexio_logo.png";

function Footer() {
  return (
    <footer className="relative border-t border-white/8">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <img
            src={logo}
            alt="Nexio Tech Solutions logo"
            className="h-12 w-auto object-contain drop-shadow-[0_0_22px_rgba(56,189,248,0.35)] sm:h-14"
          />
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Building next-gen digital solutions with bold design, cinematic motion,
            and scalable engineering for modern brands.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">Navigate</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">Social</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
