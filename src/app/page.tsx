import { getSortedPostsData } from "@/lib/mdx";
import HomeClient from "./HomeClient";

export default function Home() {
  const allPosts = getSortedPostsData();
  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(1, 4);

  return <HomeClient featuredPost={featuredPost} recentPosts={recentPosts} />;
}
