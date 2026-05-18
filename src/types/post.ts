export interface Post {
  slug: string;
  title: string;
  date: Date;
  category: string;
  excerpt: string;
  readTime: number;
  imageUrl?: string;
  body?: string;
}
