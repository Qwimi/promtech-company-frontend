import { defineStore } from 'pinia'
import { isMockEnabled } from '@/shared/lib/mock'
import type { Category, MachineCard, MachineFullCard } from '@/shared/types'
import { catalogCategoriesMock, catalogCategoryMachinesMock, catalogMachinesMock } from '@/shared/mocks/catalog'
import axios from "axios";

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
        let data: Category[] = [];

        if (isMockEnabled()) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          data = catalogCategoriesMock;
        } else {
          const response = await axios.get<Category[]>('/api/v1/Categories');
          data = response.data;
        }

        this.categories = data;
        return data;
      } catch (error) {
        this.handleError(error);
        return [];
      } finally {
        this.finishLoading();
      }
    },
    async fetchCategoryMachines(categoryId: string) {
      if (!categoryId) return [];

      this.startLoading();
      try {
        let data: MachineCard[] = [];

        if (isMockEnabled()) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          data = catalogCategoryMachinesMock[categoryId] ?? [];
        } else {
          const response = await axios.get<MachineCard[]>(`/api/v1/Categories/${categoryId}`);
          data = response.data;
        }

        this.machinesInCurrentCategory = data;
        return data;
      } catch (error) {
        this.handleError(error);
        return [];
      } finally {
        this.finishLoading();
      }
    },
    async fetchMachineById(machineId: string) {
      if (!machineId) return null;

      this.startLoading();
      try {
        let data: MachineFullCard | null = null;

        if (isMockEnabled()) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          data = catalogMachinesMock[machineId] ?? null;
        } else {
          const response = await axios.get<MachineFullCard>(`/api/v1/machines/${machineId}`);
          data = response.data;
        }

        this.currentMachine = data;
        return data;
      } catch (error) {
        this.handleError(error);
        return null;
      } finally {
        this.finishLoading();
      }
    },
    reset() {
      this.categories = [];
      this.machinesInCurrentCategory = [];
      this.error = null;
      this.isLoading = false;
      this.currentMachine = null;
    },
    startLoading() {
      this.isLoading = true;
      this.error = null;
    },
    finishLoading() {
      this.isLoading = false;
    },
    handleError(error: unknown) {
      this.error = error instanceof Error ? error.message : 'Неизвестная ошибка каталога';
    },
  },
})

