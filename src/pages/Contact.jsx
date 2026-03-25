import { useMemo, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Seo from "../components/common/Seo";
import SectionWrapper from "../components/common/SectionWrapper";
import Card from "../components/common/Card";
import FadeInSection from "../components/animations/FadeInSection";
import AnimatedText from "../components/common/AnimatedText";
import Button from "../components/common/Button";
import { socialLinks } from "../utils/data";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const contactDetails = useMemo(
    () => [
      { label: "Email", value: "satronixtechnology@gmail.com", icon: Mail },
      { label: "Phone", value: "+91 9356965877", icon: Phone },
      { label: "Location", value: "Hinjewadi, Pune", icon: MapPin },
    ],
    [],
  );

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Tell us a little about your project.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = "Please share at least 20 characters so we have context.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    await new Promise((resolve) => window.setTimeout(resolve, 1400));
    setStatus("sent");
    setFormData(initialValues);
  };

  return (
    <PageShell
      hero={
        <SectionWrapper className="pb-10 pt-16 sm:pt-20">
          <Seo
            title="Contact"
            description="Contact SAtronix Technology to start a new web or app project and discuss your product goals."
          />
          <FadeInSection className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Contact</p>
            <AnimatedText
              text="Let's turn your next product idea into a premium digital experience."
              className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl"
            />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              Share your goals, timeline, and rough scope. We'll review it and come
              back with a thoughtful next step.
            </p>
          </FadeInSection>
        </SectionWrapper>
      }
    >
      <SectionWrapper className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeInSection>
            <div className="space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.label}>
                    <div className="flex items-start gap-4">
                      <span className="rounded-2xl bg-white/8 p-3 text-cyan-200">
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-white/45">{item.label}</p>
                        <p className="mt-2 text-white/78">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
              <Card>
                <p className="text-sm uppercase tracking-[0.24em] text-white/45">Social Links</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.08}>
            <Card>
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="mb-2 block text-sm text-white/65" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/50 focus:bg-white/8"
                  />
                  {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/65" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/50 focus:bg-white/8"
                  />
                  {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/65" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your product, audience, and timeline."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/50 focus:bg-white/8"
                  />
                  {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message}</p>}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" variant="gradient" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-sm text-white/45">
                    {status === "sent"
                      ? "Mock email sent successfully. We'll be in touch soon."
                      : "This form uses client-side validation with a mock submission flow."}
                  </p>
                </div>
              </form>
            </Card>
          </FadeInSection>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}

export default Contact;



