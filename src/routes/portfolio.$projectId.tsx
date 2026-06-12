import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { projects } from "../data/projects";
import { DeviceMockup } from "../components/DeviceMockup";
import { Magnetic } from "../components/Magnetic";

export const Route = createFileRoute("/portfolio/$projectId")({
  component: CaseStudyPage,
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw new Error("Project not found");
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.project.title} — Case Study` },
      { name: "description", content: loaderData.project.overview },
    ],
  }),
});

function CaseStudyPage() {
  const { project } = Route.useLoaderData();
  
  // Find next project for CTA
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-background">
      {/* Parallax Hero */}
      <section ref={heroRef} className="relative flex h-[80vh] items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover mix-blend-luminosity opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md">
              {project.category}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-12 lg:px-24">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 rounded-3xl border border-white/5 bg-[#050505] p-8 shadow-2xl">
              <Link to="/portfolio" className="group mb-12 inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Showroom
              </Link>
              
              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Year</h3>
                  <p className="text-lg font-medium text-white">{project.year}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Services</h3>
                  <ul className="space-y-1 text-lg font-medium text-white">
                    <li>UI/UX Design</li>
                    <li>Frontend Engineering</li>
                    <li>Motion Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-24 lg:col-span-8">
            {/* Overview */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                The <span className="text-primary italic">Vision</span>
              </h2>
              <p className="text-xl leading-relaxed text-white/60 sm:text-2xl">
                {project.overview}
              </p>
            </div>

            {/* Goals */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                Client Goals
              </h2>
              <ul className="space-y-4">
                {project.clientGoals.map((goal, i) => (
                  <li key={i} className="flex items-start text-lg text-white/70 sm:text-xl">
                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process & Challenges */}
            <div className="grid gap-12 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/5 bg-[#0a0a0a] p-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">The Approach</h3>
                <p className="text-lg leading-relaxed text-white/70">
                  {project.designProcess}
                </p>
              </div>
              <div className="rounded-3xl border border-white/5 bg-[#0a0a0a] p-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">The Challenge</h3>
                <p className="text-lg leading-relaxed text-white/70">
                  {project.challenges}
                </p>
              </div>
            </div>

            {/* Desktop Mockup */}
            <div className="py-12">
               <DeviceMockup type="desktop">
                  <img src={project.mockupDesktop} alt="Desktop Preview" className="h-full w-full object-cover" />
               </DeviceMockup>
            </div>

            {/* Mobile Mockup & Results */}
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="mb-8 text-3xl font-bold text-white sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                  The <span className="text-primary italic">Impact</span>
                </h2>
                <ul className="space-y-6">
                  {project.results.map((result, i) => (
                    <li key={i} className="border-l-2 border-primary pl-6">
                      <span className="text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                        {result.split(' ')[0]}
                      </span>
                      <p className="mt-1 text-lg text-white/60">
                        {result.substring(result.indexOf(' ') + 1)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <DeviceMockup type="mobile">
                  <img src={project.mockupMobile} alt="Mobile Preview" className="h-full w-full object-cover" />
                </DeviceMockup>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                Gallery
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.gallery.map((img, i) => (
                  <div key={i} className={`overflow-hidden rounded-3xl border border-white/5 ${i === 0 ? 'sm:col-span-2' : ''}`}>
                    <img 
                      src={img} 
                      alt={`Gallery ${i}`} 
                      className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                      style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Next Project CTA Footer */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#050505] px-4 py-48 text-center sm:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">
          <span className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white/40">Next Case Study</span>
          <h2 className="mb-16 text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
            {nextProject.title}
          </h2>
          <Magnetic>
            <Link 
              to={`/portfolio/${nextProject.id}`} 
              className="group flex h-32 w-32 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
            >
               <span className="font-bold uppercase tracking-widest text-xs">Explore</span>
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
