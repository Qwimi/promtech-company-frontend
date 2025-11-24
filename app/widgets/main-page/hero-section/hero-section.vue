<template>
  <section class="hero">
    <div class="hero__media">
      <video
        ref="heroVideo"
        src="/videos/intro-reverse.mp4"
        autoplay
        muted
        playsinline
        class="hero__video"
        @ended="onVideoEnded"
      />
      <NuxtImg
        src="/images/hero-poster.png"
        alt="Hero background"
        class="hero__poster"
        :class="{ 'hero__poster--visible': videoEnded }"
        format="webp"
      />

      <div
        class="hero__block hero__block--top"
        :class="{ 'hero__block--visible': videoEnded }"
      />
      <div
        class="hero__block hero__block--bottom"
        :class="{ 'hero__block--visible': videoEnded }"
      />
      <NuxtImg
        src="/images/hero-layer-2.png"
        class="hero__layer"
        alt="Layer"
        :class="{ 'hero__layer--visible': videoEnded }"
        format="png"
        loading="lazy"
      />
    </div>
    <h1 class="hero__title container">
      Надежные решения для тяжелых условий
    </h1>
    <div
      class="hero__description"
      :style="backgroundStyles"
    >
      <div class="hero__description-content container">
        <div class="hero__description-text-block">
          <p class="hero__description-text">
            <span class="hero__description-text-tab">&emsp;</span>
            Горное оборудование
            и сервис, которым доверяют профессионалы
          </p>
          <div class="hero__description-subtext-wrapper">
            <p class="hero__description-subtext">
              Промышленная техника. Сервис. Запчасти. Всё под контролем.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const videoEnded = ref(false)
const heroVideo = ref<HTMLVideoElement | null>(null)

const onVideoEnded = () => {
    const video = heroVideo.value
    if (video) {
        video.pause()
        video.currentTime = video.duration
    }
    videoEnded.value = true
}

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

<style lang="scss" scoped>
.hero {
  &__media {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
    isolation: isolate;
  }

  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s ease;

    &--visible {
      opacity: 1;
    }
  }

  &__block {
    position: absolute;
    width: 388/1280 * 100%;
    background: $accent;
    z-index: 2;

    &--top {
      left: 190/1280 * 100%;
      top: 0;
      height: 0;
      opacity: 0;
      transform-origin: top;
      transition:
        height 1.8s ease;

      &.hero__block--visible {
        opacity: 1;
        height: 526/730 * 100%;
      }
    }

    &--bottom {
      left: 190/1280 * 100%;
      bottom: 0;
      height: 0;
      opacity: 0;
      transform-origin: bottom;
      transition:
        height 0.8s ease;

      &.hero__block--visible {
        opacity: 1;
        height: 46/730 * 100%;
      }
    }
  }

  &__layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.5s ease;

    &--visible {
      opacity: 1;
    }
  }

  &__title {
    @include headline1;

    text-align: center;
    padding-top: 8px;
    padding-bottom: 10px;

    @media (min-width: $breakpoint-tablet) {
      padding-top: 12px;
      padding-bottom: 12px;
    }

    @media (min-width: $breakpoint-desktop) {
      padding-top: 29px;
      padding-bottom: 22px;
    }
  }

  &__description {
    z-index: 0;
    position: relative;
    width: 100%;
    padding: 36px 0;
    display: flex;
    flex-direction: column;
    gap: 48px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      opacity: 0.6;
      overflow: hidden;
      pointer-events: none;
      background: var(--bg-image);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: brightness(0.4) contrast(1) saturate(0.1);
    }
  }

  &__description-content {
    display: flex;
    flex-direction: column;
    gap: 36px;
    align-items: flex-start;
    justify-content: flex-end;
    position: relative;
  }

  &__description-text-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
  }

  &__description-text {
    @include text1;

    color: $text-main;

    &-tab {
      display: hidden;

      @media (min-width: $breakpoint-tablet) {
        display: inline;
      }
    }
  }

  &__description-subtext-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  &__description-subtext {
    @include text3;

    color: $text-additional;
    text-align: right;
    width: 233px;
  }
}
</style>