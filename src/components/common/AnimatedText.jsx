import { motion } from "framer-motion";

function AnimatedText({ text, className = "" }) {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-3 inline-block"
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export default AnimatedText;
