import Container from "@/components/ui/Container";
import { getPostData, getSortedPostsData } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Terminal, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const postData = await getPostData(slug);

    return (
      <article className="py-16 lg:py-24">
        <Container>
          <header className="flex flex-col">
            <time
              dateTime={postData.date}
              className="order-first flex items-center text-base text-muted-foreground"
            >
              <span className="h-4 w-0.5 rounded-full bg-border mr-3" />
              {formatDate(postData.date)}
            </time>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {postData.title}
            </h1>
            <div className="mt-4 flex items-center gap-2">
              <span className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border",
                postData.category === "Project" && "bg-blue-400/10 text-blue-400 border-blue-400/20",
                postData.category === "DevLog" && "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
                postData.category === "Insights" && "bg-purple-400/10 text-purple-400 border-purple-400/20",
                postData.category === "NeuralNet" && "bg-orange-400/10 text-orange-400 border-orange-400/20"
              )}>
                {postData.category}
              </span>
            </div>
          </header>

          {slug.startsWith("dummy-post-") && (
            <div className="mt-8 relative overflow-hidden rounded-2xl bg-zinc-950 border border-emerald-500/20 p-4 font-mono text-xs text-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-scan" style={{ animation: 'scan 2s linear infinite' }} />
              <div className="flex items-center gap-4 mb-2 opacity-50">
                <div className="flex items-center gap-1">
                  <Terminal className="h-3 w-3" />
                  <span>보안_세션_v1.0.4</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  <span>암호화: AES-256</span>
                </div>
                <div className="flex items-center gap-1 ml-auto">
                  <Activity className="h-3 w-3 animate-pulse" />
                  <span>업링크_안정</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p># 외부_접속_시도_중... [성공]</p>
                <p># 가상_데이터_노드_{slug.toUpperCase()}_복호화_중...</p>
                <p># 마크다운_콘텐츠_렌더링_중...</p>
              </div>
            </div>
          )}

          <div className="mt-12 prose prose-invert prose-emerald max-w-none prose-headings:font-display prose-h1:text-gradient">
            <MDXRemote source={postData.content} />
          </div>
        </Container>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
