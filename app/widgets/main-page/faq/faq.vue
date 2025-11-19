<script setup lang="ts">
import {PromtechIcon} from '~/shared';

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

const activeIndex = ref<number | null>(null);

const DESKTOP_BREAKPOINT = 1200;

const isDesktop = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= DESKTOP_BREAKPOINT;
};

const onMouseEnter = (index: number) => {
  if (isDesktop()) {
    activeIndex.value = index;
  }
};

const onMouseLeave = () => {
  if (isDesktop()) {
    activeIndex.value = null;
  }
};

const onClick = (index: number) => {
  if (!isDesktop()) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
};

const startTransition = (el: Element) => {
  (el as HTMLElement).style.height = '0';
};

const enterTransition = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = element.scrollHeight + 'px';
};

const leaveTransition = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = element.scrollHeight + 'px';
  element.offsetHeight; 
  element.style.height = '0';
};

const endTransition = (el: Element) => {
  (el as HTMLElement).style.height = '';
};
</script>

<template>
  <div class="faq container">
    <p class="faq__label">Частые вопросы</p>
    <p class="faq__title">FAQ</p>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="faq__item"
      :class="{
        'faq__item--active': activeIndex === index,
        'faq__item--dimmed': activeIndex !== null && activeIndex !== index
      }"
      @mouseenter="onMouseEnter(index)"
      @mouseleave="onMouseLeave"
      @click="onClick(index)"
    >
      <div class="faq__header">
        <span class="faq__number">{{ item.number }}</span>
        <span class="faq__question">{{ item.question }}</span>
        <span class="faq__icon">
          <PromtechIcon name="arrow" :iconSize=30></PromtechIcon>
        </span>
      </div>

      <transition
        name="accordion"
        @before-enter="startTransition"
        @enter="enterTransition"
        @after-enter="endTransition"
        @before-leave="leaveTransition"
        @leave="leaveTransition"
      >
        <div v-show="activeIndex === index" class="faq__body">
          <div class="faq__content" @click.stop>
            <slot name="answer" :item="item">
              <div v-html="item.content"></div>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Настройки макета
$num-width-mob: 30px;
$gap-mob: 30px;

$num-width-desk: 48px;
$gap-desk: 174px;

// Отступы сверху от ответа до вопроса
$padding-top-mob: 25px;
$padding-top-tablet: 112px;
$padding-top-desk: 150px;

$transition-speed: 0.4s;

.faq {
  display: flex;
  flex-direction: column;

  padding: 30px 0px;
  @media (min-width: $breakpoint-tablet) {
    padding: 68px 0px;
  }

  &__label {
    margin: 0;
    @include headline6;
    padding-bottom: 32px;
  }

  &__title {
    margin: 0;
    @include headline3;
    padding-bottom: 32px;
  }
  
  &__item {
    border-top: 1px solid $divider;
    border-bottom: 1px solid $divider;
    color: $text-main;
    transition: color $transition-speed ease, border-color $transition-speed ease;
    cursor: pointer;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;

    & + & {
      margin-top: -1px;
    }

    &--active {
      z-index: 1;
      border-color: $divider;
      
      .faq__icon {
        transform: rotate(180deg);
      }
    }

      &--dimmed {
        color: $background-4;
        border-color: $background-4;
      }
    
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
  }

  &__body {
    will-change: height;
    transition: height $transition-speed ease;
  }

  &__content {
    @include text3;
    padding-bottom: 24px;
    
    padding-top: $padding-top-mob; 

    @media (min-width: $breakpoint-tablet) {
      padding-top: $padding-top-tablet; 
    }
    // Отступ слева = ширина номера + gap
    padding-left: calc(#{$num-width-mob} + #{$gap-mob});
    // Отступ справа
    padding-right: calc(24px + #{$gap-mob});

    @media (min-width: $breakpoint-desktop) {
      // Отступ сверху
      padding-top: $padding-top-desk;
      
      // Отступы слева и справа
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