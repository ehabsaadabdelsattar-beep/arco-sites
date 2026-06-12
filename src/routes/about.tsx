import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye } from "lucide-react";
import aboutWorkspace from "../assets/about-workspace.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Arco Sites" },
      { name: "description", content: "Learn about Arco Sites' mission, vision, and commitment to delivering professional web solutions." },
      { property: "og:title", content: "About Us — Arco Sites" },
      { property: "og:description", content: "Learn about Arco Sites' mission, vision, and commitment to delivering professional web solutions." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden">
        <img
          src={aboutWorkspace}
          alt="Modern web design workspace"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            About Arco Sites
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We transform ideas into professional digital experiences that leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          Who We Are
        </h2>
        <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            At Arco Sites, we create modern, high-performance websites that help businesses build trust, strengthen their online presence, and convert visitors into customers.
          </p>
          <p>
            We specialize in designing and developing fast, responsive, and user-friendly websites tailored to the unique needs of each client. Whether you need a hotel website, a business website, a landing page, or a complete digital presence, we focus on delivering clean design, excellent performance, and a seamless user experience across all devices.
          </p>
          <p>
            Our approach combines modern technologies, intuitive design, and attention to detail to ensure that every website is visually appealing, easy to navigate, and optimized for growth. We believe that a website should be more than just an online brochure—it should be a powerful tool that supports your business goals and enhances your brand image.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/40 bg-card/30 p-8 lg:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                Our Mission
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our mission is to help businesses establish a strong digital presence through professional websites that inspire confidence, attract customers, and support long-term success.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card/30 p-8 lg:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                Our Vision
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To become a trusted partner for businesses seeking innovative, high-quality web solutions that combine design excellence with modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          Let's Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Ready to elevate your digital presence? We're here to help you build something remarkable.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
