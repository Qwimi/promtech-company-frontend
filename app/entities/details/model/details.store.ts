import { defineStore } from 'pinia'
import { isMockEnabled } from '@/shared/lib/mock'
import type { DetailCard, DetailFull } from '@/shared/types'
import { detailsFullMock, detailsListMock } from '@/shared/mocks/details'

interface DetailsState {
  details: DetailCard[]
  currentDetail: DetailFull | null
  isLoading: boolean
  error: string | null
}

export const useDetailsStore = defineStore('details', {
  state: (): DetailsState => ({
    details: [],
    currentDetail: null,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchDetails() {
      const details = await (async () => {
        if (isMockEnabled()) {
          await setTimeout(() => {
            return detailsListMock
          }, 1000)
        } else {
          // TODO: реализовать отправку корзины на сервер
        }
      })()

      this.details = details ?? []
      return details
    },
    async fetchDetailById(detailId: string) {
      if (!detailId) {
        return
      }

      const detail = await (async () => {
        if (isMockEnabled()) {
          await setTimeout(() => {
            return detailsFullMock[detailId]
          }, 1000)
        } else {
          // TODO: реализовать реальный запрос на получение комплектующего по id
        }
      })()

      this.currentDetail = detail ?? null
      return detail
    },
    reset() {
      this.details = []
      this.currentDetail = null
      this.error = null
      this.isLoading = false
    },
  },
})

