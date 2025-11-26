<template>
  <section class="equipment-overview">
    <div class="container">
      <div class="equipment-overview__inner">
        <NuxtImg
          src="/images/aboutUs-equipment.png"
          alt="Machine"
          class="equipment-overview__img"
        />

        <div class="equipment-overview__content">
          <h5 class="equipment-overview__title">
            Компания “ПромТехКомпания” является авторизованным дилером заводов
            «Группа ФИД» и «Амкодор-Инвар» (Республика Беларусь) и представляет на российском рынке подземные самоходные
            машины, предназначенные для решения производственных задач в условиях шахт и рудников.
          </h5>
          <p class="equipment-overview__text">
            В перечень поставляемых машин входят как основные<br />— погрузочно-доставочные машины и самоходные буровые
            установки, так и вспомогательные шахтные доставочные<br /> машины — автобусы, заправщики, монтажный транспорт
            и кровлеоборщики.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.equipment-overview {
  margin-top: 60px;
  margin-bottom: 30px;

  @media (min-width: $breakpoint-desktop) {
    margin-top: 128px;
    margin-bottom: 68px;
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: $breakpoint-tablet) {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }

  &__img {
    padding-top: 32px;

    img,
    .nuxt-img,
    & {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    @include headline5;

    padding-bottom: 20px;
    margin: 0;
    color: $text-additional;
  }

  &__text {
    @include text3;

    color: $text-additional;
  }
}
</style>
