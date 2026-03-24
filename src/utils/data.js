import {
  AppWindow,
  ArrowUpRight,
  Atom,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Immersive, high-performance websites crafted with modern architecture, premium visuals, and measurable UX gains.",
    bullets: ["Responsive websites", "Modern UI", "Fast performance"],
    icon: AppWindow,
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile products engineered for scale, speed, and clean user journeys across Android and iOS.",
    bullets: ["Android/iOS apps", "Cross-platform (React Native)", "Scalable backend"],
    icon: Smartphone,
  },
];

export const featuredProjects = [
  {
    title: "Cooknjoy Food Website",
    category: "Food Ordering Website",
    tech: ["Angular", "TypeScript", "Responsive UI"],
    description:
      "A modern food website experience designed to showcase menus, drive engagement, and make online browsing feel fast and polished.",
    detail:
      "Cooknjoy was built as a smooth Angular-based food website with a clean browsing experience, responsive layouts, and a user-friendly presentation for menu-driven discovery.",
    accent: "from-orange-500/30 via-amber-400/10 to-transparent",
  },
  {
    title: "Visitor System Website",
    category: "Business Management Platform",
    tech: ["Angular", "Node.js", "MySQL"],
    description:
      "A visitor management platform for handling entries, records, and operational workflows with a secure full-stack architecture.",
    detail:
      "This project combines Angular on the frontend with Node.js and MySQL on the backend to support visitor tracking, record management, and admin-friendly system workflows.",
    accent: "from-violet-500/30 via-fuchsia-400/10 to-transparent",
  },
  {
    title: "YugoRides Mobile App",
    category: "Mobile App on Play Store",
    tech: ["Flutter", "Python", "PostgreSQL"],
    description:
      "A ride-focused mobile application published on the Play Store, built for practical usage, smooth flows, and scalable backend support.",
    detail:
      "YugoRides was developed using Flutter for the mobile experience, Python for backend services, and PostgreSQL for reliable data handling to support real-world app usage.",
    accent: "from-cyan-500/30 via-sky-400/10 to-transparent",
  },
];

export const testimonials = [
  {
    quote:
      "Nexio Tech Solutions created exactly the kind of modern website we wanted for our food business. The design feels premium and our customers find it very easy to use.",
    author: "Rahul Patil",
    role: "Owner, Cooknjoy",
  },
  {
    quote:
      "Our visitor management system became much faster and more organized after working with Nexio. The team understood our requirements clearly and delivered a smooth solution.",
    author: "Priya Sharma",
    role: "Admin Manager, Pune Corporate Hub",
  },
  {
    quote:
      "The YugoRides app was developed with great attention to detail. The UI feels clean, the app runs smoothly, and the overall experience has been very positive for our users.",
    author: "Amit Verma",
    role: "Founder, YugoRides",
  },
];

export const stats = [
  { value: "10+", label: "Digital launches completed", icon: BriefcaseBusiness },
  { value: "90%", label: "Client satisfaction rate", icon: Sparkles },
  { value: "3x", label: "Average engagement lift", icon: ChartNoAxesCombined },
  { value: "24/7", label: "Delivery partnership mindset", icon: Workflow },
];

export const technologies = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Node.js",
  ".NET",
  "React Native",
  "TypeScript",
  "Firebase",
];

export const timeline = [
  {
    year: "2024",
    title: "Studio Foundation",
    text: "Nexio Tech Solutions launched with a focus on premium digital products for fast-moving startups.",
  },
  {
    year: "2025",
    title: "Product Expansion",
    text: "The team expanded into mobile and complex platform builds, blending design systems with scalable engineering.",
  },
  {
    year: "2026",
    title: "Experience-Led Delivery",
    text: "Nexio refined its signature approach: cinematic interfaces, conversion-aware UX, and resilient frontend systems.",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akashchavan0719", icon: ArrowUpRight },
];
