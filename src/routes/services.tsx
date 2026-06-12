import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Building,
  Briefcase,
  FileText,
  ShoppingCart,
  Zap,
  Search,
  RefreshCw,
  Smartphone,
  Wrench,
  ArrowRight,
} from "lucide-react";
import servicesHero from "../assets/services-hero.jpg";
import { Magnetic } from "../components/Magnetic";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Arco Sites" },
      { name: "description", content: "Explore our comprehensive web design and development services tailored to hotels, businesses, and startups." },
    ],
  }),
  component: ServicesPage,
});

const allServices = [
  {
    icon: Building,
    title: "Hotel & Hospitality Websites",
    description: "Booking-focused sites designed to drive reservations. Showcase your rooms, amenities, and experiences with stunning visuals that convert visitors into guests.",
  },
  {
    icon: Briefcase,
    title: "Business & Corporate Websites",
    description: "Professional sites that build credibility and communicate your value proposition clearly to potential clients and partners.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Scalable online stores designed to maximize sales. We integrate secure payment gateways, inventory management, and intuitive shopping experiences.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "High-converting pages focused on a single goal—whether that's lead generation, product launches, or event signups. Optimized for maximum ROI.",
  },
  {
    icon: Zap,
    title: "Site Speed Optimization",
    description: "Lightning-fast load times through code optimization, asset compression, caching strategies, and modern frontend frameworks like React and Vite.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "SEO-friendly structure from day one. Clean markup, semantic HTML, fast loading, and optimized metadata to help you rank higher on Google.",
  },
  {
    icon: RefreshCw,
    title: "Redesign & Modernization",
    description: "Refresh outdated sites with modern design standards, improved performance, and updated technology stacks.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Responsive Design",
    description: "Every website we build looks and performs flawlessly on phones, tablets, and desktops—no exceptions.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Post-delivery technical support to keep your site secure, up-to-date, and running smoothly. We handle updates so you can focus on your business.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-background">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={servicesHero}
            alt="Digital services illustration"
            className="h-full w-full object-cover opacity-20 mix-blend-screen"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl" 
            style={{ fontFamily: "var(--font-display)" }}
          >
            Digital <span className="text-primary">Excellence</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground"
          >
            Comprehensive web solutions tailored to your unique business needs. From design to deployment and beyond.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {allServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-10 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-[30px] transition-all group-hover:bg-primary/20" />
              
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <service.icon className="h-8 w-8" />
              </motion.div>
              
              <h3 className="relative z-10 mt-8 text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                {service.title}
              </h3>
              <p className="relative z-10 mt-4 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/40 bg-card/20 px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Not Sure What You Need?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            Every project is unique. Let's discuss your goals and find the right solution for your business.
          </p>
          <div className="mt-10">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-base font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(var(--primary),0.5)]"
              >
                Get a Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
