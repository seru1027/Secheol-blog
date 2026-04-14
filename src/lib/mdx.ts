import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

import { Post } from "@/types/blog";

export function getSortedPostsData() {
  // Get file names under /posts
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.mdx?$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...(matterResult.data as { title: string; date: string; description: string; category: string }),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data as { title: string; date: string; description: string; category: string }),
  };
}
