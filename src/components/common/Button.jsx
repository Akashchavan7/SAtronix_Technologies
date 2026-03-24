import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary: "bg-white text-slate-950 hover:bg-slate-100",
  outline:
    "border border-white/15 bg-white/5 text-white hover:border-cyan-300/50 hover:bg-white/10",
  gradient:
    "bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 text-slate-950 shadow-glow hover:brightness-110",
};

function Button({ children, className, variant = "primary", as = "button", to, href, ...props }) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
    variants[variant],
    className,
  );

  if (as === "link") {
    return (
      <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
        <Link className={classes} to={to} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (as === "anchor") {
    return (
      <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
        <a className={classes} href={href} {...props}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
