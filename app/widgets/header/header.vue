<template>
  <header class="header" role="banner">
    <div class="header__inner">
      <!-- Logo -->
      <NuxtLink to="/" class="header__logo">
        <img src="~/assets/images/logo.svg" alt="ПромТехКомпани" class="header__logo-img" />
      </NuxtLink>

      <!-- Burger menu button (mobile only) -->
      <button 
        class="header__menu" 
        type="button" 
        aria-label="Меню" 
        @click="isMenuOpen = !isMenuOpen"
      >
        <PromtechIcon name="burger-menu" :iconSize="25" />
      </button>

      <!-- Navigation -->
      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <ul class="header__nav-list">
          <li v-for="(link, index) in links" :key="index">
            <NuxtLink :to="link.to" class="header__nav-link">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Actions -->
      <div class="header__actions">
        <NuxtLink 
          v-if="showBag" 
          to="#" 
          class="header__bag"
        >
          <span class="header__bag-label">Корзина</span>
          <PromtechIcon name="shopping-bag" :iconSize="24" />
        </NuxtLink>
        <Button 
          class="header__cta" 
          label="Оставить заявку"
          trailingIcon="arrow"
          size="md"
          :iconSize="16"
          iconGap="2px"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, PromtechIcon } from '@/shared'

export interface HeaderLinkProps {
  to: string
  label: string
}

withDefaults(defineProps<{
  links?: HeaderLinkProps[]
  showBag?: boolean
}>(), {
  links: () => [
    { to: '/', label: 'Главная' },
    { to: '#', label: 'Техника' },
    { to: '#', label: 'Комплектующие' },
    { to: '#', label: 'Контакты' },
  ],
  showBag: true,
})

const isMenuOpen = ref(false)
</script>

<style scoped lang="scss">
.header {
  background: #293133;
  color: $text-main;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &__inner {
    margin: 0 auto;
    padding: 20px 24px;
    max-width: 1500px;
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
    background: #293133;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    padding: 0 24px; // Горизонтальный padding всегда присутствует

    &--open {
      max-height: 500px;
      opacity: 1;
      padding-top: 20px; // Добавляем только верхний padding при открытии
      padding-bottom: 20px;
    }
  }

  &__nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__nav-link {
    @include link;
    color: $text-main;
    text-decoration: none;
    opacity: 0.9;
    transition: opacity 0.2s;
    display: block;

    &:hover {
      opacity: 1;
    }
  }

  // Actions - на mobile СКРЫТЫ
  &__actions {
    display: none;
  }

  &__bag {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: $text-main;
    @include link;
    opacity: 0.9;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    &-label {
      white-space: nowrap;
    }
  }

  &__cta {
    white-space: nowrap;
    flex-shrink: 0;
  }

  // Tablet layout (≥800px)
  @media (min-width: 800px) {
    &__inner {
      padding: 30px 40px 10px;
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-areas:
        'logo logo'
        'nav actions';
      gap: 14px;
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

  // Desktop layout (≥1280px)
  @media (min-width: 1280px) {
    &__inner {
      padding: 30px 40px 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 146px;
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

