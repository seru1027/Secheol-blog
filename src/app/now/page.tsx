"use client";

import Container from "@/components/ui/Container";
import BentoCard from "@/components/ui/BentoCard";
import { Clock } from "lucide-react";
import nowData from "@/content/now.json";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";

export default function NowPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative">

      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="editorial-label text-primary uppercase tracking-[0.3em] font-black text-[10px]">Real-time Status</span>
            <div className="h-px w-12 bg-primary/20" />
            <span className="text-zinc-600 font-mono text-[10px]">SYSTEM.NOW v2.0</span>
          </div>
          
          <h1 className="font-display text-6xl font-extrabold tracking-tight sm:text-8xl mb-12">
            Now<span className="text-primary">.</span>
          </h1>

          {/* Live Status Hero Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-[2rem] p-8 md:p-12 mb-20 border border-white/[0.03] relative overflow-hidden group"
          >
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Live Focus</span>
                </div>
                <p className="text-2xl md:text-3xl text-zinc-200 leading-tight font-display font-bold">
                  {nowData.status}
                </p>
              </div>
              
              <div className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-md">
                <Clock className="h-4 w-4 text-zinc-500" />
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-600 uppercase font-black tracking-widest leading-none mb-1">Last Update</span>
                  <span className="text-xs font-mono text-zinc-400 leading-none">{formatDate(nowData.updated)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {nowData.focus.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
            >
              <BentoCard className="p-10 h-full relative group">
                <div className="mb-10 pb-4 border-b border-white/[0.03]">
                  <h2 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                </div>
                
                <ul className="space-y-8">
                  {section.items.map((item, id) => (
                    <li key={id} className="flex gap-4 group/item">
                      <div className="w-1 h-1 rounded-full bg-primary/20 mt-2.5 transition-all group-hover/item:bg-primary group-hover/item:scale-150" />
                      <span className="text-zinc-400 font-medium leading-relaxed group-hover/item:text-zinc-200 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
