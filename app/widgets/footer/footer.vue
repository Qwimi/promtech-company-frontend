<template>
  <footer
    class="footer"
    role="contentinfo"
  >
    <div class="footer__inner container">
      <nav class="footer__nav">
        <Link
          v-for="link in links"
          :key="link.to"
          v-bind="link"
        />
      </nav>

      <div class="footer__contacts">
        <a
          href="mailto:pt-company@mail.ru"
          class="footer__contact-link"
        >
          Email: pt-company@mail.ru
        </a>
        <a
          href="tel:+79089200889"
          class="footer__contact-link"
        >
          Телефон: +7 (908) 920 0889
        </a>
      </div>

      <NuxtLink to="/">
        <Logo class="footer__logo" />
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Logo, Link } from '@/shared'


const links = [
    { to: '/', label: 'Главная' },
    { to: '/technique', label: 'Техника' },
    { to: '/components', label: 'Комплектующие' },
    { to: '/contacts', label: 'Контакты' },
]
</script>

<style scoped lang="scss">
.footer {
  background: $background-1;
  color: $text-main;
  border-top: 1px solid $divider;
  padding: 40px 0;

  &__inner {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      'nav contacts'
      'logo logo';
    align-items: center;
    gap: 80px;
  }

  &__nav {
    grid-area: nav;
    display: flex;
    flex-direction: row;
    gap: 27px;
    padding: 14px 0;
  }

  &__contacts {
    grid-area: contacts;
  }

  &__contact-link {
    display: block;

    @include link;

    text-decoration: none;
    color: inherit;
  }

  &__logo {
    grid-area: logo;
    height: 40px;
  }

  @media (max-width: $breakpoint-tablet) {
    padding: 30px 0;

    &__inner {
      grid-template-areas:
        'logo logo'
        'nav contacts';
      gap: 40px;
      align-items: start;
    }

    &__nav {
      flex-direction: column;
      padding: 0;
      gap: 10px;
    }
  }
}
</style>
