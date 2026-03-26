import { motion } from "framer-motion";
import PageShell from "../components/layout/PageShell";
import Seo from "../components/common/Seo";
import SectionWrapper from "../components/common/SectionWrapper";
import Card from "../components/common/Card";
import FadeInSection from "../components/animations/FadeInSection";
import AnimatedText from "../components/common/AnimatedText";
import { stats, teamMembers, technologies, timeline } from "../utils/data";

function About() {
  return (
    <PageShell
      hero={
        <SectionWrapper className="pb-10 pt-16 sm:pt-20">
          <Seo
            title="About"
            description="Learn how SAtronix Technology blends strategy, product design, and engineering to build modern digital experiences."
          />
          <FadeInSection className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">About SAtronix Technology</p>
            <AnimatedText
              text="We blend design precision, motion storytelling, and scalable engineering."
              className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl"
            />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              SAtronix Technology is a digital agency focused on premium web and app
              experiences. We help ambitious teams turn ideas into products that look
              sharp, move beautifully, and perform reliably in production.
            </p>
          </FadeInSection>
        </SectionWrapper>
      }
    >
      <SectionWrapper className="pt-4">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeInSection>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Mission</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Design with intent. Build for momentum.</h2>
              <p className="mt-4 text-white/65">
                We create digital experiences that make brands feel more advanced,
                more trustworthy, and easier to choose. Every interface is built to
                support business clarity, performance, and long-term growth.
              </p>
            </Card>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <Card className="h-full">
              <p className="text-sm uppercase tracking-[0.28em] text-violet-200/70">Vision</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Futuristic products with human-centered flow.</h2>
              <p className="mt-4 text-white/65">
                Our vision is to shape next-generation digital products that feel
                cinematic and intuitive at once, pairing memorable aesthetics with
                smooth, scalable interaction design.
              </p>
            </Card>
          </FadeInSection>
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-4">
        <FadeInSection className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Capabilities</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            The stack behind our product work
          </h2>
        </FadeInSection>
        <div className="glass-panel overflow-hidden rounded-[32px] p-5">
          <motion.div
            className="flex min-w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/75"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-4">
        <FadeInSection className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Timeline</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Milestones in our studio evolution
          </h2>
        </FadeInSection>
        <div className="relative space-y-6 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/60 before:to-transparent sm:before:left-1/2">
          {timeline.map((item, index) => (
            <FadeInSection key={item.year} delay={index * 0.06}>
              <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
                <div className={index % 2 === 0 ? "sm:pr-10" : "sm:order-2 sm:pl-10"}>
                  <Card>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">{item.year}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-white/65">{item.text}</p>
                  </Card>
                </div>
                <div className="hidden justify-center sm:flex">
                  <span className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-300 to-violet-500 shadow-glow" />
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-4">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeInSection key={item.label} delay={index * 0.05}>
                <Card>
                  <span className="inline-flex rounded-2xl bg-white/8 p-3 text-cyan-200">
                    <Icon size={22} />
                  </span>
                  <p className="mt-6 font-display text-4xl font-bold">{item.value}</p>
                  <p className="mt-2 text-white/58">{item.label}</p>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-4">
        <FadeInSection className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Team</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            The people behind delivery, growth, and client success
          </h2>
        </FadeInSection>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <FadeInSection key={member.name} delay={index * 0.06}>
              <Card className="h-full">
                <p className="text-sm uppercase tracking-[0.28em] text-violet-200/70">{member.role}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold">{member.name}</h3>
                <p className="mt-4 text-white/65">{member.description}</p>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </SectionWrapper>
    </PageShell>
  );
}

export default About;
