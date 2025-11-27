<script setup lang="ts">
import { Button } from '~/shared';
import CategoryList from '~/widgets/main-page/our_production/category-list.vue';
import type {Category} from '~/shared/types';

const props = defineProps<{
  categories: Category[];
}>();

const selectedCategoryId = ref<number | string | null>(props.categories?.[0]?.id || null);
const isHovered = ref<boolean>(false);

const activeCategory = computed(() => {
    return props.categories.find(c => c.id === selectedCategoryId.value);
});

const currentImage = computed(() => activeCategory.value?.photo ?? '/images/catalog-image-1.png');

const currentVideo = computed(() => {
    const videoUrl = activeCategory.value?.video;
    return (videoUrl && videoUrl.trim() !== '') ? videoUrl : undefined;
});

const handlePointerEnter = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    isHovered.value = true;
};

const handlePointerLeave = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    isHovered.value = false;
};

</script>

<template>
  <div class="container our-production">
    <div class="section-label">
      Наша продукция:
    </div>
    <div class="our-production__content">
      <div class="our-production__machinery">
        <div class="our-production__machinery-block">
          <div class="our-production__title">
            Каталог техники
          </div>
          <span class="our-production__subtitle">От буровых установок до обслуживающей техники — всё в одном месте</span>

          <div class="our-production__categories">
            <CategoryList
              v-model="selectedCategoryId"
              :categories="categories"
            />
          </div>
        </div>

        <div
          class="our-production__machinery-view"
          @pointerenter="handlePointerEnter"
          @pointerleave="handlePointerLeave"
        >
          <NuxtImg
            :src="currentImage"
            class="our-production__image"
          />

          <video
            v-if="isHovered && currentVideo"
            :src="currentVideo"
            autoplay
            muted
            loop
            class="our-production__video"
          />
        </div>
      </div>
      <div class="our-production__details">
        <div class="our-production__details-image">
          <NuxtImg
            src="/images/gear.png"
            class="our-production__image"
          />
        </div>
        <div class="our-production__details-block">
          <div class="our-production__details-description">
            <p>ООО «ПромТехКомпани» поставляет оригинальные запасные части для горного и промышленного оборудования.</p>
            <p>Мы обеспечиваем бесперебойную работу вашей техники — от подземных самоходных машин до буровых установок. Все позиции проходят контроль качества и доступны со склада или под заказ.</p>
          </div>
          <div class="our-production__details-warehouse">
            <p>Перейдите в каталог, чтобы подобрать нужные запчасти.</p>
            <Button
              class="our-production__warehouse-button"
              label="Перейти на склад"
              to="/components-catalog"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.our-production {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 44px;
  padding-top: 60px;
  padding-bottom: 30px;

  @media (min-width: $breakpoint-desktop) {
    padding-bottom: 60px;
  }

  &__title {
    @include headline3;

    order: 1;

    @media (min-width: $breakpoint-tablet) {
      order: unset;
    }
  }

  &__subtitle {
    @include text3;

    color: $text-additional;
    order: 2;

    @media (min-width: $breakpoint-tablet) {
      order: unset;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: $breakpoint-tablet) {
      gap: 28px;
    }

    @media (min-width: $breakpoint-desktop) {
      gap: 60px;
    }
  }

  &__categories {
    order: 4;

    @media (min-width: $breakpoint-tablet) {
      order: unset;
      margin-top: 0;
    }
  }

  &__machinery {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
    }
  }

  &__machinery-block {
    display: contents;

    @media (min-width: $breakpoint-tablet) {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 20px;
    }
  }

  &__machinery-view {
    order: 3;
    height: 295px;
    position: relative;
    overflow: hidden;

    @media (min-width: $breakpoint-tablet) {
      flex: 1;
      order: unset;
      height: auto;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
    }
  }

  &__details-image {
    @media (min-width: $breakpoint-tablet) {
      flex: 1;
    }

    img {
      max-height: 295px;

      @media (min-width: $breakpoint-tablet) {
        max-height: 363px;
      }

      @media (min-width: $breakpoint-desktop) {
        max-height: 490px;
      }
    }
  }

  &__details-block {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: $breakpoint-tablet) {
      flex: 1;
      gap: 50px;
    }
  }

  &__details-description {
    @include text2;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__details-warehouse {
    @include text3;

    color: $text-additional;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  &__warehouse-button {
    @media (min-width: $breakpoint-tablet) {
      width: 50%;
    }

    @media (min-width: $breakpoint-desktop) {
      width: 30%;
    }
  }

  &__image,
  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__video {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>