import PageShell from "../components/layout/PageShell";
import Seo from "../components/common/Seo";
import SectionWrapper from "../components/common/SectionWrapper";
import Card from "../components/common/Card";
import FadeInSection from "../components/animations/FadeInSection";
import AnimatedText from "../components/common/AnimatedText";
import Button from "../components/common/Button";
import { services } from "../utils/data";

function Services() {
  return (
    <PageShell
      hero={
        <SectionWrapper className="pb-10 pt-16 sm:pt-20">
          <Seo
            title="Services"
            description="Explore Nexio Tech Solutions web development and app development services for modern brands and startups."
          />
          <FadeInSection className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Services</p>
            <AnimatedText
              text="Focused services. Premium execution."
              className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl"
            />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              We keep our offering intentionally sharp so every engagement gets senior
              attention, premium design thinking, and production-grade frontend craft.
            </p>
          </FadeInSection>
        </SectionWrapper>
      }
    >
      <SectionWrapper className="pt-4">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInSection key={service.title} delay={index * 0.08}>
                <Card className="h-full">
                  <div className="flex items-center justify-between">
                    <span className="rounded-3xl border border-white/10 bg-white/8 p-4 text-cyan-200">
                      <Icon size={28} />
                    </span>
                    <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/45">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-8 font-display text-3xl font-semibold">{service.title}</h2>
                  <p className="mt-4 max-w-xl text-white/65">{service.description}</p>
                  <div className="mt-8 space-y-3">
                    {service.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/75"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-6">
        <FadeInSection>
          <div className="glass-panel flex flex-col gap-6 rounded-[32px] p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Ready to Build</p>
              <h3 className="mt-3 font-display text-3xl font-semibold">
                Need a site or app that feels premium from the first interaction?
              </h3>
            </div>
            <Button as="link" to="/contact" variant="gradient">
              Book a Discovery Call
            </Button>
          </div>
        </FadeInSection>
      </SectionWrapper>
    </PageShell>
  );
}

export default Services;
