import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-11-11',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  icon: {
    customCollections: [
      {
        prefix: 'promtech-icons',
        dir: './app/assets/icons',
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            `
              @use "@/assets/scss/_variables.scss" as *;
              @use "@/assets/scss/_typography.scss" as *;
            `
        }
      }
    }
  },
})