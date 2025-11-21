import { defineStore } from 'pinia'
import { isMockEnabled } from '@/shared/lib/mock'
import type { FeedbackForm } from '@/shared/types'
import axios from "axios";

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
      this.isSubmitting = true;
      this.isSuccess = false;
      this.error = null;

      try {
        if (isMockEnabled()) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
          const payload = new FormData();

          payload.append('senderName', formData.senderName);
          payload.append('organizationName', formData.organizationName);
          payload.append('email', formData.email);
          payload.append('phoneNumber', formData.phoneNumber);
          if (formData.comment) {
            payload.append('comment', formData.comment);
          }

          payload.append('organizationCard', formData.organizationCard);
          if (formData.specification) {
            payload.append('specification', formData.specification);
          }
          const response = await axios.post('/api/v1/files/callback', payload);
        }

        this.isSuccess = true;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Не удалось отправить форму';
      } finally {
        this.isSubmitting = false;
      }
    },
    resetStatus() {
      this.isSuccess = false;
      this.error = null;
      this.isSubmitting = false;
    },
  },
})

