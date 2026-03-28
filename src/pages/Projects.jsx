import { useState } from "react";
import PageShell from "../components/layout/PageShell";
import Seo from "../components/common/Seo";
import SectionWrapper from "../components/common/SectionWrapper";
import Card from "../components/common/Card";
import Modal from "../components/common/Modal";
import FadeInSection from "../components/animations/FadeInSection";
import AnimatedText from "../components/common/AnimatedText";
import { featuredProjects } from "../utils/data";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <PageShell
      hero={
        <SectionWrapper className="pb-10 pt-16 sm:pt-20">
          <Seo
            title="Projects"
            description="Browse selected SAtronix Technology projects across food platforms, visitor management, and mobile app development."
          />
          <FadeInSection className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Projects</p>
            <AnimatedText
              text="Real work delivered across web platforms and mobile app products."
              className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl"
            />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              A selection of real projects including a food website, a visitor management
              platform, and a Play Store mobile app built with practical full-stack delivery.
            </p>
          </FadeInSection>
        </SectionWrapper>
      }
    >
      <SectionWrapper className="pt-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FadeInSection key={project.title} delay={index * 0.06}>
              <Card className="h-full cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div
                  className={`h-44 rounded-[20px] border border-white/10 bg-gradient-to-br p-4 sm:h-56 sm:rounded-[26px] sm:p-5 ${project.accent}`}
                >
                  <div className="flex h-full items-end justify-between rounded-[18px] border border-white/10 bg-black/25 p-4 sm:rounded-[22px] sm:p-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/80" style={{ color: "#f8fafc" }}>{project.category}</p>
                      <h3 className="mt-2.5 font-display text-xl font-semibold sm:mt-3 sm:text-2xl">{project.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs text-white/90" style={{ color: "#ffffff" }}>
                      Preview
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white sm:mt-6 sm:text-base" style={{ color: "#ffffff" }}>{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-white/6 px-3 py-2 text-xs text-white/90" style={{ color: "#f8fafc" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </SectionWrapper>

      <Modal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-4">
            <p>{selectedProject.detail}</p>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/70">
              {selectedProject.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </PageShell>
  );
}

export default Projects;





