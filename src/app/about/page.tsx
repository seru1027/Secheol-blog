import Container from "@/components/ui/Container";
import BentoCard from "@/components/ui/BentoCard";
import { Mail, Zap, Code, Database, Rocket } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container>
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl mb-8">
            The <span className="text-gradient">Architect.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed font-medium">
            사용자에게 닿는 즐거움과 데이터의 견고한 흐름을 동시에 고민하는 
            내일의 풀스택 개발자, 박세철입니다.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Intro Card */}
          <BentoCard className="lg:col-span-2 p-10 justify-center">
            <h2 className="text-4xl font-bold font-display mb-8">Philosophies</h2>
            <div className="prose prose-invert prose-zinc max-w-none">
              <p className="text-lg text-zinc-300 leading-relaxed">
                저는 코드가 단순한 텍스트를 넘어 실제 문제를 해결하는 강력한 도구가 될 때 희열을 느낍니다. 
                현재는 웹의 본질을 탐구하며, 최상의 사용자 경험을 제공하기 위한 기술적 스펙트럼을 넓히고 있습니다.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed mt-6">
                프론트엔드에서 시작해 백엔드 인프라까지, 엔드 투 엔드로 사고하는 개발자를 지향합니다.
              </p>
            </div>
          </BentoCard>

          {/* Contact Card */}
          <BentoCard className="p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold font-display mb-8">Connect</h2>
              <div className="space-y-6">
                <a href="mailto:minimini010318@gmail.com" className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover/item:border-primary transition-colors">
                    <Mail className="h-5 w-5 text-zinc-400 group-hover/item:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email</p>
                    <p className="text-sm font-mono text-zinc-300">minimini010318@gmail.com</p>
                  </div>
                </a>
                <a href="https://github.com/seru1027" target="_blank" className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover/item:border-accent transition-colors">
                    <GithubIcon className="h-5 w-5 text-zinc-400 group-hover/item:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Github</p>
                    <p className="text-sm font-mono text-zinc-300">seru1027</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-xs text-zinc-500 font-medium">Available for world-class collaborations.</p>
            </div>
          </BentoCard>

          {/* Core Tech Stack */}
          <BentoCard className="p-10">
            <Zap className="h-8 w-8 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Performance</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Next.js 15, React, Server Components.
              고성능 렌더링 전략과 웹 표준을 지향합니다.
            </p>
          </BentoCard>

          <BentoCard className="p-10">
            <Code className="h-8 w-8 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Modern Web</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              TypeScript & Tailwind CSS.
              확장 가능하고 유지보수가 용이한 프론트엔드 아키텍처.
            </p>
          </BentoCard>

          <BentoCard className="p-10">
            <Database className="h-8 w-8 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Fullstack Path</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              엔드 투 엔드 개발 역량을 목표로 
              백엔드와 인프라의 확장을 연구합니다.
            </p>
          </BentoCard>
        </div>
      </Container>
    </div>
  );
}

