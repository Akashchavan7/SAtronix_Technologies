import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

function Card({ className, children, onClick }) {
  return (
    <motion.div
      className={cn("glass-panel relative overflow-hidden rounded-[28px] p-6 sm:p-7", className)}
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      onClick={onClick}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
      {children}
    </motion.div>
  );
}

export default Card;
