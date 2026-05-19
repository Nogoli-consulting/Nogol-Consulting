import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '../types/post';
import { sanityClient, ALL_POSTS_QUERY, POST_BY_SLUG_QUERY } from './sanity';

// ── Local markdown fallback ───────────────────────────────────────────────────

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

async function getAllPostsLocal(): Promise<Post[]> {
  const entries = await getCollection('articulos');
  return entries
    .map(mapEntryToPost)
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

async function getPostBySlugLocal(slug: string): Promise<Post | null> {
  const entry = await getEntry('articulos', slug);
  if (!entry) return null;
  return mapEntryToPost(entry);
}

// ── Sanity helpers ────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityToPost(raw: any): Post {
  return {
    slug: raw.slug,
    title: raw.title,
    date: new Date(raw.publishedAt),
    category: raw.category ?? '',
    excerpt: raw.excerpt ?? '',
    readTime: raw.readTime ?? 0,
    imageUrl: raw.imageUrl,
    body: raw.body,
  };
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function getAllPosts(): Promise<Post[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results: any[] = await sanityClient.fetch(ALL_POSTS_QUERY);
    if (results && results.length > 0) {
      return results.map(mapSanityToPost);
    }
  } catch {
    // Sanity unavailable — fall through to local fallback
  }
  return getAllPostsLocal();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });
    if (result) {
      return mapSanityToPost(result);
    }
  } catch {
    // Sanity unavailable — fall through to local fallback
  }
  return getPostBySlugLocal(slug);
}
