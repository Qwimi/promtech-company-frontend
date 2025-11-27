<script setup lang="ts">
import {Accordion} from '~/shared';
import { type AccordionItem } from '~/shared';

const items = ref<AccordionItem[]>([
    {
        number: '01',
        question: 'Какую технику вы поставляете?',
        content: `
        Мы специализируемся на поставке и сервисном обслуживании техники, используемой в условиях рудников.
        Представляемые нами самоходные буровые установки,
        погрузочно-доставочные и вспомогательные машины производятся в Белоруссии на заводах в Минске и Витебске.
        <a href='/technique-catalog'>Доступ к каталогу техники.</a>
    `
    },
    {
        number: '02',
        question: 'Работаете по КТГ?',
        content: `
        Да, работаем. Условия необходимо уточнить у менеджера.
        Номер телефона и контактную информацию для связи можно найти в разделе <a href='/contacts'>«Контакты»</a>
    `
    },
    {
        number: '03',
        question: 'Вахтовым методом работаете?',
        content: `
        Да, возможна организация работ вахтовым методом.
        Условия необходимо уточнить у менеджера.
        Номер телефона и контактную информацию для связи можно найти в разделе <a href='/contacts'>«Контакты»</a>
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
        Самый быстрый вариант – через наш сайт, на котором организован <a href='/components-catalog'>раздел</a>, в котором размещена информация по наличию запчастей на складе.
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
    <p class="faq__label">
      Частые вопросы
    </p>
    <p class="faq__title">
      FAQ
    </p>

    <Accordion
      :items="items"
      class="faq__accordion"
    />
  </div>
</template>

<style lang="scss" scoped>
.faq {
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: $breakpoint-tablet) {
    padding-top: 68px;
    padding-bottom: 68px;
  }

  &__label {
    @include headline6;

    padding-bottom: 32px;
  }

  &__title {
    @include headline3;

    padding-bottom: 32px;
  }

  &__accordion {
    :deep(.accordion__item) {
      border-color: $divider;
      color: $text-main;
    }

    :deep(.accordion__number) {
      @include headline5;
    }

    :deep(.accordion__question) {
      @include headline5;
    }

    :deep(.accordion__icon) {
      color: $accent;
    }

    :deep(.accordion__content) {
      @include text3;

      a {
        color: $text-link-1;
        text-decoration: none;
      }
    }

    :deep(.accordion__item--active) {
      border-color: $divider;
    }

    :deep(.accordion__item--dimmed) {
      color: $background-4;
      border-color: $background-4;
    }
  }
}
</style>