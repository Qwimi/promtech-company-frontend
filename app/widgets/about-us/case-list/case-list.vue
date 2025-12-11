<template>
  <section class="cases">
    <div class="container">
      <div class="cases__header">
        <h6 class="cases__subtitle">
          Кейсы:
        </h6>
        <div class="cases__inner">
          <h3 class="cases__title">
            Опыт в деле
          </h3>
          <p class="cases__text">
            Реальные примеры выполненных<br />проектов и решений для наших клиентов
          </p>
        </div>
      </div>
      <div class="cases__grid">
        <div
          v-for="caseItem in cases"
          :key="caseItem.id"
          class="case-card"
          :style="{ backgroundImage: 'url(' + caseItem.image + ')' }"
        >
          <div class="case-card__content">
            <div class="case-card__name">
              <h5 class="case-card__title title">
                {{ caseItem.title }}
              </h5>
              <h4 class="case-card__number">
                {{ caseItem.number }}
              </h4>
            </div>

            <p class="case-card__text">
              {{ caseItem.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cases = [
    {
        id: 1,
        number: '01',
        title: 'Восстановление моста',
        text: 'Описание кейса, описание кейса',
        image: '/images/case-zaglushka.png'
    },
    {
        id: 2,
        number: '02',
        title: 'Кейс',
        text: 'Описание кейса, описание кейса',
        image: '/images/case-zaglushka.png'
    },
    {
        id: 3,
        number: '03',
        title: 'Кейс',
        text: 'Описание кейса, описание кейса',
        image: '/images/case-zaglushka.png'
    },
    {
        id: 4,
        number: '04',
        title: 'Кейс',
        text: 'Описание кейса, описание кейса',
        image: '/images/case-zaglushka.png'
    },
    {
        id: 5,
        number: '05',
        title: 'Кейс',
        text: 'Описание кейса, описание кейса',
        image: '/images/case-zaglushka.png'
    },
    {
        id: 6,
        number: '06',
        title: 'Кейс',
        text: 'Описание кейса, описание кейса',
        image: '/images/case-zaglushka.png'
    }
];
</script>

<style lang="scss" scoped>
.cases {
  margin-bottom: 128px;

  &__subtitle {
    @include headline6;

    color: $divider;
  }

  &__inner {
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    margin-top: 44px;

    @media (min-width: $breakpoint-tablet) {
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      margin-top: 60px;

    }

     @media (min-width: $breakpoint-desktop) {
      margin-top: 79px;

    }
  }

  &__title {
    @include headline3;

    margin-bottom: 10px;

    @media (min-width: $breakpoint-tablet) {
      margin-bottom: 0;
    }
    
  }

  &__text {
    @include text3;

    color: $text-additional;
    text-align: left; 

    @media (min-width: $breakpoint-tablet) {
      text-align: right;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr; 
    gap: 20px;
    padding-top: 60px;
    justify-items:center;
    

    @media (min-width: $breakpoint-tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-desktop) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.case-card {
  border: 1px solid $background-2;
  width: 100%;  
  height: 247px;
  display: flex;
  flex-direction: column;

  @media (min-width: $breakpoint-tablet) {
    height: 248px;
  }

  @media (min-width: $breakpoint-desktop) {
    height: 298px;
  }
  
  &__content {
    padding: 22px 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__name {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (min-width: $breakpoint-tablet) {
      gap: 75px;
    }

    @media (min-width: $breakpoint-desktop) {
      gap: 140px;
    }
  }

  &__title {
    @include headline5;

    @media (min-width: $breakpoint-desktop) {
      max-width: 250px;
    }
  }

  &__number {
    @include headline4;
  }

  &__text {
    @include text3;

    color: $text-additional;

    @media (min-width: $breakpoint-desktop) {
      max-width: 245px;
    }
  }


}

</style>

