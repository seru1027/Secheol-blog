export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

export interface Post extends PostMetadata {
  content: string;
}
