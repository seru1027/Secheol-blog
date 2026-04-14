"use client";

import Container from "@/components/ui/Container";
import BentoCard from "@/components/ui/BentoCard";
import { MoveRight, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import projectsData from "@/content/projects.json";
import Link from "next/link";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Container className="relative z-10 pt-32 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="editorial-label text-primary uppercase tracking-[0.3em] font-black text-[10px]">Project Lab</span>
            <div className="h-px w-12 bg-primary/20" />
            <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest leading-none">System.Builds</span>
          </div>
          
          <h1 className="font-display text-7xl font-black tracking-tighter sm:text-8xl leading-[0.9] mb-10">
            Selected <br />
            <span className="text-gradient">Projects.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed font-medium border-l border-white/5 pl-8">
            아이디어를 코드로 실체화한 <br />
            아키텍트의 시스템 구축 기록들입니다.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <BentoCard 
                isFeatured={project.isFeatured}
                href={project.link}
                className="p-8 h-full group/card relative overflow-hidden"
              >
                {/* 0.5px subtle inner stroke */}
                <div className="absolute inset-[0.5px] rounded-3xl border border-white/[0.03] pointer-events-none" />
                
                <div className="flex flex-col h-full relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-zinc-600 group-hover/card:text-primary group-hover/card:border-primary/20 transition-all duration-500">
                      <Layers className="h-6 w-6" />
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" className="p-2 rounded-lg hover:bg-white/10 text-zinc-600 hover:text-white transition-colors" title="View Source">
                        <GithubIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  <h2 className="text-2xl font-black font-display mb-4 tracking-tight group-hover/card:text-white transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-sm text-zinc-500 line-clamp-3 mb-10 flex-1 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-sm bg-white/[0.03] border border-white/[0.05] text-[9px] font-black uppercase tracking-widest text-zinc-600 group-hover/card:text-zinc-400 group-hover/card:border-white/10 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/[0.05] mt-auto">
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-primary transition-colors">
                      {project.link ? (
                        <>
                          View Repository
                          <MoveRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                        </>
                      ) : (
                        <div className="flex items-center gap-2">
                           <div className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-700 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-800"></span>
                            </div>
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">
                            Status: In Development
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
