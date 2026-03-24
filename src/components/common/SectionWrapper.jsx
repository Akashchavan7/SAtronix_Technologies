import { cn } from "../../utils/cn";

function SectionWrapper({ id, className, children }) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export default SectionWrapper;
