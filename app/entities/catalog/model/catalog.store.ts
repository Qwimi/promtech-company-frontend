import { defineStore } from 'pinia'
import { isMockEnabled } from '@/shared/lib/mock'
import type { Category, MachineCard, MachineFullCard } from '@/shared/types'
import { catalogCategoriesMock, catalogCategoryMachinesMock, catalogMachinesMock } from '@/shared/mocks/catalog'

interface CatalogState {
  categories: Category[]
  machinesInCurrentCategory: MachineCard[]
  currentMachine: MachineFullCard | null
  isLoading: boolean
  error: string | null
}

export const useCatalogStore = defineStore('catalog', {
    state: (): CatalogState => ({
        categories: [],
        machinesInCurrentCategory: [],
        currentMachine: null,
        isLoading: false,
        error: null,
    }),
    actions: {
        async getCategories() {
            this.startLoading()
            try {
                const categories = await (async () => {
                    if (isMockEnabled()) {
                        return await new Promise<Category[]>((resolve) => {
                            setTimeout(() => {
                                resolve(catalogCategoriesMock)
                            }, 1000)
                        })
                    }

                    // TODO: запрос на получение категорий
                    return []
                })()

                this.categories = categories
                return categories
            } catch (error) {
                this.handleError(error)
                return []
            } finally {
                this.finishLoading()
            }
        },
        async fetchCategoryMachines(categoryId: string) {
            if (!categoryId) {
                return []
            }

            this.startLoading()
            try {
                const machines = await (async () => {
                    if (isMockEnabled()) {
                        await setTimeout(() => {
                            return catalogCategoryMachinesMock[categoryId] ?? []
                        }, 1000)
                    }

                    // TODO: запрос на получение машин по категории categoryId
                    return []
                })()

                this.machinesInCurrentCategory = machines
                return machines
            } catch (error) {
                this.handleError(error)
                return []
            } finally {
                this.finishLoading()
            }
        },
        async fetchMachineById(machineId: string) {
            this.startLoading()
            try {
                const machine = await (async () => {
                    if (isMockEnabled()) {
                        await setTimeout(() => {
                            return catalogMachinesMock[machineId]
                        }, 1000) ?? null
                    }

                    // TODO: запрос на получение машины по id
                    return null
                })()

                this.currentMachine = machine
                return machine
            } catch (error) {
                this.handleError(error)
                return null
            } finally {
                this.finishLoading()
            }
        },
        reset() {
            this.categories = []
            this.machinesInCurrentCategory = []
            this.error = null
            this.isLoading = false
        },
        startLoading() {
            this.isLoading = true
            this.error = null
        },
        finishLoading() {
            this.isLoading = false
        },
        handleError(error: unknown) {
            this.error = error instanceof Error ? error.message : 'Неизвестная ошибка каталога'
        },
    },
})

