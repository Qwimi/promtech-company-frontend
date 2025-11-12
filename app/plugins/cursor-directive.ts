import { vCursor } from "~/shared/ui/сursor/directives/v-cursor"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('cursor', vCursor)
})