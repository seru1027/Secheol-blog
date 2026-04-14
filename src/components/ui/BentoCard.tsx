"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  isFeatured?: boolean;
}

export default function BentoCard({ children, className, isFeatured }: BentoCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 50, stiffness: 400 });
  const mouseYSpring = useSpring(y, { damping: 50, stiffness: 400 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  // For the background glow position
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
    
    // Set custom properties for local mouse tracking
    e.currentTarget.style.setProperty("--mouse-x", `${mouseX}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "glass-card group flex flex-col relative will-change-transform",
        isFeatured ? "bento-item-featured" : "",
        className
      )}
    >
      <div 
        style={{ transform: "translateZ(40px)" }} 
        className="flex flex-col h-full relative z-10 pointer-events-none"
      >
        {children}
      </div>
      
      {/* Dynamic Glow Effect */}
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(177, 198, 255, 0.12), transparent 80%)`
        }}
      />
      
      {/* Tonal layer shift on hover handled by @utility glass-card */}
    </motion.div>
  );
}
