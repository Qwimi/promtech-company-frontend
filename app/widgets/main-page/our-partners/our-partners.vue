<template>
  <section class="container our-partners">
    <p class="our-partners__title section-label">
      С нами работают:
    </p>

    <!-- DESKTOP VERSION -->
    <div
      v-if="!isMobile"
      class="partners-desktop"
    >
      <div
        v-for="(pair, index) in initialPairs"
        :key="index"
        class="partners-col"
      >
        <div
          class="partners-col__track"
          :class="{ 'partners-col__track--flipped': isDesktopFlipped }"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="partners-col__item">
            <component
              :is="pair[0]"
              class="partners-col__logo"
            />
          </div>
          <div class="partners-col__item">
            <component
              :is="pair[1]"
              class="partners-col__logo"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE VERSION -->
    <div
      v-else
      class="partners-mobile"
    >
      <div
        v-for="slotIndex in [0, 1, 2, 3, 4]"
        :key="slotIndex"
        class="partners-mobile__slot"
      >
        <!-- ЛЕВЫЙ БАРАБАН (Едет ВВЕРХ) -->
        <div
          class="partners-mobile__reel partners-mobile__reel--up"
          :class="{ 'is-animating': isMobileAnimating }"
          :style="{ transitionDelay: `${slotIndex * 150}ms` }"
        >
          <div class="partners-mobile__cell">
            <component
              :is="getLogo(leftIndices[slotIndex], 0)"
              class="partners-mobile__logo"
            />
          </div>
          <div class="partners-mobile__cell">
            <component
              :is="getLogo(getNextLeftIndex(slotIndex), 0)"
              class="partners-mobile__logo"
            />
          </div>
        </div>

        <!-- ПРАВЫЙ БАРАБАН (Едет ВНИЗ) -->
        <div
          class="partners-mobile__reel partners-mobile__reel--down"
          :class="{ 'is-animating': isMobileAnimating }"
          :style="{ transitionDelay: `${slotIndex * 150 + COLUMN_DELAY}ms` }"
        >
          <div class="partners-mobile__cell">
            <component
              :is="getLogo(getNextRightIndex(slotIndex), 1)"
              class="partners-mobile__logo"
            />
          </div>
          <div class="partners-mobile__cell">
            <component
              :is="getLogo(rightIndices[slotIndex], 1)"
              class="partners-mobile__logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
    AkronLogo, HouseCogLogo, SpmLogo, TriangleOLogo, AbazinRudnikLogo,
    EurohimLogo, AlrosaLogo, UralhimLogo, AkronPao, Ummc
} from '~/shared/ui'

// --- CONSTANTS ---
const SWAP_INTERVAL = 3000;
const ANIMATION_DURATION = 800;
const TABLET_BREAKPOINT = 900;
const COLUMN_DELAY = 300;

// --- DATA ---
const initialPairs = [
    [AkronLogo, EurohimLogo],
    [HouseCogLogo, AlrosaLogo],
    [SpmLogo, UralhimLogo],
    [TriangleOLogo, AkronPao],
    [AbazinRudnikLogo, Ummc]
];

// --- STATE ---
const isMobile = ref(false);
const isDesktopFlipped = ref(false);

const leftIndices = ref([0, 1, 2, 3, 4]);
const rightIndices = ref([0, 1, 2, 3, 4]);

const isMobileAnimating = ref(false);
let intervalId: ReturnType<typeof setInterval> | null = null;

// --- HELPERS ---
const getLogo = (pairIndex: number | undefined, colIndex: number) => {
    const safeIndex = pairIndex ?? 0;
    const pair = initialPairs[safeIndex] || [];
    return pair[colIndex];
};

const getNextLeftIndex = (slotIndex: number): number => {
    const sourceIndex = (slotIndex === 4) ? 0 : slotIndex + 1;
    return leftIndices.value[sourceIndex] ?? 0;
};

const getNextRightIndex = (slotIndex: number): number => {
    const sourceIndex = (slotIndex === 0) ? 4 : slotIndex - 1;
    return rightIndices.value[sourceIndex] ?? 0;
};

// --- LOGIC ---
const handleTick = () => {
    if (isMobile.value) {
        animateMobile();
    } else {
        isDesktopFlipped.value = !isDesktopFlipped.value;
    }
};

const animateMobile = () => {
    if (isMobileAnimating.value) return;

    isMobileAnimating.value = true;

    const totalDelay = ANIMATION_DURATION + (4 * 150) + COLUMN_DELAY;

    setTimeout(() => {
        isMobileAnimating.value = false;

        // Left: сдвиг ВВЕРХ
        const leftFirst = leftIndices.value.shift();
        if (leftFirst !== undefined) leftIndices.value.push(leftFirst);

        // Right: сдвиг ВНИЗ
        const rightLast = rightIndices.value.pop();
        if (rightLast !== undefined) rightIndices.value.unshift(rightLast);

    }, totalDelay);
};

const checkBreakpoint = () => {
    if (typeof window !== 'undefined') {
        const wasMobile = isMobile.value;
        isMobile.value = window.innerWidth < TABLET_BREAKPOINT;
        if (wasMobile !== isMobile.value) {
            isDesktopFlipped.value = false;
            leftIndices.value = [0, 1, 2, 3, 4];
            rightIndices.value = [0, 1, 2, 3, 4];
            isMobileAnimating.value = false;
        }
    }
};

onMounted(() => {
    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    intervalId = setInterval(handleTick, SWAP_INTERVAL);
});

onUnmounted(() => {
    if (typeof window !== 'undefined') window.removeEventListener('resize', checkBreakpoint);
    if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.our-partners {
  padding: 30px 40px;

  &__title {
    margin: 0 0 20px;
    text-align: center;

    @media (min-width: $breakpoint-tablet) {
      text-align: left;
      margin: 0 0 44px;
    }
  }
}

// --- DESKTOP STYLES ---
.partners-desktop {
  display: flex;
  width: 100%;
  gap: 0;

  .partners-col {
    flex: 1;
    height: 120px;
    overflow: hidden;
    position: relative;
    border-bottom: none;

    &:not(:last-child) {
      border-right: 1px solid rgb(0 0 0 / 5%);
    }

    @media (min-width: $breakpoint-desktop) {
      height: 140px;
    }

    &__track {
      width: 100%;
      height: 200%;
      display: flex;
      flex-direction: column;
      transform: translateY(0);
      transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);

      &--flipped {
        transform: translateY(-50%);
      }
    }

    &__item {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }

    &__logo {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      opacity: 0.6;
      transition: opacity 0.3s;
      &:hover { opacity: 1; }
    }
  }
}

// --- MOBILE STYLES ---
.partners-mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid rgb(0 0 0 / 5%);

  &__slot {
    width: 100%;
    height: 80px;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid rgb(0 0 0 / 5%);
    display: flex;
  }

  &__reel {
    width: 50%;
    height: 200%;
    display: flex;
    flex-direction: column;
    transition: none;

    &--up {
      transform: translateY(0);

      &.is-animating {
        transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
        transform: translateY(-50%);
      }
    }

    &--down {
      transform: translateY(-50%);

      &.is-animating {
        transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
        transform: translateY(0);
      }
    }
  }

  &__cell {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  &__logo {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    opacity: 0.8;
  }
}
</style>