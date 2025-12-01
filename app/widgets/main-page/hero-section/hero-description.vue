<template>
  <div
    class="hero-description"
    :style="backgroundStyles"
  >
    <div class="hero-description__content container">
      <div class="hero-description__text-block">
        <p class="hero-description__text">
          Горное оборудование <br />и сервис, которым доверяют профессионалы
        </p>

        <div class="hero-description__subtext-wrapper">
          <p class="hero-description__subtext">
            Промышленная техника. Сервис. Запчасти. Всё под контролем.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const $img = useImage();

const backgroundStyles = computed(() => {
    const imageUrl = $img('/images/mineral.png', {
        format: 'webp',
        quality: 80,
    })

    return {
        '--bg-image': `url('${imageUrl}')`
    }
})
</script>

<style scoped lang="scss">
.hero-description {
  z-index: 0;
  position: relative;
  width: 100%;
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.5;
    overflow: hidden;
    pointer-events: none;
    background-image: var(--bg-image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.4, 2);

  }

  

  &__content {
    display: flex;
    flex-direction: column;
    gap: 36px;
    align-items: flex-start;
    justify-content: flex-end;
  }

  &__text-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
  }

  &__text {
    @include text1;

    color: $text-main;

    @media (min-width: $breakpoint-tablet) {
      width: 558px;
      text-indent: 17%;
    }

    @media (min-width: $breakpoint-desktop) {
      width: 860px;
    }
  }

  &__subtext-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  &__subtext {
    @include text3;

    color: $text-additional;
    text-align: right;
    width: 233px;

    @media (min-width: $breakpoint-tablet) {
      width: 300px;
    }

    @media (min-width: $breakpoint-desktop) {
      width: 318px;
    }
  }
}
</style>
