<script setup lang="ts">
interface Advantage {
  id: string;
  title: string;
  image: string;
  elements?: string[];
}

const advantages: Advantage[] = [
    {
        id: '01',
        title: 'Авторизованный дилер «Группа ФИД» и «Амкодор-Инвар»',
        image: '/images/advantages-img-1.png',
    },
    {
        id: '02',
        title: 'Сервис по всей России — работаем в том числе вахтовым методом',
        image: '/images/advantages-img-2.png',
    },
    {
        id: '03',
        title: 'Результат по КГТ',
        image: '/images/advantages-img-3.png',
    },
    {
        id: '04',
        title: 'Собственные:',
        image: '/images/advantages-img-4.png',
        elements: [
            'техническая база',
            'склад запчастей и расходных материалов в городе Березники Пермского края',
        ],
    }
];

const $img = useImage();

const backgroundStyles = computed(() => {
    const imageUrl = $img('/images/advantages-texture.png', {
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
    class="our-advantages__wrapper"
    :style="backgroundStyles"
  >
    <section class="our-advantages container">
      <h6 class="section-label">
        Преимущества работы с нами:
      </h6>
      <h6 class="our-advantages__title">
        Наши преимущества
      </h6>
      <div class="our-advantages__grid">
        <div
          v-for="advantage in advantages"
          :key="advantage.id"
          class="our-advantages__item"
        >
          <article
            v-cursor="{
              local: true,
              stylePreset: 'backdropBlur'
            }"
            class="advantage-card"
          >
            <h3 class="advantage-card__number">
              {{ advantage.id }}
            </h3>
            <div class="advantage-card__title">
              {{ advantage.title }}
              <ul
                v-show="advantage.elements"
                class="advantage-card__list"
              >
                <li
                  v-for="element in advantage.elements"
                  :key="element"
                  class="advantage-card__element"
                >
                  {{ element }}
                </li>
              </ul>
            </div>
          </article>
          <div class="our-advantages__image">
            <NuxtImg
              :src="advantage.image"
              alt="advantage-image"
              class="our-advantages__image-content"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.our-advantages {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: $breakpoint-tablet) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  &__wrapper {
    position: relative;
    overflow: hidden;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      opacity: 0.5;
      background-image: var(--bg-image);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      object-fit: cover;
      filter: brightness(0.4) contrast(1) saturate(0.1);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;

    @media (min-width: $breakpoint-desktop) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  &__title {
    @include headline3;

    color: $text-main;
  }

  @mixin card-order-normal {
    .advantage-card {
      order: 1;
    }

    .our-advantages__image {
      order: 2;
    }
  }

  @mixin card-order-reverse {
    .advantage-card {
      order: 2;
    }

    .our-advantages__image {
      order: 1;
    }
  }

  &__item {
    display: grid;
    gap: 20px;

    @media (min-width: $breakpoint-tablet) {
      grid-template-columns: 1fr 1fr;

      @include card-order-normal;

      &:nth-child(even) {
        @include card-order-reverse;
      }

      @media (min-width: $breakpoint-desktop) {
        &:nth-child(4n + 1),
        &:nth-child(4n + 2) {
          @include card-order-normal;
        }

        &:nth-child(4n + 3),
        &:nth-child(4n + 4) {
          @include card-order-reverse;
        }
      }
    }
  }

  &__image {
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media (min-width: $breakpoint-tablet) {
      display: block;
      height: 168px;
    }

    @media (min-width: $breakpoint-desktop) {
      height: 100%;
    }
  }

  &__image-content {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.advantage-card {
  box-sizing: border-box;
  border: 1px solid $divider;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 167px;
  padding: 20px 10px;
  overflow: hidden;
  position: relative;

  @media (min-width: $breakpoint-tablet) {
    height: 168px;
  }

  @media (min-width: $breakpoint-desktop) {
    padding: 20px 22px;
    height: auto;
  }

  &__number {
    @include headline4;

    color: $text-link-1;
    margin: 0;

  }

  &__title {
    @include text5;

    color: $text-main;
    width: 70%;
    position: relative;
    z-index: 11;

    @media (min-width: $breakpoint-desktop) {
      @include headline5;

      width: 100%;
    }
  }

  &__list {
    padding-left: 1rem;
  }

  &__element {
    @include text3;

    display: list-item;
    list-style: disc!important;
  }
}


</style>