import { defineNuxtConfig } from 'nuxt/config'

const mockFlag = process.env.NUXT_PUBLIC__MOCK__
const isMockEnabled = mockFlag ? mockFlag === 'true' : true

export default defineNuxtConfig({
    compatibilityDate: '2025-11-11',
    devtools: { enabled: true },
    modules: ['@nuxt/icon', '@nuxt/image', '@pinia/nuxt'],
    runtimeConfig: {
        public: {
            __MOCK__: isMockEnabled,
        },
    },
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
              @use "@/assets/scss/_main.scss" as *;
              @use "@/assets/scss/_reset.scss" as *;
            `
                }
            }
        }
    },
})