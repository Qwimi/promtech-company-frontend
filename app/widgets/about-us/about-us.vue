<template>
  <section class="about-us">
    <div class="about-us__header">
      <h2 class="about-us__title">О нас</h2>
    </div>
    <div class="about-us__content">
      <article 
        v-for="(item, index) in items" 
        :key="index"
        class="about-us__item"
      >
        <PromtechIcon 
          :name="item.icon" 
          :icon-size="24" 
          class="about-us__icon"
        />
        <div class="about-us__text">
          <h3 class="about-us__item-title">{{ item.title }}</h3>
          <p class="about-us__item-description">{{ item.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PromtechIcon, type PromtechIconName } from '@/shared'

interface AboutUsItem {
  icon: PromtechIconName
  title: string
  description: string
}

const items: AboutUsItem[] = [
  {
    icon: 'about-the-company',
    title: 'О компании',
    description: 'Компания "ПромТехКомпани" является авторизованным дилером заводов «Группа ФИД» и «Амкодор-Инвар» (Республика Беларусь) и представляет на российском рынке подземные самоходные машины, предназначенные для решения производственных задач в условиях шахт и рудников.'
  },
  {
    icon: 'stages',
    title: 'Техника для всех этапов подземных работ',
    description: 'В перечень поставляемых машин входят как основные — погрузочно-доставочные машины и самоходные буровые установки, так и вспомогательные шахтные доставочные машины — автобусы, заправщики, монтажный транспорт и кровлеоборщики.'
  },
  {
    icon: 'partnership',
    title: 'Более 15 лет надежного партнерства',
    description: 'ООО "ПромТехКомпани" производит поставку и выполняет полный комплекс мероприятий по сервисному сопровождению подземных самоходных машин производства «Амкодор Инвар» (с 2015 года) и «Группа ФИД» (с 2022 года).'
  },
  {
    icon: 'additionally',
    title: 'Дополнительные услуги компании',
    description: 'С 2008 года производим запасные части для горного оборудования и обогатительных фабрик.'
  }
]
</script>

<style scoped lang="scss">
.about-us {
  &__header {
    margin-bottom: 44px;

    @media (min-width: $breakpoint-desktop) {
      margin-bottom: 32px;
    }
  }

  &__title {
    @include headline6;
    color: $text-main;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: $breakpoint-tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-desktop) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__item {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 24px;
    padding: 40px 20px 10px 0;
    border-top: 1px solid $divider;

    @media (min-width: $breakpoint-desktop) {
      padding-right: 40px;
    }
  }

  &__icon {
    flex-shrink: 0;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item-title {
    @include headline5;
    color: $text-main;
    
    @media (min-width: $breakpoint-tablet) {
      min-height: 40px;
    }

    @media (min-width: $breakpoint-desktop) {
      min-height: 60px;
    }
  }

  &__item-description {
    @include text3;
    color: $text-additional;
  }
}
</style>