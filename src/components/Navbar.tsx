"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Container from "./ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when mobile menu is open
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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold font-display text-gradient tracking-tighter">
                SECHEOL
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute -bottom-[21px] left-0 right-0 h-px bg-primary"
                      />
                    )}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-md hover:bg-accent transition-colors relative z-50"
                aria-expanded={isOpen}
              >
                <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.path
                          key="close"
                          initial={{ opacity: 0, pathLength: 0 }}
                          animate={{ opacity: 1, pathLength: 1 }}
                          exit={{ opacity: 0, pathLength: 0 }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <motion.path
                          key="menu"
                          initial={{ opacity: 0, pathLength: 0 }}
                          animate={{ opacity: 1, pathLength: 1 }}
                          exit={{ opacity: 0, pathLength: 0 }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </AnimatePresence>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay - Moved outside header for better layout control */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-zinc-950/40 backdrop-blur-sm md:hidden"
              style={{ WebkitBackdropFilter: "blur(4px)" }}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[280px] bg-zinc-950 border-l border-white/10 shadow-2xl md:hidden flex flex-col"
              style={{ 
                boxShadow: "-10px 0 25px rgba(0,0,0,0.5)",
                WebkitBackdropFilter: "none" // Solid background for better contrast
              }}
            >
              <div className="flex h-16 items-center justify-between px-6 border-b border-white/5 bg-zinc-900/50">
                <span className="text-lg font-bold font-display text-gradient">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md hover:bg-white/5 transition-colors"
                >
                  <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex-1 px-4 py-8 bg-zinc-950">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200",
                          pathname === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-zinc-400 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <span className="flex-1">{item.name}</span>
                        {pathname === item.href && (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
              
              <div className="p-6 border-t border-white/5 bg-zinc-900/50">
                <Link 
                  href="/" 
                  className="text-xl font-bold font-display text-gradient tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  SECHEOL
                </Link>
                <p className="mt-2 text-xs text-zinc-500 font-medium">
                  © 2024 Personal Blog
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
