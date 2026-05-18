import { createClient } from '@sanity/client';

// TODO: reemplazar con datos reales de Sergio cuando esten disponibles
// export const sanityClient = createClient({
//   projectId: 'SANITY_PROJECT_ID',
//   dataset: 'production',
//   apiVersion: '2024-01-01',
//   useCdn: true,
// });

// GROQ queries listas para usar con Sanity:
// export const ALL_POSTS_QUERY = `
//   *[_type == "post"] | order(publishedAt desc) {
//     _id, title, slug, publishedAt, category, excerpt, readTime,
//     "imageUrl": mainImage.asset->url
//   }
// `
// export const POST_BY_SLUG_QUERY = `
//   *[_type == "post" && slug.current == $slug][0] {
//     _id, title, slug, publishedAt, category, excerpt, readTime,
//     "imageUrl": mainImage.asset->url,
//     body
//   }
// `

// Placeholder para evitar warning por import no usado hasta activar el cliente.
void createClient;
