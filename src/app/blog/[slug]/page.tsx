import Container from "@/components/ui/Container";
import { getPostData, getSortedPostsData } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

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
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {postData.category}
              </span>
            </div>
          </header>
          <div className="mt-12 prose prose-invert prose-indigo max-w-none prose-headings:font-display prose-h1:text-gradient">
            <MDXRemote source={postData.content} />
          </div>
        </Container>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
