import { defineStore } from 'pinia'
import { isMockEnabled } from '@/shared/lib/mock'
import type { FeedbackForm } from '@/shared/types'
import { apiSentForm } from '~/shared/api'

interface ContactState {
    isSubmitting: boolean
    isSuccess: boolean
    error: string | null
}

export const useFeedbackStore = defineStore('contact', {
    state: (): ContactState => ({
        isSubmitting: false,
        isSuccess: false,
        error: null,
    }),
    actions: {
        async submitForm(formData: FeedbackForm) {
            this.isSubmitting = true
            this.isSuccess = false
            this.error = null

            try {
                if (isMockEnabled()) {
                    await setTimeout(() => {
                        return formData
                    }, 1000)
                } else {
                    await apiSentForm(formData)
                }

                this.isSuccess = true
            } catch (error) {
                this.error = error instanceof Error ? error.message : 'Не удалось отправить форму'
            } finally {
                this.isSubmitting = false
            }
        },
        resetStatus() {
            this.isSuccess = false;
            this.error = null;
            this.isSubmitting = false;
        },
    },
})
