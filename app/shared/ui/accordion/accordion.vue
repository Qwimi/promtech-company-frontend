<script setup lang="ts" generic="T">
defineProps<{
  items: T[];
}>();

const activeIndex = ref<number | null>(null);

const onMouseEnter = (index: number) => {
    activeIndex.value = index;
};

const onMouseLeave = () => {
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
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion__item"
      :class="{
        'accordion__item--active': activeIndex === index,
        'accordion__item--dimmed': activeIndex !== null && activeIndex !== index
      }"
      @mouseenter="onMouseEnter(index)"
      @mouseleave="onMouseLeave"
      @click="onClick(index)"
    >
      <div class="accordion__header">
        <slot
          name="header"
          :item="item"
          :index="index"
          :active="activeIndex === index"
        />
      </div>

      <transition
        name="accordion"
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
            <slot
              name="content"
              :item="item"
              :index="index"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.accordion__body {
  will-change: height;
  transition: height 0.4s ease;
  overflow: hidden;
}
</style>