<script setup lang="ts">
import { PromtechIcon } from '~/shared';

export interface AccordionItem {
  number: string;
  question: string;
  content: string;
}

defineProps<{
  items: AccordionItem[];
}>();

const activeIndex = ref<number | null>(null);

const onPointerEnter = (e: PointerEvent, index: number) => {
    if (e.pointerType !== 'mouse') return;
    activeIndex.value = index;
};

const onPointerLeave = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    activeIndex.value = null;
};

const onClick = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
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
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion__item"
      :class="{
        'accordion__item--active': activeIndex === index,
        'accordion__item--dimmed': activeIndex !== null && activeIndex !== index
      }"
      @pointerenter="onPointerEnter($event, index)"
      @pointerleave="onPointerLeave"
      @click="onClick(index)"
    >
      <div class="accordion__header">
        <span class="accordion__number">{{ item.number }}</span>
        <span class="accordion__question">{{ item.question }}</span>
        <span
          class="accordion__icon"
          :class="{ 'accordion__icon--rotated': activeIndex === index }"
        >
          <PromtechIcon
            name="arrow"
            :icon-size="30"
          />
        </span>
      </div>

      <transition
        name="accordion-anim"
        @before-enter="startTransition"
        @enter="enterTransition"
        @after-enter="endTransition"
        @before-leave="leaveTransition"
        @leave="leaveTransition"
      >
        <div
          v-show="activeIndex === index"
          class="accordion__body"
        >
          <div
            class="accordion__content"
            @click.stop
          >
            <div v-html="item.content" />
          </div>
        </div>
      </transition>
    </div>
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

.accordion {
  display: flex;
  flex-direction: column;

  &__item {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    overflow: hidden;
    transition: color $transition-speed ease, border-color $transition-speed ease;

    & + & {
      margin-top: -1px;
    }

    &--active {
      z-index: 1;
    }
  }

  &__header {
    display: flex;
    align-items: flex-start;
    padding: 20px 0;
    gap: $gap-mob;
    position: relative;

    @media (min-width: $breakpoint-desktop) {
      gap: $gap-desk;
    }
  }

  &__number {
    font-variant-numeric: tabular-nums;
    flex: 0 0 $num-width-mob;

    @media (min-width: $breakpoint-desktop) {
      flex: 0 0 $num-width-desk;
    }
  }

  &__question {
    flex-grow: 1;
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

    &--rotated {
      transform: rotate(180deg);
    }
  }

  &__body {
    will-change: height;
    transition: height $transition-speed ease;
  }

  &__content {
    padding: $padding-top-mob calc(24px + #{$gap-mob}) 24px calc(#{$num-width-mob} + #{$gap-mob});

    @media (min-width: $breakpoint-tablet) {
      padding-top: $padding-top-tablet;
    }

    @media (min-width: $breakpoint-desktop) {
      padding-top: $padding-top-desk;
      padding-left: calc(#{$num-width-desk} + #{$gap-desk});
      padding-right: calc(24px + #{$gap-desk});
    }
  }
}
</style>