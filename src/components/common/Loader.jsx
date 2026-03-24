import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <motion.div
        className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <motion.div
          className="absolute h-20 w-20 rounded-full border border-cyan-300/25"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-300 to-violet-500 shadow-glow"
          animate={{ y: [-28, 28, -28] }}
          transition={{ repeat: Infinity, duration: 2.1, ease: "easeInOut" }}
        />
      </motion.div>
      <p className="mt-8 font-display text-lg tracking-[0.35em] text-white/80">NEXIO</p>
    </motion.div>
  );
}

export default Loader;
