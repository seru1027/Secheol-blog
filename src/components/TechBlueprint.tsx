"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Code, Database, Layout, Terminal, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./ui/Icons";

interface Node {
  id: string;
  label: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  connections: string[];
  description: string;
}

const techNodes: Node[] = [
  { 
    id: "c", 
    label: "C", 
    icon: <Terminal className="h-4 w-4" />, 
    x: 20, y: 50, 
    connections: ["python"],
    description: "시스템의 근간이자 메모리 관리와 저수준 설계에 대한 깊은 이해를 제공합니다."
  },
  { 
    id: "python", 
    label: "Python", 
    icon: <Database className="h-4 w-4" />, 
    x: 40, y: 30, 
    connections: [],
    description: "백엔드 로직과 복잡한 문제 해결을 위한 유연한 도구로 활용합니다."
  },
  { 
    id: "javascript", 
    label: "JavaScript", 
    icon: <Code className="h-4 w-4" />, 
    x: 50, y: 70, 
    connections: ["react"],
    description: "사용자와의 상호작용을 담당하는 웹 아키텍처의 핵심 엔진입니다."
  },
  { 
    id: "react", 
    label: "React", 
    icon: <Layout className="h-4 w-4" />, 
    x: 70, y: 40, 
    connections: ["nextjs"],
    description: "컴포넌트 기반 아키텍처를 통해 선언적이고 재사용 가능한 UI를 설계합니다."
  },
  { 
    id: "nextjs", 
    label: "Next.js", 
    icon: <Rocket className="h-4 w-4" />, 
    x: 90, y: 60, 
    connections: [],
    description: "프론트엔드의 성능적 한계를 넘어서는 현대적인 풀스택 개발 프레임워크입니다."
  },
];

export default function TechBlueprint() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getConnections = () => {
    const lines: { x1: number; y1: number; x2: number; y2: number; id: string; active: boolean }[] = [];
    techNodes.forEach((node) => {
      node.connections.forEach((connId) => {
        const target = techNodes.find((n) => n.id === connId);
        if (target) {
          lines.push({
            x1: node.x,
            y1: node.y,
            x2: target.x,
            y2: target.y,
            id: `${node.id}-${connId}`,
            active: activeNode === node.id || activeNode === connId,
          });
        }
      });
    });
    return lines;
  };

  return (
    <div className="relative w-full aspect-video md:aspect-[3/1] glass-card rounded-[2rem] overflow-hidden bg-white/[0.01] p-12 mb-32 border border-white/[0.03]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full" />
      </div>

      <svg className="absolute inset-0 w-full h-full z-10 p-12" viewBox="0 0 100 100" preserveAspectRatio="none">
        {getConnections().map((line) => (
          <React.Fragment key={line.id}>
            {/* Background Line */}
            <motion.path
              d={`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`}
              stroke={line.active ? "rgba(177, 198, 255, 0.4)" : "rgba(177, 198, 255, 0.1)"}
              strokeWidth="0.1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Flowing Data Animation on Active */}
            <AnimatePresence>
              {line.active && (
                <motion.path
                  d={`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`}
                  stroke="rgba(177, 198, 255, 0.8)"
                  strokeWidth="0.25"
                  strokeDasharray="2, 5"
                  fill="none"
                  initial={{ strokeDashoffset: 0, opacity: 0 }}
                  animate={{ strokeDashoffset: -20, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    strokeDashoffset: { repeat: Infinity, duration: 1, ease: "linear" },
                    opacity: { duration: 0.3 }
                  }}
                />
              )}
            </AnimatePresence>
          </React.Fragment>
        ))}
      </svg>

      <div className="relative z-20 w-full h-full p-12">
        {techNodes.map((node) => (
          <motion.div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 group",
              "transition-all duration-300"
            )}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 relative cursor-none",
              "bg-[#1c1b1b] border border-white/[0.05]",
              activeNode === node.id ? "border-primary/50 shadow-[0_0_40px_rgba(177,198,255,0.2)]" : ""
            )}>
              {/* Ultra-thin inner glass stroke (Stitch style) */}
              <div className="absolute inset-[0.5px] rounded-2xl border border-white/5 pointer-events-none" />
              
              <div className={cn(
                "transition-colors duration-500",
                activeNode === node.id ? "text-primary" : "text-zinc-600 group-hover:text-zinc-400"
              )}>
                {node.icon}
              </div>
            </div>
            
            <div className={cn(
              "absolute top-full mt-5 left-1/2 -translate-x-1/2 whitespace-nowrap",
              "editorial-label text-[10px] transition-all duration-500 tracking-[0.2em] font-bold uppercase",
              activeNode === node.id ? "opacity-100 text-primary translate-y-1" : "opacity-30 text-zinc-500"
            )}>
              {node.label}
            </div>

            {/* Description Tooltip - Top weighted */}
            <AnimatePresence>
              {activeNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  className="absolute bottom-full mb-10 left-1/2 -translate-x-1/2 w-56 p-5 glass-card rounded-2xl border-white/[0.05] z-[100] pointer-events-none"
                >
                  <p className="text-[11px] text-zinc-400 leading-relaxed text-center font-medium tracking-wide">
                    {node.description}
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[0.5px] h-10 bg-gradient-to-b from-primary/30 to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-10 left-10 z-30 flex flex-col gap-1.5 border-l border-primary/20 pl-4 py-1">
        <span className="editorial-label text-[9px] text-zinc-600 uppercase tracking-[0.3em] font-black">Blueprint</span>
        <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-[0.15em]">Ecosystem v2.0</span>
      </div>
    </div>
  );
}
