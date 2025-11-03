import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/Back-Bay-Website/' : '/',
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
  },
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    // Only use tanstackStart in development
    ...(mode === 'production' ? [] : [tanstackStart()]),
    viteReact(),
  ],
}))

export default config
