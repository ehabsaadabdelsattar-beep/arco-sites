import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Smartphone, Search, LayoutTemplate } from "lucide-react";
import { projects } from "../data/projects";
import { DeviceMockup } from "../components/DeviceMockup";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { AnimatedCounter } from "../components/AnimatedCounter";
import luxuryHotelUi from "../assets/hotel-room-sunset.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arco Sites — Premium Web Design & Development" },
      {
        name: "description",
        content:
          "We build high-performance, visually refined websites for hotels and businesses. Clean design. Fast loading. Real results.",
      },
    ],
  }),
  component: HomePage,
});

const featuredProjects = projects;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: LayoutTemplate,
    title: "Custom Website Design",
    desc: "No templates. Every site is crafted from scratch to match your brand and business objectives.",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    desc: "Optimized for speed. Fast load times, lightweight assets, and a technical foundation built to last.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    desc: "Responsive by design. Every layout works perfectly across all screen sizes and devices.",
  },
  {
    icon: Search,
    title: "SEO & Conversion",
    desc: "Built to rank and convert. Clean markup, semantic structure, and clear calls to action.",
  },
];

const whyUs = [
  "Clean, focused design — no clutter",
  "Fast delivery with full transparency",
  "Hotel & hospitality specialists",
  "Mobile-first, SEO-ready by default",
  "Direct communication, no middlemen",
  "Post-launch support included",
];

const testimonials = [
  {
    quote: "Arco Sites completely transformed our online presence. The new website is not just beautiful, but it significantly increased our direct bookings within the first month.",
    author: "Mahmoud Hassan",
    role: "General Manager, Naama Inn",
  },
  {
    quote: "Professionalism and speed! The team understood our vision perfectly and delivered a platform that truly reflects the luxury of our properties.",
    author: "Sarah El-Sayed",
    role: "Director, Elite Properties",
  },
  {
    quote: "We needed a website that could handle high traffic and complex reservations effortlessly. Arco Sites delivered beyond our expectations.",
    author: "Ahmed Tariq",
    role: "CEO, Taste House",
  }
];

function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-14 text-center sm:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="mx-auto max-w-5xl"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full border px-4 py-1.5 text-xs font-medium tracking-widest uppercase"
            style={{
              borderColor: "var(--border)",
              color: "var(--primary)",
              backgroundColor: "var(--card)",
            }}
          >
            Premium Web Design & Development Agency
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[5.5rem]"
            style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
          >
            High-Performance Websites
            <br />
            <span style={{ color: "var(--primary)" }}>That Drive Real Results.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            We don't just build websites; we build digital growth engines. Elevate your brand, dominate your market, and convert visitors into loyal customers.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "var(--primary)", color: "#ffffff" }}
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold transition-all duration-200 hover:opacity-70"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--muted-foreground)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-4 w-[1px]"
            style={{ backgroundColor: "var(--muted-foreground)" }}
          />
        </motion.div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section
        className="px-6 py-20 sm:px-12 lg:px-24"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {[
              { value: 45, suffix: "+", label: "Projects Delivered" },
              { value: 99, suffix: "%", label: "Client Satisfaction" },
              { value: 100, suffix: "%", label: "Mobile Responsive" },
              { value: 24, suffix: "/7", label: "Support Available" },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span
                  className="text-4xl font-bold tracking-tight sm:text-5xl"
                  style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
                >
                  <AnimatedCounter value={value} suffix={suffix} />
                </span>
                <span className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section
        className="px-6 py-32 sm:px-12 lg:px-24"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-16">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--primary)" }}
              >
                What We Offer
              </p>
              <h2
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
              >
                Everything your website needs.
              </h2>
            </motion.div>

            <div
              className="grid gap-px sm:grid-cols-2"
              style={{ backgroundColor: "var(--border)" }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-4 p-10 transition-colors duration-200"
                  style={{ backgroundColor: "var(--background)" }}
                >
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--card)", color: "var(--primary)" }}
                  >
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-70"
                style={{ color: "var(--primary)" }}
              >
                See all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SELECTED WORK ─────────────────────────────────── */}
      <section
        className="px-6 py-32 sm:px-12 lg:px-24"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--primary)" }}
            >
              Selected Work
            </p>
            <h2
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
            >
              Our recent work.
            </h2>
          </motion.div>

          {/* Unified Portfolio */}
          <div>
            <div className="flex flex-col gap-24">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                  className="grid items-center gap-12 lg:grid-cols-2"
                >
                  {/* Text */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <p
                      className="mb-2 text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      0{i + 1} — {project.category}
                    </p>
                    <h3
                      className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
                      style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mb-8 text-sm leading-relaxed"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {project.overview.slice(0, 160)}…
                    </p>
                    <Link
                      to="/portfolio/$projectId"
                      params={{ projectId: project.id }}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-70"
                      style={{ color: "var(--primary)" }}
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Mockup */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    {project.showcaseTheme ? (
                      <ProjectShowcase
                        imageUrl={project.mockupDesktop}
                        projectTheme={project.showcaseTheme}
                        projectTitle={project.title}
                        variant={project.showcaseVariant ?? "laptop"}
                      />
                    ) : (
                      <DeviceMockup type="desktop">
                        <img
                          src={project.mockupDesktop}
                          alt={project.title}
                          className="block h-auto w-full"
                          loading="lazy"
                        />
                      </DeviceMockup>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex h-12 items-center gap-2 rounded-full border px-8 text-sm font-semibold transition-all duration-200 hover:opacity-70"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── LIVE PREVIEW ──────────────────────────────────── */}
      <section
        className="px-6 py-32 sm:px-12 lg:px-24"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--primary)" }}
            >
              Live Example
            </p>
            <h2
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
            >
              See the difference.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <DeviceMockup type="desktop">
              <img
                src="/projects_ui/grand_oasis_ui.png"
                alt="High-end website UI example"
                className="block h-auto w-full"
              />
            </DeviceMockup>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section
        className="px-6 py-32 sm:px-12 lg:px-24"
        style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--background)" }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--primary)" }}
            >
              Client Success Stories
            </p>
            <h2
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
            >
              Trusted by industry leaders.
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col justify-between rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div>
                  <div className="mb-6 flex gap-1" style={{ color: "var(--primary)" }}>
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed italic" style={{ color: "var(--foreground)" }}>
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-8">
                  <p className="font-bold" style={{ color: "var(--foreground)" }}>{testimonial.author}</p>
                  <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ARCO SITES ────────────────────────────────── */}
      <section
        className="px-6 py-32 sm:px-12 lg:px-24"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--primary)" }}
              >
                Why Arco Sites
              </p>
              <h2
                className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
                style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
              >
                Simple process.
                <br />
                Real results.
              </h2>
              <p
                className="mb-10 max-w-md text-base leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                We focus on clean, fast websites that help your business grow — without
                overcomplicating things.
              </p>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full px-8 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "var(--primary)", color: "#ffffff" }}
              >
                Get a Free Consultation
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.07 }}
              className="flex flex-col"
            >
              {whyUs.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <CheckCircle className="h-4 w-4 shrink-0" style={{ color: "var(--primary)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section
        className="px-6 py-40 text-center sm:px-12 lg:px-24"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="mx-auto max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--primary)" }}
          >
            Ready to Start?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
            style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
          >
            Let's build your website the right way.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-10 max-w-lg text-lg"
            style={{ color: "var(--muted-foreground)" }}
          >
            Tell us about your project — we'll reply with a clear plan, timeline, and pricing. No
            commitment required.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-full px-10 text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "var(--primary)", color: "#ffffff" }}
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex h-14 items-center gap-2 rounded-full border px-10 text-sm font-semibold transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
