import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export default function Home() {
  const recentPosts = getSortedPostsData().slice(0, 3);

  return (
    <div className="relative overflow-hidden pt-24 pb-32 lg:pt-48 lg:pb-56">
      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display text-6xl font-extrabold tracking-tight sm:text-8xl mb-8">
            Building the <br />
            <span className="text-gradient leading-tight">Future of Web.</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground sm:text-2xl max-w-2xl mx-auto">
            사용자에게 닿는 즐거움과 견고한 로직을 설계하는 박세철의 개발 블로그입니다. 
            웹의 본질을 탐구하며 풀스택을 향해 나아가는 여정을 기록합니다.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-8">
            <Link
              href="/blog"
              className="glow-button rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300"
            >
              블로그 읽기
            </Link>
            <Link
              href="/about"
              className="text-base font-semibold leading-7 text-foreground hover:text-primary transition-all flex items-center gap-2 group"
            >
              더 알아보기 
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 group-hover:text-primary transition-all" />
            </Link>
          </div>
        </div>

        <section className="mt-32">
          <div className="flex items-center justify-between border-b pb-4 mb-8">
            <h2 className="font-display text-3xl font-bold">최근 포스트</h2>
            <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
              모두 보기
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {recentPosts.map((post) => (
               <div key={post.slug} className="group relative rounded-2xl border p-6 hover:shadow-lg transition-all">
                 <div className="flex items-center gap-x-4 text-xs">
                   <time dateTime={post.date} className="text-muted-foreground">
                     {formatDate(post.date)}
                   </time>
                   <span className="relative z-10 rounded-full bg-accent px-3 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-accent/80">
                     {post.category}
                   </span>
                 </div>
                 <div className="group relative">
                   <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                   </h3>
                   <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                     {post.description}
                   </p>
                 </div>
               </div>
             ))}
          </div>
        </section>
      </Container>

      {/* Decorative background elements */}
      <div className="absolute top-0 -z-10 h-full w-full overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
        <div className="absolute left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc]" />
        <div className="absolute left-[calc(50%+11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc]" />
      </div>
    </div>
  );
}
