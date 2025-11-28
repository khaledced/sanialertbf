import { build } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import viteConfig from './vite.config.ts';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

build({
  ...viteConfig.default,
  root: resolve(__dirname, '.'),
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
}).then(() => {
  console.log('Build completed successfully');
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});

