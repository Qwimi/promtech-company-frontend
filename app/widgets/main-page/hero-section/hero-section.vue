<template>
  <section class="hero">
    <div class="hero__media">
      <video
        ref="heroVideo"
        :src="videoSrc"
        autoplay
        muted
        playsinline
        @ended="onVideoEnded"
        class="hero__video"
      />
      <NuxtImg
        :src="posterSrc"
        alt="Hero background"
        class="hero__poster"
        :class="{ 'hero__poster--visible': videoEnded }"
        format="webp"
      />

      <div class="hero__block hero__block--top" :class="{ 'hero__block--visible': videoEnded }"></div>
      <div class="hero__block hero__block--bottom" :class="{ 'hero__block--visible': videoEnded }"></div>
      <NuxtImg
        :src="layerSrc"
        class="hero__layer"
        alt="Layer"
        :class="{ 'hero__layer--visible': videoEnded }"
        format="png"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const videoSrc = '/videos/intro-reverse.mp4'
const posterSrc = '/images/hero-poster.png'
const layerSrc = '/images/hero-layer-2.png'

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
</script>

<style lang="scss" scoped>
.hero {
    &__media {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
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
}
</style>