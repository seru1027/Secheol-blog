import Container from "@/components/ui/Container";
import { getSortedPostsData } from "@/lib/mdx";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            블로그
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            기술, 디자인, 그리도 일상에 대한 생각들을 나눕니다.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="grid gap-12 lg:grid-cols-1">
            {allPostsData.map((post) => (
              <article key={post.slug} className="group relative flex flex-col items-start">
                <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-accent/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative z-10">{post.title}</span>
                  </Link>
                </h2>
                <time
                  className="relative z-10 order-first mb-3 flex items-center text-sm text-muted-foreground"
                  dateTime={post.date}
                >
                  <span className="h-4 w-0.5 rounded-full bg-border mr-3" aria-hidden="true" />
                  {formatDate(post.date)}
                </time>
                <p className="relative z-10 mt-2 text-sm text-muted-foreground">
                  {post.description}
                </p>
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary"
                >
                  포스트 읽기
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="ml-1 h-4 w-4 stroke-current"
                  >
                    <path
                      d="M6.75 5.75 9.25 8l-2.5 2.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
