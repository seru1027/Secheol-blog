"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { formatDate } from "@/lib/utils";
import BentoCard from "@/components/ui/BentoCard";
import { motion } from "framer-motion";

interface HomeClientProps {
  featuredPost: any;
  recentPosts: any[];
}

export default function HomeClient({ featuredPost, recentPosts }: HomeClientProps) {
  return (
    <div className="min-h-screen">
      <Container className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-56 lg:pb-32">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/[0.03] border border-white/[0.05] editorial-label text-primary mb-10 overflow-hidden"
            >
              <Sparkles className="h-3 w-3" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">System Architect & Developer</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-7xl font-black tracking-tighter sm:text-9xl leading-[0.85] mb-12"
            >
              Code with <br />
              <span className="text-gradient">Zero Gravity.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-medium mb-12 border-l border-white/5 pl-8"
            >
              기술의 경계를 허물고 새로운 가능성을 설계합니다.
              <br />
              사용자 경험과 시스템 논리의 유기적 조화를 추구하는 여정.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-8"
            >
              <Link
                href="/blog"
                className="px-10 py-4 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-sm hover:scale-105 transition-transform"
              >
                Explore Insights
              </Link>
              <Link
                href="/about"
                className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors flex items-center gap-3 group"
              >
                The Journey
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section className="pb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="editorial-label text-primary uppercase tracking-[0.3em] font-black text-[10px]">Recent Notes</span>
                <div className="h-px w-12 bg-primary/20" />
              </div>
              <h2 className="font-display text-5xl font-black tracking-tighter mb-4">Architectural Logs</h2>
              <p className="text-zinc-500 font-medium">최근 구축한 시스템과 기술적 통찰을 기록합니다.</p>
            </div>
          </div>
          
          <div className="bento-grid">
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2 lg:row-span-2"
              >
                <BentoCard 
                  isFeatured 
                  href={`/blog/${featuredPost.slug}`}
                  className="p-10 md:p-14 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <time className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        {formatDate(featuredPost.date)}
                      </time>
                      <div className="h-1 w-1 rounded-full bg-primary/40" />
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Featured</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black font-display leading-[0.9] mb-8 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-lg text-zinc-400 line-clamp-3 mb-12 max-w-xl font-medium">
                      {featuredPost.description}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-primary">
                        Read System Specs
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </BentoCard>
              </motion.div>
            )}

            {recentPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <BentoCard 
                  href={`/blog/${post.slug}`}
                  className="p-8 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <time className="text-[9px] font-mono text-zinc-600">
                        {formatDate(post.date)}
                      </time>
                      <span className="text-[9px] font-black text-primary uppercase tracking-widest">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-white transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-zinc-500 line-clamp-2 md:line-clamp-3 mb-8">
                      {post.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/[0.03]">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-zinc-300 transition-colors">
                        View Log →
                      </span>
                    </div>
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
