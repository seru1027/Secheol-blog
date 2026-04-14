"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Container from "./ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Now", href: "/now" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <Container>
          <div className={cn(
            "flex h-14 items-center justify-between px-8 rounded-2xl transition-all duration-700 relative overflow-hidden",
            scrolled 
              ? "bg-surface-low/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)]" 
              : "bg-transparent"
          )}>
            {/* Architectural 0.5px border wrapper for scrolled state */}
            {scrolled && (
              <div className="absolute inset-0 rounded-2xl border border-white/[0.05] pointer-events-none" />
            )}
            <div className="flex items-center gap-12 relative z-10">
              <Link href="/" className="group flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center text-white font-black text-sm shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-transform group-hover:scale-110">
                  S
                </div>
                <span className="text-lg font-black font-display text-white tracking-tighter transition-colors group-hover:text-primary">
                  SECHEOL
                </span>
              </Link>
              
              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-lg hover:bg-white/5",
                      pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-zinc-500 hover:text-zinc-200"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center gap-6 relative z-10">
              <Link
                href="/about"
                className="hidden md:flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.05] px-6 py-2 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all duration-500"
              >
                PROXIMITY
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl bg-white/5 text-white/70 hover:text-white transition-colors relative z-[100]"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[80] bg-surface/80 backdrop-blur-md md:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-[90] w-full sm:w-[400px] glass flex flex-col md:hidden border-l border-white/10"
            >
              <div className="flex h-24 items-center justify-between px-10">
                <span className="editorial-label text-primary">NAVIGATION</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-white/5 text-white/70"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <nav className="flex-1 px-8 py-12 flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center px-8 py-6 rounded-3xl text-3xl font-extrabold transition-all duration-500",
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "text-zinc-600 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span className="flex-1 uppercase tracking-tighter">{item.name}</span>
                      {pathname === item.href && (
                        <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(177,198,255,0.6)]" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <div className="p-10 bg-white/5">
                <p className="editorial-label mb-6">Social Presence</p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-xs font-bold hover:bg-primary transition-all duration-300">GH</div>
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-xs font-bold hover:bg-primary transition-all duration-300">LN</div>
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-xs font-bold hover:bg-primary transition-all duration-300">TW</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

