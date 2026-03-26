import { NavLink } from "react-router-dom";
import { navLinks, socialLinks } from "../../utils/data";
import { cn } from "../../utils/cn";
import logo from "../../assets/SAtronix_logo.png";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_auto_auto] lg:items-start">
        <div className="max-w-xl">
          <img
            src={logo}
            alt="SAtronix Technology logo"
            className="h-12 w-auto object-contain drop-shadow-[0_0_22px_rgba(56,189,248,0.35)] sm:h-14"
          />
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Building next-gen digital solutions with bold design, cinematic motion,
            and scalable engineering for modern brands.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">Navigate</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition duration-300",
                    isActive
                      ? "border-cyan-300/30 bg-white/12 text-white shadow-[0_10px_24px_rgba(56,189,248,0.16)]"
                      : "border-white/10 bg-white/4 text-white/65 hover:border-white/18 hover:bg-white/8 hover:text-white",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">Social</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/4 px-4 py-2 font-medium text-white/65 transition duration-300 hover:border-cyan-300/25 hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
