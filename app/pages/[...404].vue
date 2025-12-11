<script setup lang="ts">
import {Button} from '~/shared';

definePageMeta({
    hideFeedback: true
})

const event = useRequestEvent()
if (event) {
    setResponseStatus(event, 404)
}

const $img = useImage();

const backgroundStyles = computed(() => {
    const imageUrl = $img('/images/404-dirt-texture.png', {
        format: 'webp',
        quality: 80,
    })

    return {
        '--bg-image': `url('${imageUrl}')`
    }
})
</script>

<template>
  <div
    class="not-found__wrapper"
    :style="backgroundStyles"
  >
    <div class="not-found__machine">
      <NuxtImg
        class="not-found__machine-image"
        src="/images/404_machine.png"
        alt=""
      />
    </div>

    <div class="not-found container">
      <NuxtImg
        class="not-found__image"
        src="/images/404.svg"
      />
      <div class="not-found__description">
        Такой страницы не существует. Пожалуйста, проверьте правильность ссылки на нужную вам страницу
      </div>
      <div class="not-found__buttons">
        <Button
          label="Перейти в каталог техники"
          to="/technique-catalog"
          trailing-icon="arrow"
        />
        <NuxtLink
          to="/"
          class="not-found__text-button"
        >
          Вернуться на главную
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  padding-block: 160px;

  @media (min-width: $breakpoint-tablet) {
    gap: 100px;
    padding-top: 160px;
    padding-bottom: 80px;
  }

  &__wrapper {
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background-image: var(--bg-image);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      object-fit: cover;
      filter: brightness(0.8)
    }
  }

  &__machine {
    position: absolute;
    z-index: -1;
    pointer-events: none;
    bottom: -60%;
    left: 50%;
    transform: translate(calc(-100% - 30px), -50%);

    @media (min-width: $breakpoint-desktop) {
      bottom: -58%;
    }
  }

  &__machine-image {
    display: none;
    height: 650px;
    width: auto;
    max-width: unset;

    @media (min-width: $breakpoint-tablet) {
      display: block;
    }
  }

  &__image {
    width: 180px;
    height: auto;

    @media (min-width: $breakpoint-tablet) {
      width: 412px;
      height: auto;
    }
  }

  &__description {
    @include text4;

    text-align: center;

    @media (min-width: $breakpoint-tablet) {
      width: 50%;
    }

    @media (min-width: $breakpoint-desktop) {
      width: 30%;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
      gap: 100px;
    }
  }

  &__text-button {
    @include link;

    text-decoration: underline;
    text-underline-offset: 4px;
  }
}
</style>