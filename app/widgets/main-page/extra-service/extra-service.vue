<template>
  <div class="service-wrapper">
    <section class="container extra-service">
      <p class="extra-service__label section-label">
        Дополнительный сервис:
      </p>
      <div class="extra-service__content">
        <p class="extra-service__title">
          Услуги и сервис
        </p>
        <div class="extra-service__external">
          <div class="extra-service__block">
            <NuxtImg
              class="extra-service__image-first"
              src="/images/service-engine.png"
            />
            <div class="extra-service__info">
              <span class="extra-service__description">
                Наша задача — сделать ваше оборудование надёжным и долговечным.
                Мы предлагаем: поставку подходящих решений, запуск оборудования,
                плановое обслуживание и ремонт. Всё под ключ — вы получаете один
                надёжный контакт и эффективность без лишней волокиты.
              </span>
              <div class="extra-service__services">
                <p>Поставка машин</p>
                <p>Гарантийное и послегарантийное обслуживание</p>
                <p>Ремонт</p>
                <p>Поставка запчастей</p>
              </div>
            </div>
          </div>
          <div class="extra-service__image-container">
            <NuxtImg
              class="extra-service__image-second"
              src="/images/service-machinery.png"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.service-wrapper {
  background-color: $background-7;
}

.extra-service {
  padding-top: 30px;
  color: $background-1;
  gap: 44px;
  display: flex;
  flex-direction: column;

  @media (min-width: $breakpoint-tablet) {
    padding-top: 60px;
  }

  @media (min-width: $breakpoint-desktop) {
    gap: 32px;
  }

  &__title {
    @include headline3;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;

    @media (min-width: $breakpoint-desktop) {
      gap: 60px;
      padding-bottom: 68px;
    }
  }

  &__external {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: $breakpoint-desktop) {
      flex-direction: row;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
    }

    @media (min-width: $breakpoint-desktop) {
      flex: 1;
      min-width: 0;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: $breakpoint-tablet) {
      justify-content: space-between;
      gap: 40px;
      align-items: center;
    }

    @media (min-width: $breakpoint-desktop) {
      flex: 1;
      min-width: 0;
      gap: 125px;
    }
  }

  &__description {
    @include text3;
  }

  &__services {
    @include headline5;

    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: $breakpoint-tablet) {
      gap: 24px;
    }
  }

  &__image-first {
    object-fit: cover;
    width: 100%;
    
    @media (min-width: $breakpoint-tablet) {
      height: auto;
      padding-top: 32px;
    }

    @media (min-width: $breakpoint-desktop) {
      flex: 1;
      height: 73%;
      padding-top: 5%;
    }
  }

  &__image-container {
    @media (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      width: 100%;
      aspect-ratio: 16 / 6;
      position: relative;
      overflow: hidden;
    }

    @media (min-width: $breakpoint-desktop) {
      flex: 1;
      min-width: 0;
    }

  }

  &__image-second {
    width: 100%;
    height: auto;

    @media (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      clip-path: inset(35% 0 10% 0);
      position: absolute;
      width: 100%;
      height: auto;
      top: -85%;
      left: 0;
    }

    @media (min-width: $breakpoint-desktop) {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>