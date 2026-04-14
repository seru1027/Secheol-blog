import Container from "@/components/ui/Container";
import { getSortedPostsData } from "@/lib/mdx";
import BlogClient from "./BlogClient";
import BlogHeader from "./BlogHeader";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="relative min-h-screen flex flex-col">
      <Container className="relative z-10 pt-32 pb-24">
        <BlogHeader />
        <BlogClient posts={allPostsData} />
      </Container>
    </div>
  );
}
