import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { DeviceMockup } from "../components/DeviceMockup";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ProblemSolution } from "../components/ProblemSolution";
import { EngineeringExcellence } from "../components/EngineeringExcellence";
import { ScrollableMockup } from "../components/ScrollableMockup";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const featuredProjects = projects.slice(0, 3);

const getDynamicProjectsCount = () => {
  const startDate = new Date("2026-06-13").getTime();
  const currentDate = new Date().getTime();
  const weeksPassed = Math.max(0, Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 7)));
  return 25 + weeksPassed;
};

function HomePage() {
  return (
    <div className="bg-[#000000] text-white selection:bg-white selection:text-black">
      
      {/* ACT I: MINIMALIST HERO */}
      <section className="relative flex min-h-[100svh] flex-col justify-center px-4 pt-24 sm:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-8 block text-xs font-bold uppercase tracking-[0.4em] text-white/50">
              Arco Sites
            </span>
            <h1 className="max-w-5xl text-[12vw] font-normal leading-[1.05] tracking-tight sm:text-7xl lg:text-[7.5rem]" style={{ fontFamily: "var(--font-serif)" }}>
              We build digital <br />
              <span className="italic text-white/70">experiences</span> that <br />
              demand <span className="italic text-white">attention.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-24 flex flex-col items-start justify-between gap-12 sm:flex-row sm:items-end"
          >
            <div className="max-w-md">
              <p className="mb-8 text-xl leading-relaxed text-white/50">
                Award-winning web development and design for global brands. No templates. Pure engineering.
              </p>
              <p className="border-l-2 border-[#333] pl-4 text-lg font-medium text-white/90">
                "We don't build websites. <br />We build digital trust."
              </p>
            </div>
            
            <Link 
              to="/portfolio"
              className="inline-flex items-center justify-center border-b border-white pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
            >
              Explore Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ACT II: THE PSYCHOLOGICAL BRIDGE */}
      <ProblemSolution />

      {/* ACT III: FULL-SCREEN CINEMATIC SHOWCASE */}
      <section className="bg-[#000000]">
        <div className="mx-auto mb-12 max-w-7xl px-4 py-32 sm:px-12 lg:px-24">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/40">Selected Works</h2>
          <div className="h-[1px] w-full bg-[#222]" />
        </div>

        <div className="flex flex-col gap-32 pb-32">
          {featuredProjects.map((project, i) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-12 lg:px-24">
                <div className="grid items-center gap-16 lg:grid-cols-12">
                  
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="mb-8 flex items-center gap-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/50">0{i + 1}</span>
                      <div className="h-[1px] w-12 bg-[#333]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white/50">{project.category}</span>
                    </div>
                    
                    <h3 className="mb-8 text-5xl tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-serif)" }}>
                      {project.title}
                    </h3>
                    
                    <div className="mb-10 space-y-6 border-l border-[#222] pl-6">
                      <div>
                        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">The Challenge</span>
                        <p className="text-sm text-white/60">{project.clientGoals[0]}</p>
                      </div>
                      <div>
                        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white">The Result</span>
                        <p className="text-lg font-bold text-white">{project.results[0]}</p>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/portfolio/${project.id}`}
                      className="group inline-flex items-center gap-4 border-b border-white/30 pb-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white"
                    >
                      Read Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <DeviceMockup type="desktop">
                      <img 
                        src={project.mockupDesktop} 
                        alt={project.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </DeviceMockup>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACT IV: LIVE PREVIEW SHOWCASE */}
      <section className="bg-[#000000] py-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-24">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-white/40 mb-6">
              Interactive Reality
            </h2>
            <h3 className="text-4xl sm:text-6xl tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Experience the <span className="italic text-white/60">Live Feel</span>.
            </h3>
          </div>
          
          <ScrollableMockup imageSrc="https://images.unsplash.com/photo-1542314831-c6a4d2748651?q=80&w=2500&auto=format&fit=crop" />
        </div>
      </section>

      {/* ACT V: ENGINEERING EXCELLENCE & PERFORMANCE */}
      <EngineeringExcellence />

      {/* ACT VI: IMPACT (STATIC COUNTERS) */}
      <section className="bg-[#000000] px-4 py-32 text-white sm:px-12 lg:px-24 border-t border-[#111]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-4 border-t border-[#222] pt-8">
              <span className="text-6xl font-bold tracking-tighter text-white sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
                <AnimatedCounter value={getDynamicProjectsCount()} suffix="+" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Projects Delivered</span>
            </div>
            <div className="flex flex-col gap-4 border-t border-[#222] pt-8">
              <span className="text-6xl font-bold tracking-tighter text-white sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
                <AnimatedCounter value={100} suffix="%" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Client Satisfaction</span>
            </div>
            <div className="flex flex-col gap-4 border-t border-[#222] pt-8">
              <span className="text-6xl font-bold tracking-tighter text-white sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
                <AnimatedCounter value={5} suffix="+" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Industries Served</span>
            </div>
            <div className="flex flex-col gap-4 border-t border-[#222] pt-8">
              <span className="text-6xl font-bold tracking-tighter text-white sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
                <AnimatedCounter value={24} suffix="/7" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Support Availability</span>
            </div>
          </div>
        </div>
      </section>

      {/* ACT VII: DUAL CTA */}
      <section className="bg-[#000000] py-48 border-t border-[#111]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-12 lg:px-24">
          <h2 className="mb-12 text-5xl sm:text-7xl lg:text-[7rem] tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
            Ready to <span className="italic text-white/60">dominate</span>?
          </h2>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-white px-12 py-5 text-sm font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-80"
            >
              Start a Project
            </Link>
            <Link 
              to="/portfolio"
              className="inline-flex items-center justify-center border-b border-white/30 pb-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
