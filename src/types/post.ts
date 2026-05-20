export interface Post {
  slug: string;
  title: string;
  date: Date;
  category: string;
  excerpt: string;
  readTime: number;
  imageUrl?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[] | string;
}
