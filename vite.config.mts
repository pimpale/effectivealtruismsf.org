import path from 'path';
import { globSync } from 'glob';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: './CNAME',
          dest: '.'
        }
      ]
    }),
  ],
  build: {
    assetsInlineLimit: 0,
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: globSync("src/**/*.html")
    }
  }
})
