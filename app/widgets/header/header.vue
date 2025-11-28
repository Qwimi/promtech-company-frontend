<template>
  <header
    class="header"
    :class="{ 'header--fixed': isHomePage }"
    role="banner"
  >
    <div class="container header__container">
      <!-- Logo -->
      <Link
        to="/"
        class="header__logo"
      >
        <Logo class="header__logo-img" />
      </Link>

      <!-- Burger menu button (mobile only) -->
      <button
        class="header__menu"
        type="button"
        aria-label="Меню"
        @click="isMenuOpen = !isMenuOpen"
      >
        <PromtechIcon
          name="burger-menu"
          :icon-size="25"
        />
      </button>

      <!-- Navigation -->
      <nav
        class="header__nav"
        :class="{ 'header__nav--open': isMenuOpen }"
      >
        <ul class="header__nav-list">
          <li
            v-for="(link, index) in links"
            :key="index"
          >
            <Link
              :to="link.to"
              :label="link.label"
              variant="bold"
            />
          </li>
        </ul>
      </nav>

      <!-- Actions -->
      <div class="header__actions">
        <Link
          to="/basket"
          icon="shopping-bag"
          label="Корзина"
          :icon-size="24"
          variant="bold"
        />
        <Button
          class="header__cta"
          label="Оставить заявку"
          trailing-icon="arrow"
          size="md"
          :icon-size="7"
          icon-gap="2px"
          to="#feedback"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Button, PromtechIcon, Link, Logo } from '@/shared'

const isHomePage = computed(() => useRoute().path === '/')

const links = [
    { label: 'Сторибук', to: '/dev' },
    { label: 'Главная', to: '/' },
    { label: 'О нас', to: '/about-us' },
    { label: 'Техника', to: '/technique-catalog' },
    { label: 'Комплектующие', to: '/components-catalog' },
    { label: 'Контакты', to: '/contacts' },
    { label: 'Корзина', to: '/basket' },
    { label: 'Оставить заявку', to: '#feedback' },
];

export interface HeaderLinkProps {
  to: string
  label: string
}

const isMenuOpen = ref(false)

</script>

<style scoped lang="scss">
.header {
  background: $background-6;
  color: $text-main;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  &--fixed {
    position: fixed;
  }

  .header__container {
    padding: 20px 24px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // Logo
  &__logo {
    display: inline-block;
    text-decoration: none;

    &-img {
      display: block;
      width: 133px;
      height: 29px;
    }
  }

  // Mobile burger menu - ПОКАЗЫВАЕМ только на mobile
  &__menu {
    width: 25px;
    height: 14px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-main;
    cursor: pointer;
    padding: 0;
  }

  // Navigation - на mobile СКРЫТА по умолчанию
  &__nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: $background-6;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    padding: 0 24px; // Горизонтальный padding всегда присутствует

    &--open {
      max-height: 500px;
      opacity: 1;
    }
  }

  &__nav-list {
    list-style: none;
    padding: 20px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  // Actions - на mobile СКРЫТЫ
  &__actions {
    display: none;
  }

  &__cta {
    white-space: nowrap;
    flex-shrink: 0;
  }

  @media (min-width: $breakpoint-tablet) {
    .header__container {
      padding: 20px 40px 10px;
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-areas:
        'logo logo'
        'nav actions';
      gap: 6px;
      align-items: center;
    }

    &__logo {
      grid-area: logo;
    }

    // Прячем бургер-меню
    &__menu {
      display: none;
    }

    // Показываем навигацию
    &__nav {
      position: static;
      max-height: none;
      opacity: 1;
      overflow: visible;
      grid-area: nav;
      padding: 0;
      background: transparent;

      &--open {
        padding: 0;
      }
    }

    &__nav-list {
      flex-direction: row;
      gap: 15px;
      padding: 14px 0;

      li:nth-last-child(-n+2) {
        display: none;
      }
    }

    // Показываем actions
    &__actions {
      display: flex;
      align-items: center;
      gap: 15px;
      grid-area: actions;
      justify-self: end;
    }
  }

  // Desktop layout
  @media (min-width: $breakpoint-desktop) {
    .header__container {
      padding: 20px 40px 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &__logo {
      flex-shrink: 0;

      &-img {
        width: 177px;
        height: 39px;
      }
    }

    &__nav {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center; // Центрируем навигацию
    }

    &__nav-list {
      flex-direction: row;
      gap: 20px;
      padding: 20px 24px;
      border-radius: 100px;
    }

    &__actions {
      display: flex;
      gap: 20px;
      flex-shrink: 0;
    }
  }
}
</style>
