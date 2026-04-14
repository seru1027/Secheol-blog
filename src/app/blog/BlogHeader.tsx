"use client";

import { motion } from "framer-motion";

export default function BlogHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mb-24"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="editorial-label text-primary uppercase tracking-[0.3em] font-black text-[10px]">Digital Schema</span>
        <div className="h-px w-12 bg-primary/20" />
        <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest leading-none">V-Archive</span>
      </div>
      
      <h1 className="font-display text-7xl font-black tracking-tighter sm:text-8xl leading-[0.9] mb-10">
        Digital <br />
        <span className="text-gradient">Archive.</span>
      </h1>
      
      <p className="text-xl text-zinc-400 leading-relaxed font-medium border-l border-white/5 pl-8">
        시스템 아키텍처부터 인터페이스 디자인까지, <br />
        기술적 고민과 통찰을 정제하여 설계도(Blueprint)로서 기록합니다.
      </p>
    </motion.div>
  );
}
