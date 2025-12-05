<template>
  <section class="company-history">
    <div class="container">
      <div class="company-history__header">
        <h6 class="company-history__subtitle">
          История компании:
        </h6>  
        <h3 class="company-history__title">
          Годы надежности
        </h3>
      </div>
    </div>

    <div class="container accordion-container">
      <Accordion
        :items="history"
        class="company-history__accordion"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Accordion } from '~/shared';
import { type AccordionItem } from '~/shared';

const history = ref<AccordionItem[]>([
    { 
        number: '2008',
        question: 'Начало пути',
        content: 'Сотрудничество с компанией Atlas Copco по поддержке горного оборудования'
    },
    {
        number: '2015',
        question: 'Стратегический выбор',
        content: 'Партнёрство с производителем подземной техники ООО «Амкодор-Инвар»'
    },
    { 
        number: '2016', 
        question: 'Первые результаты', 
        content: 'Поставка первых машин производства ООО «Амкодор-Инвар» с сервисным сопровождением в Россию' 
    },
    {
        number: '2022', 
        question: 'Новая технологическая линия', 
        content: 'Начало работы с производителем самоходных буровых установок «Группа ФИД»' 
    },
    { 
        number: '2023', 
        question: 'Выход на ключевые проекты', 
        content: 'Поставка первых машин для Заказчика — ООО «ЕвроХим-УКК»'
    },
    { 
        number: '2024', 
        question: 'Укрепление сервисной базы', 
        content: 'Старт ремонта крупных узлов подземных машин на собственной базе в городе Березники; переборка и восстановление мостов'
    }
]);

</script>

<style scoped lang="scss">
.accordion-container.container {
  @media (max-width: $breakpoint-desktop) {
    padding: 0;
  }
}

.company-history {
  margin-top: 68px;
  background-color: $background-2;
  color: $background-1;
  padding: 30px 0;

  @media (min-width: $breakpoint-desktop) {
    padding: 60px 0;
  }

  &__header {
    padding-bottom: 20px;

    @media (min-width: $breakpoint-tablet) {
      padding-top: 30px;
      padding-bottom: 60px;
    }

    @media (min-width: $breakpoint-desktop) {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }

  &__subtitle {
    @include headline6;

    padding-bottom: 44px;

    @media (min-width: $breakpoint-tablet) {
      padding-bottom: 60px;
    }
  }

  &__title {
    @include headline3;

  }

  &__accordion {
    :deep(.accordion__item) {
      padding: 20px 40px;
      border-color: $background-4;
      color: $background-1;
     
      &:hover {
        color: $text-main;

        .accordion__number,
        .accordion__question,
        .accordion__icon {
          color: $text-main;
        }
      }
    }
    
    :deep(.accordion__item--active) {
      background-color: $accent;
    }

    :deep(.accordion__header){
      gap: 20px;
      padding: 0;

      @media (min-width: $breakpoint-tablet) {
        gap: 20px;
      }

      @media (min-width: $breakpoint-desktop) {
        gap: 91px;
      }
    }

    :deep(.accordion__number) {
      @include headline3;

      color: $background-4;
    }

    :deep(.accordion__question) {
      @include headline5;

      color: $background-4;
    }

    :deep(.accordion__content) {
      @include text3;
    }

    :deep(.accordion__icon) {
      color: $accent;
    }
  }
}
</style>


