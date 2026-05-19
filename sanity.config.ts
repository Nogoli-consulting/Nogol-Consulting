import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'nogoli-consulting',
  title: 'Nogolí Consulting',
  projectId: 'a2dich9o',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
