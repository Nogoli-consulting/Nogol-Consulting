import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '../types/post';

function mapEntryToPost(entry: CollectionEntry<'articulos'>): Post {
  return {
    slug: entry.id,
    title: entry.data.title,
    date: entry.data.date,
    category: entry.data.category,
    excerpt: entry.data.excerpt,
    readTime: entry.data.readTime,
    imageUrl: entry.data.image,
    body: entry.data.body,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const entries = await getCollection('articulos');

  return entries
    .map(mapEntryToPost)
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const entry = await getEntry('articulos', slug);
  if (!entry) {
    return null;
  }

  return mapEntryToPost(entry);
}
