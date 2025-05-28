// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue(), svelte(), etc.

export default defineConfig({
  plugins: [react()], // your plugins
  build: {
    outDir: 'build' // <--- Add or change this line
  }
})