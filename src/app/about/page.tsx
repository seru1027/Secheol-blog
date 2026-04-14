"use client";

import Container from "@/components/ui/Container";
import BentoCard from "@/components/ui/BentoCard";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import TechBlueprint from "@/components/TechBlueprint";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative">

      <Container className="relative z-10">
        {/* Hero Section: Intentional Asymmetry */}
        <div className="max-w-5xl mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col lg:flex-row lg:items-end gap-8"
          >
            <div className="flex-1">
              <span className="editorial-label text-primary mb-4 block uppercase tracking-[0.4em] text-[10px] font-black">Professional Profile</span>
              <h1 className="font-display text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl leading-[0.8] mb-8">
                The <br />
                <span className="text-gradient">Architect.</span>
              </h1>
            </div>
            <div className="lg:max-w-md lg:mb-4 lg:pb-2 border-l border-primary/20 pl-8">
              <p className="text-xl text-zinc-400 leading-relaxed font-medium mb-4">
                Builder of Digital Ethers & Systemic Logic.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                사용자에게 닿는 즐거움과 데이터의 견고한 흐름을 동시에 고민하는 
                내일의 풀스택 개발자, 박세철입니다.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 mb-32">
          {/* Main Philosophies Card - Tonal Layering */}
          <BentoCard className="lg:col-span-8 p-10 md:p-14 relative group overflow-hidden">
            <div className="absolute inset-[0.5px] rounded-[2rem] border border-white/[0.03] pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h2 className="text-sm font-black text-zinc-500 uppercase tracking-[0.3em] mb-12">Philosophies</h2>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-display text-white">Systemic Depth</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  단순한 기능을 넘어 실제 문제를 해결하는 강력한 도구를 지향합니다. 
                  코드의 이면에서 흐르는 데이터의 논리적 완결성을 추구합니다.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-display text-white">Aesthetic Utility</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  웹의 본질인 사용자 경험을 위해 기술과 디자인의 접점을 정밀하게 설계합니다. 
                  아름다움은 곧 기능의 명확성에서 옵니다.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Connect Cards - Sophisticated Grid */}
          <div className="lg:col-span-4 grid gap-8">
            <a href="mailto:minimini010318@gmail.com" className="block">
              <BentoCard className="p-8 flex flex-col justify-between group hover:border-primary/30 transition-all duration-500 h-full">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-primary transition-colors" />
                </div>
                <div className="mt-8">
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Email</p>
                  <p className="text-sm font-mono text-zinc-300">minimini010318@gmail.com</p>
                </div>
              </BentoCard>
            </a>

            <a href="https://github.com/seru1027" target="_blank" rel="noopener noreferrer" className="block">
              <BentoCard className="p-8 flex flex-col justify-between group hover:border-accent/30 transition-all duration-500 h-full">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:text-accent transition-colors">
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-accent transition-colors" />
                </div>
                <div className="mt-8">
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Github</p>
                  <p className="text-sm font-mono text-zinc-300">seru1027</p>
                </div>
              </BentoCard>
            </a>
          </div>
        </div>

        {/* Tech Blueprint Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="editorial-label text-primary uppercase tracking-[0.3em] font-black text-[10px]">Technical Stack</span>
            <div className="h-px w-12 bg-primary/20" />
            <span className="text-zinc-600 font-mono text-[10px] uppercase">Architectural Ecosystem</span>
          </div>
          <p className="text-zinc-500 font-medium mb-12">실무에서 주력으로 활용하는 설계 도구들과 그 유기적 연결성입니다.</p>
        </div>
        
        <TechBlueprint />
      </Container>
    </div>
  );
}
