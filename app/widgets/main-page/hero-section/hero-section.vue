<template>
  <section class="hero">
    <div
      ref="heroVisionRef"
      class="hero__vision"
    >
      <div
        ref="heroMediaRef"
        class="hero__media"
      >
        <video
          ref="heroVideo"
          src="/videos/intro.mp4"
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
      <h1
        ref="titleRef"
        class="hero__title container"
      >
        Надежные решения<br />для&nbsp;тяжелых условий
      </h1>
    </div>
    <HeroDescription />
  </section>
</template>

<script setup lang="ts">
import HeroDescription from './hero-description.vue'

const videoEnded = ref(false)
const heroVideo = useTemplateRef<HTMLVideoElement>('HTMLVideoElement')

const onVideoEnded = () => {
    const video = heroVideo.value
    if (video) {
        video.pause()
        video.currentTime = video.duration
    }
    videoEnded.value = true
}
</script>

<style lang="scss" scoped>
.hero {
  &__vision {
    isolation: isolate;
    overflow-x: hidden;
  }

  &__media {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    width: 220%;
    translate: -24% 0;

    @media(min-width: $breakpoint-tablet) {
      width: 100%;
      translate: 0;
    }
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
    width: calc(301/1920 * 100%);
    left: calc(599/1920 * 100%);
    background: $accent;
    z-index: 2;

    &--top {
      top: 0;
      height: 0;
      opacity: 0;
      transform-origin: top;
      transition:
        height 1.8s ease;

      &.hero__block--visible {
        opacity: 1;
        height: calc(501/700 * 100%);
      }
    }

    &--bottom {
      bottom: 0;
      height: 0;
      opacity: 0;
      transform-origin: bottom;
      transition:
        height 0.8s ease;

      &.hero__block--visible {
        opacity: 1;
        height: calc(54/700 * 100%);
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
    padding-bottom: 10px;
    position: relative;
    z-index: 1;
    margin-top: -15px;

    @media (min-width: $breakpoint-tablet) {
      margin-top: -34px;
      padding-bottom: 8px;
      -webkit-text-stroke: 1px $text-main;
      paint-order: stroke fill;
    }

    @media (min-width: $breakpoint-desktop) {
      margin-top: -50px;
      padding-bottom: 27px;
      -webkit-text-stroke: 2px $text-main;
    }
  }
}
</style>
