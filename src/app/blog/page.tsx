import Container from "@/components/ui/Container";
import { getSortedPostsData } from "@/lib/mdx";
import BlogClient from "./BlogClient";

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
        
        <BlogClient posts={allPostsData} />
      </Container>

      {/* Background Decorative elements */}
      <div className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}

