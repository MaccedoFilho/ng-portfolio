import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["gsap", 
              "gsap/Flip",
              "gsap/ScrambleTextPlugin",
              "gsap/ScrollTrigger",
              "gsap/ScrollSmoother",
              "gsap/ScrollToPlugin",
              "gsap/SplitText",
              "gsap/CustomEase"]
  }
})
