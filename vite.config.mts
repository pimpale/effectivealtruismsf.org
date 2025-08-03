import path from 'path';
import { globSync } from 'glob';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        // wasm files
        {
          src: '../node_modules/onnxruntime-web/dist/*.wasm',
          dest: '.'
        },
        // Copy CNAME file to root
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
