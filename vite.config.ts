import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'aliothUtils',
      fileName: 'alioth-utils',
    },
  },
})
