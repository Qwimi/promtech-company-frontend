<template>
  <footer
    class="footer"
    role="contentinfo"
  >
    <div class="footer__inner container">
      <div class="footer__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <nav class="footer__nav">
        <Link
          v-for="link in links"
          :key="link.to"
          v-bind="link"
          variant="bold"
        />
      </nav>

      <div class="footer__contacts">
        <Link
          :external="true"
          variant="bold"
          to="mailto:pt-company@mail.ru"
        >
          Email: pt-company@mail.ru
        </Link>
        <Link
          :external="true"
          variant="bold"
          to="tel:+79089200889"
        >
          Телефон: +7 (908) 920 0889
        </Link>
      </div>

      <div class="footer__policy">
        <Link
          :external="true"
          variant="bold"
          to="/files/test-doc.pdf"
        >
          Политика в отношении обработки персональных данных
        </Link>
        <Link
          :external="true"
          variant="bold"
          to="/files/test-doc.pdf"
        >
          Пользовательское соглашение
        </Link>
        <Link
          :external="true"
          variant="bold"
          to="/files/test-doc.pdf"
        >
          Согласие на обработку персональных данных
        </Link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Logo, Link } from '@/shared'

const links = [
    { label: 'Сторибук', to: '/dev' },
    { label: 'Главная', to: '/' },
    { label: 'О нас', to: '/about-us' },
    { label: 'Техника', to: '/technique-catalog' },
    { label: 'Комплектующие', to: '/components-catalog' },
    { label: 'Контакты', to: '/contacts' },
    { label: 'Корзина', to: '/basket' },
    { label: 'Оставить заявку', to: '#' },
];
</script>

<style scoped lang="scss">
.footer {
  background: $background-1;
  color: $text-main;
  border-top: 1px solid $divider;
  padding: 40px 0;


  @media (max-width: $breakpoint-tablet) {
    padding: 30px 0;
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    grid-template-areas:
      "logo logo"
      "nav contacts"
      "policy policy";
    row-gap: 40px;

    @media (min-width: $breakpoint-tablet) {
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "nav policy"
        "logo contacts";
      gap: 80px;
    }
  }

  &__nav {
    grid-area: nav;
    display: flex;
    flex-direction: row;
    gap: 27px;
    padding: 14px 0;

    @media (max-width: $breakpoint-tablet) {
      flex-direction: column;
      padding: 0;
      gap: 10px;

    }
  }

  &__contacts,
  &__policy {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 240px;
  }

  &__contacts {
    grid-area: contacts;
  }

  &__policy {
    grid-area: policy;
    gap: 15px;
  }

  &__logo {
    grid-area: logo;
    display: flex;
    height: 40px;

    :deep(svg) {
      height: 100%;
      width: auto;
    }
  }
}
</style>
