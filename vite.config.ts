import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/new-portfolio/',
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
