<script setup lang="ts">
import {Accordion, PromtechIcon} from '~/shared';

export interface FaqItem {
  number: string;
  question: string;
  content: string;
}

const items = ref<FaqItem[]>([
    {
        number: '01',
        question: 'Какую технику вы поставляете?',
        content: `
        Мы специализируемся на поставке и сервисном обслуживании техники, используемой в условиях рудников.
        Представляемые нами самоходные буровые установки,
        погрузочно-доставочные и вспомогательные машины производятся в Белоруссии на заводах в Минске и Витебске.
        <a href="#">Доступ к каталогу техники.</a>
    `
    },
    {
        number: '02',
        question: 'Работаете по КТГ?',
        content: `
        Да, работаем. Условия необходимо уточнить у менеджера.
        Номер телефона и контактную информацию для связи можно найти в разделе <a href=#>«Контакты»</a>
    `
    },
    {
        number: '03',
        question: 'Вахтовым методом работаете?',
        content: `
        Да, возможна организация работ вахтовым методом.
        Условия необходимо уточнить у менеджера.
        Номер телефона и контактную информацию для связи можно найти в разделе <a href=#>«Контакты»</a>
    `
    },
    {
        number: '04',
        question: 'Если нет договора на сервисное обслуживание, разовые выезды выполняете?',
        content: `
        Да, разовые выезды возможны, но это лучше обсудить с менеджером.
    `
    },
    {
        number: '05',
        question: 'Как получить информацию по наличию запчастей?',
        content: `
        Самый быстрый вариант – через наш сайт, на котором организован <a href=#>раздел</a>, в котором размещена информация по наличию запчастей на складе.
        Отметьте нужные Вам позиции, укажите их количество, заполните форму и отправьте заявку.
        С Вами свяжется наш сотрудник и обсудит варианты поставки Вашего заказа.
    `
    },
    {
        number: '06',
        question: 'Возможна приёмка готовой техники на площадке производителя?',
        content: `
        Да, мы практикуем выезд с представителями
        Заказчиков на площадку завода-изготовителя техники для совместной проверки готовности машин.
    `
    },
]);
</script>

<template>
  <div class="faq container">
    <p class="faq__label section-label">
      Частые вопросы
    </p>
    <p class="faq__title">
      FAQ
    </p>

    <Accordion :items="items">
      <template #header="{ item, active }">
        <div class="faq__header">
          <span class="faq__number">{{ item.number }}</span>
          <span class="faq__question">{{ item.question }}</span>
          <span
            class="faq__icon"
            :class="{ 'faq__icon--active': active }"
          >
            <PromtechIcon
              name="arrow"
              :icon-size="30"
            />
          </span>
        </div>
      </template>

      <template #content="{ item }">
        <div class="faq__content-inner">
          <div v-html="item.content" />
        </div>
      </template>
    </Accordion>
  </div>
</template>

<style lang="scss" scoped>
$num-width-mob: 30px;
$gap-mob: 30px;
$num-width-desk: 48px;
$gap-desk: 174px;
$padding-top-mob: 25px;
$padding-top-tablet: 112px;
$padding-top-desk: 150px;
$transition-speed: 0.4s;

.faq {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: $breakpoint-tablet) {
    padding-top: 68px;
    padding-bottom: 68px;
  }

  &__label {
    margin: 0;
    padding-bottom: 32px;
  }

  &__title {
    margin: 0;

    @include headline3;

    padding-bottom: 32px;
  }

  :deep(.accordion__item) {
    border-top: 1px solid $divider;
    border-bottom: 1px solid $divider;
    color: $text-main;
    transition: color $transition-speed ease, border-color $transition-speed ease;
    cursor: pointer;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  :deep(.accordion__item + .accordion__item) {
    margin-top: -1px;
  }

  :deep(.accordion__item--active) {
    z-index: 1;
    border-color: $divider;
  }

  :deep(.accordion__item--dimmed) {
    color: $background-4;
    border-color: $background-4;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    padding: 20px 0;
    gap: $gap-mob;

    @media (min-width: $breakpoint-desktop) {
      gap: $gap-desk;
    }
  }

  &__number {
    font-variant-numeric: tabular-nums;

    @include headline5;

    flex: 0 0 $num-width-mob;

    @media (min-width: $breakpoint-desktop) {
      flex: 0 0 $num-width-desk;
    }
  }

  &__question {
    flex-grow: 1;

    @include headline5;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform $transition-speed ease;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-top: 2px;
    color: $accent;

    &--active {
      transform: rotate(180deg);
    }
  }

  // Внутренний контейнер контента для отступов
  &__content-inner {
    @include text3;

    padding: $padding-top-mob calc(24px + #{$gap-mob}) 24px calc(#{$num-width-mob} + #{$gap-mob});

    @media (min-width: $breakpoint-tablet) {
      padding-top: $padding-top-tablet;
    }

    @media (min-width: $breakpoint-desktop) {
      padding-top: $padding-top-desk;
      padding-left: calc(#{$num-width-desk} + #{$gap-desk});
      padding-right: calc(24px + #{$gap-desk});
    }

    :deep(a) {
      color: $text-link-1;
      text-decoration: none;
    }
  }
}
</style>