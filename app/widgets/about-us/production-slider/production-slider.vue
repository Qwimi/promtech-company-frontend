<template>
  <section class="gallery-page">
    <div class="container gallery-page__container-bg">
      <div class="gallery-page__overlay"></div>

      <div class="gallery-page__header">
        <h6 class="gallery-page__subtitle">Галерея:</h6>

        <div class="gallery-page__inner">
          <h3 class="gallery-page__title">Наше производство</h3>
          <p class="gallery-page__text">
            Производственный процесс в действии. Работаем с вниманием к каждой детали.
          </p>
        </div>
      </div>

      <div class="gallery-page__content">
        <Swiper
          :slides-per-view="3.7"
          :space-between="20"
          :navigation="{
            nextEl: '.nav-btn_next',
            prevEl: '.nav-btn_prev'
          }"
          class="gallery-slider"
        >
          <SwiperSlide v-for="(img, i) in images" :key="i" :class="{'slide-offset': i === 2}">
            <img :src="img" class="gallery-slide__img" />
          </SwiperSlide>
        </Swiper>

     
        <div class="gallery-nav">
          <button class="nav-btn nav-btn_prev swiper-button-prev"></button>
          <button class="nav-btn nav-btn_next swiper-button-next"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const images = [
  '/images/aboutUs-slider/slide1.png',
  '/images/aboutUs-slider/slide2.png',
  '/images/aboutUs-slider/slide3.png',
  '/images/aboutUs-slider/slide4.png'
];
</script>

<style lang="scss" scoped>



.gallery-page {
  margin-top: 100px;
  position: relative;

  &__container-bg {
    position: relative;
    padding: 40px;
    background-image: url('/images/bg-productSlider.png');
    background-size: cover;
    background-position: center;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: #00000080;
    z-index: 1;
  }

  .gallery-page__header,
  .gallery-page__content {
    position: relative;
    z-index: 2;
  }

  &__header {
    margin-top: 60px;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:200px;
 
  }

  &__subtitle {
    @include headline6;
    
    @media (max-width: $breakpoint-tablet) {
      font-size: 14px;
    }
  }

  &__title {
    @include headline3;
    white-space: nowrap;

     @media (max-width: $breakpoint-tablet) {
      font-size: 32px;
    }
  }

  &__text {
    @include text3;
    max-width: 310px;
    text-align: right; 
    
    @media (max-width: $breakpoint-tablet) {
      font-size: 14px;
    }
  }

  &__content {
    margin-top: 60px;
    position: relative;
  }

  .gallery-slider {
    width: 100%;
    

    .gallery-slide__img {

      width: 100%;
      object-fit: cover;
      display: block; 
      margin: 0; 
    }
    

    .slide-offset .gallery-slide__img {
    margin-top: 115px;
  }
  }


  .gallery-nav {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: flex-end;
  }

  .nav-btn {
  width: 46px;
  height: 46px;
  border: 2px solid #FFFFFF;  
  background-color: transparent; 
  cursor: pointer;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease;

  &:hover {
    border: none; 
    background-color: #6272FF; 
   
  }

  &.nav-btn_prev {
    background-image: url('@/assets/icons/arrow-left.svg');
  }

  &.nav-btn_next {
    background-image: url('@/assets/icons/arrow-right.svg');
  }

  
}

 
  .swiper-button-prev,
  .swiper-button-next {
    position: static;
    margin: 0;
  }
  
}


</style>
