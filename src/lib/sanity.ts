import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'a2dich9o',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "category": category->title,
    excerpt,
    readTime,
    "imageUrl": mainImage.asset->url
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "category": category->title,
    excerpt,
    readTime,
    "imageUrl": mainImage.asset->url,
    body
  }
`;
