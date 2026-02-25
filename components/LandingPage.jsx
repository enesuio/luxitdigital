import React from "react";

const navLinks = [
  { href: "#service", label: "Services" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "FAQ’s" },
  { href: "#contact", label: "Get in touch" },
];

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "We specialize in comprehensive full-stack web development, crafting responsive sites that keep users engaged.",
    bullets: [
      "End-to-end Development",
      "Frontend Expertise",
      "Backend Solutions",
      "Database Management",
      "Cross-platform Compatibility",
      "Ongoing Support",
    ],
  },
  {
    title: "Managed Services",
    description:
      "Protect your digital assets with proactive security services that keep pace with evolving threats.",
    bullets: [
      "Threat Detection and Prevention",
      "Security Audits",
      "Incident Response",
      "Compliance Management",
      "Continuous Monitoring",
      "Employee Training",
    ],
  },
  {
    title: "SMMA Services",
    description:
      "Grow your brand with data-backed social media marketing designed to boost visibility and engagement.",
    bullets: [
      "Targeted Campaigns",
      "Content Strategy",
      "Analytics and Reporting",
      "Community Building",
      "Influencer Collaboration",
      "Platform Optimization",
    ],
  },
];

const processSteps = [
  {
    title: "1. Discovery",
    copy: "We dig into your goals, audience, and requirements to shape a plan that fits your vision.",
  },
  {
    title: "2. Wireframe & design",
    copy: "We turn ideas into wireframes and visual design, aligning user experience and brand aesthetics.",
  },
  {
    title: "3. Development",
    copy: "Approved designs become a fast, responsive build using modern best practices and tooling.",
  },
  {
    title: "4. Handover & Aftercare",
    copy: "We launch, test, and support your site long term with updates, fixes, and optimizations.",
  },
];

const projects = [
  {
    title: "Fancy Proje Baslik",
    tags: ["Brand identity", "UI&UX", "Graphic design", "Web development"],
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image:
      "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/658388b7514ee2b319ea070a_Mockups2.jpg",
  },
  {
    title: "Write a fancy title about your project here",
    tags: ["Brand identity", "UI&UX", "Graphic design", "Web development"],
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image:
      "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/658388b7514ee2b319ea0707_Mockups4.jpg",
  },
  {
    title: "Write a fancy title about your project here",
    tags: ["Brand identity", "UI&UX", "Graphic design", "Web development"],
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image:
      "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/658388b7514ee2b319ea0709_Mockups3.jpg",
  },
  {
    title: "Write a fancy title about your project here",
    tags: ["Brand identity", "UI&UX", "Graphic design", "Web development"],
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image:
      "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/658388b7514ee2b319ea0708_Mockups.jpg",
  },
];

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Website costs vary based on design complexity and functionality. We offer quotes tailored to your needs.",
  },
  {
    question: "How long will it take to get a new website up and running?",
    answer:
      "Timelines depend on scope, features, and feedback cadence. Once we define requirements, we share a detailed schedule.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. We design and build responsively so the experience feels great across phones, tablets, and desktops.",
  },
  {
    question: "What if I need help on my site down the road?",
    answer:
      "We provide ongoing support and maintenance for fixes, updates, and new feature requests.",
  },
  {
    question: "Can I access the backend myself?",
    answer:
      "Absolutely. We set up a CMS-friendly backend and can train your team to publish with confidence.",
  },
];

const partners = [
  "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/66008610ea1049f774aa392c_kalburetredlogo.png",
  "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/660084cab967491a9d0933d3_Screenshot%202024-03-24%20143801.png",
  "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/660077e52898808de1e4120b_logo-blue.png",
  "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/660077e52898808de1e41205_pelitw-logo.png",
  "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/660077e058f2d38047daabf8_kalburetredlogo.png",
  "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/6600666ebc45147e21c5ab9b_logo-norconsult-white.png",
  "https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/65feec2015a68428a1a221e9_Tu%CC%88rkiye_I%CC%87s%CC%A7_Bankas%C4%B1_logo.png",
];

const SectionTag = ({ label }) => (
  <div className="mb-10 flex items-center text-xs uppercase tracking-[0.2em] text-white/80">
    <span>{label}</span>
    <span className="ml-5 h-px flex-1 bg-gradient-to-r from-white/0 via-white/70 to-white/0" />
  </div>
);

const CTAButton = ({
  href = "#",
  as = "a",
  type = "button",
  children,
  onClick,
}) => {
  const className =
    "inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ff6f4c] to-[#4454fe] p-[2px] text-sm font-medium text-white shadow-lg shadow-black/30 transition hover:scale-105 hover:shadow-xl hover:shadow-black/30";
  const inner = (
    <span className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#693834] to-[#282c67] px-5 py-3">
      {children}
      <img
        src="https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/658388b7514ee2b319ea0703_Arrow.svg"
        alt=""
        className="h-3 w-3"
      />
    </span>
  );

  if (as === "button") {
    return (
      <button type={type} onClick={onClick} className={className}>
        {inner}
      </button>
    );
  }

  return (
    <a href={href} className={className}>
      {inner}
    </a>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#141520] font-['Anek_Malayalam',sans-serif] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#141520]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="text-xl font-semibold leading-none">
            Luxit <span className="font-normal text-white/80">Digital</span>
          </a>
          <div className="hidden items-center gap-8 text-sm lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 transition hover:text-[#ff6f4c]"
              >
                {link.label}
              </a>
            ))}
            <CTAButton href="https://luxitdigital.youcanbook.me">
              Book a meeting
            </CTAButton>
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <CTAButton href="https://luxitdigital.youcanbook.me">
              Book a meeting
            </CTAButton>
          </div>
        </div>
      </nav>

      <main className="space-y-24 pb-24 lg:space-y-32 lg:pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4454fe1a] via-transparent to-transparent" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 pb-16 pt-16 lg:flex-row lg:items-end lg:px-10 lg:pb-24 lg:pt-24">
            <div className="max-w-xl space-y-6">
              <h1 className="text-3xl font-semibold leading-tight lg:text-4xl">
                Hi, We are Luxit Digital
              </h1>
              <p className="text-base leading-relaxed text-white/80 lg:text-lg">
                We will help you build your online presence with a custom
                website and provide security through MSSP services.
              </p>
              <CTAButton href="https://luxitdigital.youcanbook.me">
                Book a meeting
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#ff6f4c1a] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <SectionTag label="Projects" />
              <CTAButton href="#projects">Explore Projects</CTAButton>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/5">
              <div className="flex gap-2 overflow-x-auto p-3">
                {[...projects, ...projects].map((project, idx) => (
                  <img
                    key={`${project.title}-${idx}`}
                    src={project.image}
                    alt={project.title}
                    className="h-48 min-w-[260px] rounded-xl object-cover"
                  />
                ))}
              </div>
              <p className="px-6 pb-6 text-xs text-white/60">
                (Original file used a marquee animation here. Add Framer Motion
                or CSS animation if you want the continuous scroll effect.)
              </p>
            </div>
          </div>
        </section>

        <section id="service" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6f4c1a] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
            <SectionTag label="Services" />
            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/5 bg-white/5 p-8 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 text-sm text-white/80">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#ff6f4c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-we-work" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-[#4454fe1a] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
            <SectionTag label="How we work" />
            <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-start">
              <div className="space-y-4 text-white/80">
                <h2 className="text-2xl font-semibold text-white lg:text-3xl">
                  First impressions matter, so your website should look great
                  and perform perfectly with security in mind
                </h2>
                <p className="text-sm">
                  How we, together, build your perfect website
                </p>
              </div>
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/5 bg-white/5 p-6"
                  >
                    <div className="text-lg font-semibold">{step.title}</div>
                    <p className="mt-3 text-sm text-white/80">{step.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4454fe0f] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-10 rounded-2xl border border-white/5 bg-white/5 px-6 py-10">
              {partners.map((logo) => (
                <img
                  key={logo}
                  src={logo}
                  alt="Partner logo"
                  className="h-12 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#ff6f4c14] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
            <SectionTag label="Projects" />
            <div className="space-y-6 rounded-2xl border border-white/5 bg-white/5 p-6">
              <p className="text-sm text-white/70">
                (Original used a slider; replace with your preferred carousel
                like Swiper, Keen, or Embla. Below is a simple card list.)
              </p>
              <div className="grid gap-6 lg:grid-cols-2">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="grid gap-4 rounded-xl border border-white/5 bg-[#1b1c2a] p-5 shadow-lg"
                  >
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-white/70">
                        {project.description}
                      </p>
                      <a
                        href={project.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#ff6f4c]"
                      >
                        View website
                        <img
                          alt=""
                          src="https://cdn.prod.website-files.com/658388b7514ee2b319ea06cc/658388b7514ee2b319ea0703_Arrow.svg"
                          className="h-3 w-3"
                        />
                      </a>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-64 w-full rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4454fe12] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
            <SectionTag label="FAQ’s" />
            <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr] lg:items-start">
              <div className="space-y-4 text-white/80">
                <h2 className="text-2xl font-semibold text-white lg:text-3xl">
                  Let’s answer some FAQ’s
                </h2>
                <p className="text-sm">
                  Don’t hesitate to reach out if you have any questions
                </p>
              </div>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="overflow-hidden rounded-xl border border-white/5 bg-white/5"
                  >
                    <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-white">
                      <span>{faq.question}</span>
                      <span className="text-lg text-white/60">+</span>
                    </summary>
                    <div className="border-t border-white/5 px-5 py-4 text-sm text-white/80">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#ff6f4c1a] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
            <SectionTag label="Start a project" />
            <div className="grid gap-8 rounded-2xl border border-white/5 bg-white/5 p-8 lg:grid-cols-[1fr,1.1fr]">
              <div className="space-y-4 text-white/80">
                <h2 className="text-2xl font-semibold text-white lg:text-3xl">
                  Let us know if you want to talk about your next project!
                </h2>
                <p className="text-sm">
                  Fill the form and start a project or, if you prefer to email
                  us instead...{" "}
                  <a
                    href="mailto:contact@luxit.digital?subject=Luxit%20Digital"
                    className="text-white underline decoration-[#ff6f4c]/60 underline-offset-4 transition hover:text-[#ff6f4c]"
                  >
                    contact@luxit.digital
                  </a>
                </p>
              </div>
              <form
                action="https://formspree.io/f/mnngobzb"
                method="POST"
                className="space-y-6"
              >
                <label className="block space-y-2 text-sm text-white/80">
                  <span>What’s your name?</span>
                  <input
                    name="name"
                    required
                    type="text"
                    className="w-full border-b border-white/40 bg-transparent px-1 pb-2 text-white outline-none transition focus:border-white"
                  />
                </label>
                <label className="block space-y-2 text-sm text-white/80">
                  <span>What’s your email?</span>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full border-b border-white/40 bg-transparent px-1 pb-2 text-white outline-none transition focus:border-white"
                  />
                </label>
                <label className="block space-y-2 text-sm text-white/80">
                  <span>Describe your project</span>
                  <textarea
                    name="project-description"
                    required
                    rows={4}
                    className="w-full border-b border-white/40 bg-transparent px-1 pb-2 text-white outline-none transition focus:border-white"
                  />
                </label>
                <CTAButton as="button" type="submit">
                  Request a meeting
                </CTAButton>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/70 lg:flex-row lg:px-10">
          <a href="/" className="text-sm font-semibold text-white">
            Luxit <span className="font-normal text-white/70">Digital</span>
          </a>
          <div>Copyright © Luxit Digital</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
