<template>
  <section class="gallery-section">
    <div class="container gallery-section__container-bg">
      <div class="gallery-section__header">
        <h6 class="gallery-section__subtitle">
          Галерея:
        </h6>

        <div class="gallery-section__inner">
          <h3 class="gallery-section__title">
            Наше производство
          </h3>
          <p class="gallery-section__text">
            Производственный процесс в действии.
            <br />Работаем с вниманием к каждой детали.
          </p>
        </div>
      </div>

      <Swiper
        :modules="[Navigation]"
        :slides-per-view="1"
        :space-between="20"
        :navigation="{
          nextEl: '.nav-btn_next',
          prevEl: '.nav-btn_prev'
        }"
        :breakpoints="{
          375: { slidesPerView: 1.1 },
          600: { slidesPerView: 2 },
          800: { slidesPerView: 2.3 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }"
        class="gallery-slider"
      >
        <SwiperSlide
          v-for="(img, i) in images"
          :key="i"
          :class="{'slide-offset': i === 2}"
        >
          <NuxtImg
            :src="img"
            class="gallery-slide__img"
          />
        </SwiperSlide>
      </Swiper>

      <div class="gallery-nav">
        <Button 
          leading-icon="arrow-left"
          :icon-size="25" 
          class="nav-btn nav-btn_prev" 
        />
        <Button 
          leading-icon="arrow-right" 
          :icon-size="25" 
          class="nav-btn nav-btn_next" 
        />
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Button from '~/shared/ui/button/button.vue';


const images = [
    '/images/aboutUs-slider/slide1.png',
    '/images/aboutUs-slider/slide2.png',
    '/images/aboutUs-slider/slide3.png',
    '/images/aboutUs-slider/slide4.png'
];
</script>

<style lang="scss" scoped>
::v-deep(.swiper-button-prev),
::v-deep(.swiper-button-next) {
  display: none !important;
}

.gallery-section {
  margin-top: 100px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('/images/bg-productSlider.png');
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
    z-index: 1;
  }

  ::after{
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    opacity: 0.41;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  &__container-bg {
    position: relative;
    padding-top: 60px;

    @media (min-width: $breakpoint-desktop) {
      padding-top: 68px; 
    }
  }


  &__header {
    position: relative;
    margin-bottom: 60px;
  }

  &__inner {
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row; 
      align-items: center;
    }
  }

  &__subtitle {
    @include headline6;

    color: $divider;
    padding-bottom: 44px;

    @media (min-width: $breakpoint-desktop) {
      padding-bottom: 60px;
    }
  }

  &__title {
    @include headline3;

    white-space: nowrap;
  }

  

  &__text {
    @include text3;

    color: $text-additional;
    text-align: left; 

    @media (min-width: $breakpoint-tablet) {
      text-align: right; 
    }
  }

  .gallery-slider {
    width: 100%;
    margin-bottom: 60px;
    
    @media (min-width: $breakpoint-desktop) {
      padding-bottom: 36px;
    }

    .gallery-slide__img {
      width: 100%;
      object-fit: cover;
      display: block;
      margin: 0;
      border-radius: 0; 
    }

    .slide-offset .gallery-slide__img {
      margin-top: 60px; 
    }

    @media (min-width: $breakpoint-tablet) {
      .slide-offset .gallery-slide__img {
        margin-top: 115px; 
      }
    }
  }

  .gallery-nav {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    margin-bottom: 60px;

    @media (min-width: $breakpoint-desktop) {
      margin-bottom: 68px;
    }
  }

  .nav-btn {
    position: relative;
    z-index: 3;
    width: 46px;
    height: 46px;
    border: 2px solid $text-main;
    background-color: transparent;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s ease;

    &:hover {
      border: none;
      background-color: $text-link-1;
    }
  }

}
</style>


