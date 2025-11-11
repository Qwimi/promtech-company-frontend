import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
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
    }
})