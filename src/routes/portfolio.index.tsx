import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";
import { TiltCard } from "../components/TiltCard";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioIndexPage,
});

const filters = ["All", "Hospitality", "Corporate", "E-Commerce", "Digital Platforms"];

const getCategoryGroup = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes("hotel") || cat.includes("resort") || cat.includes("restaurant") || cat.includes("travel")) return "Hospitality";
  if (cat.includes("corporate") || cat.includes("construction") || cat.includes("medical") || cat.includes("real estate") || cat.includes("law")) return "Corporate";
  if (cat.includes("e-commerce") || cat.includes("furniture") || cat.includes("gym")) return "E-Commerce";
  return "Digital Platforms";
};

function PortfolioIndexPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => 
    activeFilter === "All" ? true : getCategoryGroup(project.category) === activeFilter
  );

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="relative px-4 sm:px-12 lg:px-24 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-6xl font-bold tracking-tighter text-white sm:text-8xl lg:text-[8rem]" style={{ fontFamily: "var(--font-display)" }}>
            The <span className="italic text-primary">Showroom</span>
          </h1>
          <p className="mt-8 text-xl text-white/50 max-w-2xl mx-auto">
            Explore 15 distinct, award-winning case studies representing our finest engineering and design achievements across global industries.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-12 lg:px-24 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-white text-black"
                  : "border border-white/10 bg-black text-white/50 hover:border-white/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-12 lg:px-24">
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className={`relative ${i % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <Link to={`/portfolio/${project.id}`}>
                  <TiltCard className="group h-[500px] w-full overflow-hidden rounded-[2rem] border border-white/5 bg-[#050505]">
                    <img 
                      src={project.heroImage} 
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                    
                    <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12">
                      <div className="flex justify-between items-start">
                        <span className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                          {project.category}
                        </span>
                        <div className="h-12 w-12 rounded-full border border-white/20 bg-black/40 flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110">
                           <span className="text-white text-xl">↗</span>
                        </div>
                      </div>
                      
                      <div className="translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                        <h2 className="text-4xl font-bold text-white sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                          {project.title}
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          {project.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="text-xs font-medium text-primary uppercase tracking-wider">{tech}</span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">+{project.technologies.length - 3} MORE</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
