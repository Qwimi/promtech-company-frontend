<template>
  <section class="container adress-section">
    <div class="contact-container">
      <h4 class="contact-container__title">
        Офис, Склад-мастерская, г.Серов:
      </h4>
      <div
        v-for="contact in contacts"
        :key="contact.title"
        class="contact"
      >
        <PromtechIcon
          :name="contact.iconName"
          :icon-size="16"
          class-name="contact__icon"
        />
        <h5 class="contact__title">
          {{ contact.title }}
        </h5>
        <p
          class="contact__description"
          v-html="contact.description"
        />
      </div>
    </div>
    <div class="adress-container">
      <div
        v-for="adress in adresses"
        :key="adress.title"
        class="adress"
      >
        <h5 class="adress__title">
          {{ adress.title }}
        </h5>
        <p class="adress__description">
          {{ adress.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PromtechIcon, type PromtechIconName } from '~/shared';

interface ContactInfo {
  iconName: PromtechIconName
  title: string
  description: string
}

const contacts: ContactInfo[] = [
    {
        iconName: 'map',
        title: 'Адрес',
        description: '624997 Свердловская область, г.Серов, ул.Циолковского д.11'
    },
    {
        iconName: 'mail',
        title: 'E-mail',
        description: '<a href="mailto:pt-company@mail.ru">pt-company@mail.ru</a>'
    },
    {
        iconName: 'user',
        title: 'Директор',
        description: 'Пульчук Егор Павлович'
    },
]

const adresses = [
    {
        title: 'Склад-мастерская, г.Берёзовский',
        description: 'Свердловская область, г.Берёзовский, ул. Посёлок БЗСК, 20Б'
    },
    {
        title: 'Склад-мастерская, г. Березники',
        description: 'Пермский край, г. Березники,ул. Фрунзе 16'
    },
    {
        title: 'Склад г. Учалы',
        description: 'Республика Башкирия, г. Учалы, ул. Карла Маркса,  д. 1, помещение 11'
    }
]
</script>

<style lang="scss" scoped>
.adress-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 30px;

  @media (min-width: $breakpoint-tablet) {
    gap: 56px;
    padding-bottom: 68px;
  }

  @media (min-width: $breakpoint-desktop) {
    gap: 96px;
    padding-bottom: 128px;
  }
}

.adress-container,
.contact-container {
  display: flex;
  gap: 20px;
  border-bottom: 1px solid $divider;
  flex-wrap: wrap;

  @media (min-width: $breakpoint-desktop) {
    width: calc(100% / 4 * 3);
  }

  &__title {
    @include headline4;

    padding: 20px;
    width: 100%;
    background: $accent;
  }
}

.contact-container {
  flex-direction: column;

  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
  }
}

.adress-container {
  flex-direction: column;
  gap: 36px;
  padding-bottom: 24px;
  
  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
    padding-bottom: 0;
  }
}

.contact {
  flex: 1;
  display: flex;
  gap: 10px;
  margin-bottom: 18px;

   @media (min-width: $breakpoint-tablet) {
    gap: 20px;
    flex-direction: column;
    margin-bottom: 24px;
  }

  &__title {
    @include headline5;
  }

  &__description {
    @include text3;

    color: $text-additional;
  }
}

.adress {
  flex: 1;
  display: grid;
  grid-template-rows: auto 1fr;

  &__title {
    @include headline5;

    padding: 10px 20px;
    background: $accent;
    display: flex;

   @media (min-width: $breakpoint-tablet) {
     min-height: calc(2em * 1.1 + 20px);
   }
  }

  &__description {
    @include text3;

    color: $text-additional;
    margin: 18px 0 0;

    
   @media (min-width: $breakpoint-tablet) { 
    margin: 24px 0;
   }
  }
}
</style>