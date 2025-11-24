<script setup lang="ts">
import { Button } from "~/shared";
import CategoryList from "~/widgets/main-page/our_production/category-list.vue";
import type {Category} from "~/shared/types";

const myCategories: Category[] = [
  { id: '1', name: 'Машины специального назначения', photo: '', video: '',},
  { id: '2', name: 'Подземные буровые установки', photo: '', video: '', },
  { id: '3', name: 'Доставка персонала', photo: '', video: '', },
  { id: '4', name: 'Доставка материала и оборудования', photo: '', video: '', },
  { id: '5', name: 'Погрузочно-доставочные машины (ПДМ)', photo: '', video: '', },
];
</script>

<template>
  <div class="container our-production">
    <div class="our-production__label">Наша продукция:</div>
    <div class="our-production__content">
      <div class="our-production__machinery">

        <div class="our-production__machinery-block">
          <div class="our-production__title">Каталог техники</div>
          <span class="our-production__subtitle">От буровых установок до обслуживающей техники — всё в одном месте</span>

          <div class="our-production__categories">
            <CategoryList :categories="myCategories" />
          </div>
        </div>

        <div class="our-production__machinery-view">
          <NuxtImg src="/images/roofing_contractor.png"/>
        </div>
      </div>

      <div class="our-production__details">
        <div class="our-production__details-image">
          <NuxtImg src="/images/gear.png"/>
        </div>
        <div class="our-production__details-block">
          <div class="our-production__details-description">
            <p>ООО «ПромТехКомпани» поставляет оригинальные запасные части для горного и промышленного оборудования.</p>
            <p>Мы обеспечиваем бесперебойную работу вашей техники — от подземных самоходных машин до буровых установок. Все позиции проходят контроль качества и доступны со склада или под заказ.</p>
          </div>
          <div class="our-production__details-warehouse">
            <p>Перейдите в каталог, чтобы подобрать нужные запчасти.</p>
            <Button label="Перейти на склад"/>
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
  padding-top: 60px;
  gap: 44px;

  &__label {
    @include headline6;
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

    @media (min-width: $breakpoint-tablet) {
      flex: 1;
      order: unset;
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
    p {
      margin: 0;
      @include text2;
    }

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__details-warehouse {
    p {
      margin: 0;
      @include text3;
      color: $text-additional;
    }

    display: flex;
    flex-direction: column;
    gap: 50px;

    button {
      @media (min-width: $breakpoint-tablet) {
        width: 50%;
      }

      @media (min-width: $breakpoint-desktop) {
        width: 30%;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>