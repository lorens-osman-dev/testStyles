import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'], // Auto-import Vue APIs
      dts: 'src/auto-imports.d.ts', // Generate TypeScript declaration file
    }),
    Components({
      dirs: ['src/components'], // Auto-import components from this directory
      dts: 'src/components.d.ts', // Generate TypeScript declaration file
    }),
  ],
});