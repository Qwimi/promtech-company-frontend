import { defineStore } from 'pinia'
import { isMockEnabled } from '@/shared/lib/mock'
import type { CartItem, DetailCard } from '@/shared/types'
import { cartItemsMock } from '@/shared/mocks/cart'

interface CartState {
  items: CartItem[]
  isLoading: boolean  
  error: string | null
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: isMockEnabled() ? cartItemsMock : [],
    isLoading: false,
    error: null,
  }),
  actions: {
    addToCart(detail: DetailCard, options: { quantity?: number } = {}) {
      const normalized: CartItem = {
        detailId: detail.id,
        detailName: detail.name,
        detailPhoto: detail.photo,
        quantity: options.quantity ?? 1,
      }

      const existing = this.items.find((item) => item.detailId === normalized.detailId)
      if (existing) {
        existing.quantity += normalized.quantity
        return
      }

      this.items.push({ ...normalized })
    },
    removeItem(itemId: string) {
      this.items = this.items.filter((item) => item.detailId !== itemId)
    },
    updateQuantity(itemId: string, quantity: number) {
      if (quantity <= 0) {
        this.removeItem(itemId)
        return
      }

      const item = this.items.find((cartItem) => cartItem.detailId === itemId)
      if (item) {
        item.quantity = quantity
      }
    },
    clearCart() {
      this.items = []
    },
    async sentCartToServer() {
      this.startLoading()
      try {
        if (isMockEnabled()) {
          await setTimeout(() => {
            return
          }, 1000)
        } else {
          // TODO: реализовать отправку корзины на сервер
        }
        this.clearCart()
      } catch (error) {
        this.handleError(error)
      } finally {
        this.finishLoading()
      }
    },
    startLoading() {
      this.isLoading = true
    },
    finishLoading() {
      this.isLoading = false
    },
    handleError(error: unknown) {
      this.error = error instanceof Error ? error.message : 'Неизвестная ошибка корзины'
    },
  },
})

