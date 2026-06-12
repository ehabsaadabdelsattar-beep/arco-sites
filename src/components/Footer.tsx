import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-black pt-32 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-24">
        
        {/* Massive Typographic Header */}
        <div className="mb-24 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <h2 
            className="text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-[7rem] leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let's build <br className="hidden md:block" />
            the <span className="italic text-primary">future.</span>
          </h2>
          <Magnetic>
            <Link
              to="/contact"
              className="group flex h-32 w-32 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110 sm:h-40 sm:w-40"
            >
              <span className="flex flex-col items-center font-bold uppercase tracking-widest">
                Get in <br /> Touch
                <ArrowUpRight className="mt-2 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Magnetic>
        </div>

        <div className="grid gap-12 border-t border-white/10 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <span className="text-2xl font-bold tracking-tighter text-white" style={{ fontFamily: "var(--font-display)" }}>
              ARCO<span className="text-primary">.</span>
            </span>
            <p className="text-sm text-white/50 max-w-xs">
              An award-winning digital studio engineering reality-bending web experiences for elite brands worldwide.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Navigation</h3>
            <ul className="space-y-4">
              {[
                { to: "/about", label: "Manifesto" },
                { to: "/services", label: "Arsenal" },
                { to: "/portfolio", label: "Showroom" },
                { to: "/pricing", label: "Pricing" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="group flex items-center text-sm font-medium text-white transition-colors hover:text-primary">
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item.label}</span>
                      <span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full text-primary">{item.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Socials</h3>
            <ul className="space-y-4">
              {["Twitter", "LinkedIn", "Instagram", "Awwwards"].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-sm font-medium text-white transition-colors hover:text-primary">
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
                      <span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full text-primary">{item}</span>
                    </span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Location</h3>
            <p className="text-sm text-white/60">
              San Francisco, CA<br />
              Remote Worldwide
            </p>
            <p className="mt-4 text-sm text-white/60">
              hello@arcosites.dev
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Arco Sites. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
