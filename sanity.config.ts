import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ecommerce Business Solutions Blog',
  projectId: '1c7kh5si',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  basePath: '/studio',
})
