import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


optimizeDeps: {
  include: ["react-responsive-carousel"]
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
