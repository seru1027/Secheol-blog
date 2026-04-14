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
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
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
          scrolled ? "glass py-2" : "bg-transparent py-4"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="text-2xl font-bold font-display text-gradient tracking-tighter hover:scale-105 transition-transform">
                SECHEOL
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-bold uppercase tracking-widest transition-all hover:text-primary",
                      pathname === item.href
                        ? "text-white"
                        : "text-zinc-500"
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                      />
                    )}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl glass hover:border-primary/50 transition-colors relative z-[100]"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-zinc-400" />}
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
              className="fixed inset-0 z-[80] bg-zinc-950/80 backdrop-blur-md md:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[90] w-full sm:w-[400px] bg-zinc-950/50 backdrop-blur-2xl border-l border-white/10 flex flex-col md:hidden"
            >
              <div className="flex h-16 items-center justify-between px-8 border-b border-white/5">
                <span className="text-lg font-bold font-display text-gradient">NAVIGATION</span>
              </div>
              
              <nav className="flex-1 px-6 py-12 flex flex-col gap-4">
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
                        "flex items-center px-6 py-5 rounded-2xl text-2xl font-bold transition-all duration-300",
                        pathname === item.href
                          ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                          : "text-zinc-500 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span className="flex-1 uppercase tracking-tighter">{item.name}</span>
                      {pathname === item.href && (
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <div className="p-10 border-t border-white/5 bg-black/20">
                <p className="text-xs text-zinc-600 font-bold uppercase tracking-[0.2em] mb-4">Social Presence</p>
                <div className="flex gap-4">
                  {/* Placeholder for social links */}
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-xs">GH</div>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-xs">LN</div>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-xs">TW</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

