import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getSortedPostsData } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import BentoCard from "@/components/ui/BentoCard";

export default function Home() {
  const allPosts = getSortedPostsData();
  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(1, 5);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 editorial-label text-primary mb-8 animate-fade-in shadow-[0_0_20px_rgba(177,198,255,0.1)]">
              <Sparkles className="h-3 w-3" />
              <span>Fullstack Developer & System Architect</span>
            </div>
            <h1 className="font-display text-7xl font-extrabold tracking-tighter sm:text-9xl mb-8 text-glow">
              Code with <br />
              <span className="text-gradient leading-tight">Zero Gravity.</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-zinc-400 sm:text-2xl max-w-2xl mx-auto">
              기술의 경계를 허물고 새로운 가능성을 코딩합니다.
              <br className="hidden sm:block" />
              사용자 경험과 시스템 성능의 완벽한 조화를 추구하는 여정.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/blog"
                className="glow-button w-full sm:w-auto rounded-2xl bg-primary px-10 py-4 text-base font-bold text-white shadow-2xl transition-all duration-300"
              >
                Recent Insights
              </Link>
              <Link
                href="/about"
                className="text-base font-semibold leading-7 text-zinc-300 hover:text-white transition-all flex items-center gap-2 group"
              >
                Journey & Contact
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 group-hover:text-primary transition-all duration-300" />
              </Link>
            </div>
          </div>
        </Container>

        {/* Dynamic Background Elements */}
        <div className="absolute top-0 -z-10 h-full w-full overflow-hidden" aria-hidden="true">
          <div 
            className="absolute left-[20%] top-[10%] aspect-square w-[40rem] rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" 
          />
          <div 
            className="absolute right-[10%] bottom-[20%] aspect-square w-[30rem] rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" 
            style={{ animationDelay: "2s" }}
          />
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="pb-32">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div className="flex flex-col gap-2">
              <span className="editorial-label text-primary">Portfolio</span>
              <h2 className="font-display text-5xl font-extrabold tracking-tighter mb-2">Selected Works</h2>
              <p className="text-zinc-500 font-medium">최근 생각의 편린들을 모았습니다.</p>
            </div>
            <Link href="/blog" className="editorial-label text-primary hover:text-white transition-colors flex items-center gap-2 group">
              View Archive
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="bento-grid">
            {/* Featured Post */}
            {featuredPost && (
              <BentoCard 
                isFeatured 
                href={`/blog/${featuredPost.slug}`}
                className="p-8 md:p-12 justify-center"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-x-4 mb-6">
                    <time dateTime={featuredPost.date} className="editorial-label">
                      {formatDate(featuredPost.date)}
                    </time>
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-6 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-lg text-zinc-400 line-clamp-3 mb-8 max-w-xl">
                    {featuredPost.description}
                  </p>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group/btn"
                  >
                    Read Implementation
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </BentoCard>
            )}

            {/* Other Recent Posts */}
            {recentPosts.map((post) => (
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
                    <span className="editorial-label text-primary">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-7 mb-4 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-zinc-500 line-clamp-3 mb-6">
                    {post.description}
                  </p>
                  <div className="mt-auto">
                    <Link href={`/blog/${post.slug}`} className="text-xs font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More →
                    </Link>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
