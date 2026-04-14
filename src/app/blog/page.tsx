import Container from "@/components/ui/Container";
import { getSortedPostsData } from "@/lib/mdx";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import BentoCard from "@/components/ui/BentoCard";
import { MoveRight } from "lucide-react";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container>
        <div className="max-w-2xl mb-16">
          <span className="editorial-label text-primary mb-4 block">Archive</span>
          <h1 className="font-display text-5xl font-extrabold tracking-tighter sm:text-7xl mb-6 text-glow">
            Digital <span className="text-gradient">Archive.</span>
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed font-medium">
            시스템 아키텍처부터 인터페이스 디자인까지, <br />
            기술적 고민과 통찰을 정제하여 기록합니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPostsData.map((post) => (
            <BentoCard 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="p-8"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-x-4 mb-6">
                  <time dateTime={post.date} className="editorial-label">
                    {formatDate(post.date)}
                  </time>
                  <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary editorial-label">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-extrabold leading-tight mb-4 group-hover:text-primary transition-colors tracking-tight">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-sm text-zinc-500 line-clamp-3 mb-8 flex-1">
                  {post.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5">
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-zinc-400 group/link hover:text-white transition-colors"
                  >
                    Read Implementation
                    <MoveRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </Container>

      {/* Background Decorative elements */}
      <div className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}

