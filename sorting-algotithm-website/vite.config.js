import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'main.js',
          dest: ''
        },
        {
          src: 'plotter.js',
          dest: ''
        }
      ]
    })
  ]
});