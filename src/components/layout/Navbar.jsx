import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import { navLinks } from "../../utils/data";
import { cn } from "../../utils/cn";
import logo from "../../assets/nexio_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Nexio Tech Solutions logo"
            className="h-9 w-auto object-contain drop-shadow-[0_0_18px_rgba(56,189,248,0.35)] sm:h-10"
          />
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm text-white/65 transition hover:text-white",
                  isActive && "bg-white/10 text-white",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button as="link" to="/contact" variant="gradient">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="glass-panel mx-auto mt-3 max-w-7xl rounded-[28px] p-4 md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            <div className="mb-4">
              <img
                src={logo}
                alt="Nexio Tech Solutions logo"
                className="h-10 w-auto object-contain drop-shadow-[0_0_18px_rgba(56,189,248,0.35)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="rounded-2xl px-4 py-3 text-white/75 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button as="link" to="/contact" variant="gradient" onClick={() => setIsOpen(false)}>
                Start a Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
