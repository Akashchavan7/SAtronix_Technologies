import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PageShell from "../components/layout/PageShell";
import Seo from "../components/common/Seo";
import SectionWrapper from "../components/common/SectionWrapper";
import AnimatedText from "../components/common/AnimatedText";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Background3D from "../components/ui/Background3D";
import FadeInSection from "../components/animations/FadeInSection";
import { featuredProjects, services, stats, testimonials } from "../utils/data";

function Home() {
  return (
    <PageShell
      hero={
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
          <Background3D />
          <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-sm text-cyan-100/85"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles size={16} className="text-cyan-300" />
                Premium digital experiences for ambitious brands
              </motion.div>
              <AnimatedText
                text="Building Next-Gen Digital Solutions"
                className="mt-8 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              />
              <motion.p
                className="mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                SAtronix Technology designs and builds futuristic websites, apps,
                and product ecosystems that look cinematic, feel effortless, and
                perform at scale.
              </motion.p>
              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                <Button as="link" to="/contact" variant="gradient">
                  Get Started
                </Button>
                <Button as="link" to="/projects" variant="outline">
                  View Work
                </Button>
              </motion.div>
            </div>

            <div className="relative">
              <div className="glass-panel relative ml-auto max-w-xl rounded-[24px] p-4 sm:rounded-[32px] sm:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10" />
                <div className="relative grid gap-4">
                  {stats.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:rounded-3xl sm:px-5 sm:py-4"
                      >
                        <div>
                          <p className="font-display text-2xl font-bold text-white sm:text-3xl">{item.value}</p>
                          <p className="mt-1 text-sm text-white/55">{item.label}</p>
                        </div>
                        <span className="rounded-2xl bg-white/8 p-2.5 text-cyan-200 sm:p-3">
                          <Icon size={20} className="sm:h-[22px] sm:w-[22px]" />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <Seo
        title="Home"
        description="SAtronix Technology builds high-end digital products, web experiences, and scalable apps with futuristic design and smooth motion."
      />

      <SectionWrapper>
        <FadeInSection className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white">Services</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Crafted for speed, clarity, and standout presence
            </h2>
          </div>
          <Button as="link" to="/services" variant="outline" className="hidden sm:inline-flex">
            Explore Services
          </Button>
        </FadeInSection>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInSection key={service.title} delay={index * 0.08}>
                <Card className="h-full">
                  <div className="flex items-center justify-between">
                    <span className="rounded-2xl bg-white/8 p-2.5 text-cyan-200 sm:p-3">
                      <Icon size={24} />
                    </span>
                    <ArrowRight className="text-white/30" size={18} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold sm:mt-8 sm:text-2xl">{service.title}</h3>
                  <p className="mt-4 text-white">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-6">
        <FadeInSection className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Featured Work</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Real projects built for food, management, and mobility products
          </h2>
        </FadeInSection>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FadeInSection key={project.title} delay={index * 0.08}>
              <Card className="h-full">
                <div
                  className={`mb-4 h-44 rounded-[20px] border border-white/10 bg-gradient-to-br sm:mb-6 sm:h-52 sm:rounded-[24px] ${project.accent}`}
                >
                  <div className="flex h-full items-end rounded-[20px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)] p-4 sm:rounded-[24px] sm:p-5">
                    <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.24em] text-white/65">
                      {project.category}
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-white/90">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-white/6 px-3 py-2 text-xs text-white/65">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-4">
        <FadeInSection className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-white">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Happy clients who trusted us to build real digital products
          </h2>
        </FadeInSection>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeInSection key={item.author} delay={index * 0.06}>
              <Card className="h-full">
                <Quote className="text-cyan-200/75" />
                <p className="mt-4 text-base leading-7 text-white sm:mt-5 sm:text-lg sm:leading-8">"{item.quote}"</p>
                <div className="mt-8">
                  <p className="font-medium text-white">{item.author}</p>
                  <p className="text-sm text-white/70">{item.role}</p>
                </div>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <FadeInSection>
          <div className="glass-panel overflow-hidden rounded-[24px] p-5 sm:rounded-[36px] sm:p-12">
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Let&apos;s Build</p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
                  Launch a digital experience that feels years ahead.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button as="link" to="/contact" variant="gradient">
                  Get Started
                </Button>
                <Button as="link" to="/about" variant="outline">
                  Why SAtronix Technology
                </Button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </SectionWrapper>
    </PageShell>
  );
}

export default Home;





