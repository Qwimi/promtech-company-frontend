import { vCursor } from "@/shared/ui/cursor/directives/v-cursor"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('cursor', vCursor)
})