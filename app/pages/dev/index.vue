<template>
  <div class="dev-page">
    <!-- Real Header at the top -->
    <Header/>

    <div class="dev-page__header">
      <h1>Компоненты проекта</h1>
      <p>Страница для тестирования и отладки UI компонентов</p>
      <p class="dev-page__hint">
        💡 Измените размер окна браузера, чтобы увидеть адаптивность header выше
      </p>
    </div>

    <div class="dev-page__content">
      <!-- Cursor demo -->
      <CursorSection />

      <!-- Link Component -->
      <LinkSection />

      <!-- promtech-icon Component -->
      <IconSection />

      <!-- Button Component -->
      <ButtonSection />

      <!-- Main Page Hero Component -->
      <MainPageHeroSection />

      <!-- Main Page Hero New Component -->
      <MainPageHeroNewSection />

      <!-- About Us Widget -->
      <AboutUsSection />
    </div>
    <div class="dev-page__footer">
      <div class="container">
        <h2 class="component-section__title">Подвал сайта(footer)</h2>
        <p class="component-section__description">
          Компонент подвала сайта, для просмотра возможностей адаптивности
          следует
          изменить ширину окна браузера
        </p>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Header } from '@/widgets'
import CursorSection from './component-section/cursor-section.vue';
import IconSection from './component-section/icon-section.vue';
import LinkSection from './component-section/link-section.vue';
import ButtonSection from './component-section/button-section.vue';
import MainPageHeroSection from './component-section/main-page-hero.vue'; 
import MainPageHeroNewSection from './component-section/main-page-hero-new.vue';
import AboutUsSection from './component-section/about-us-section.vue';
import { Footer } from '~/widgets';
</script>

<style lang="scss">
.dev-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding-top: 100px; // Отступ для fixed header

  &__header {
    max-width: 1200px;
    margin: 0 auto 60px;
    text-align: center;
    padding: 40px 40px 0;

    h1 {
      @include headline3;
      margin-bottom: 16px;
    }

    p {
      @include text3;
      opacity: 0.9;
    }
  }

  &__hint {
    margin-top: 24px;
    padding: 16px 24px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    @include text3;
  }

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px 40px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  &__footer {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.component-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &__title {
    @include headline4;
    margin-bottom: 12px;
    color: #fff;
  }

  &__description {
    @include text3;
    margin-bottom: 32px;
    opacity: 0.9;
  }
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.demo-item {
  background: rgba(255, 255, 255, 0.15);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    @include headline5;
    margin-bottom: 16px;
    color: #fff;
  }

  code {
    @include text4;
    display: block;
    margin-top: 12px;
    padding: 8px 12px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    color: #ffd700;
  }
}

.icon-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 32px;

  :deep(svg) {
    width: 48px;
    height: 48px;
    fill: currentColor;
  }
}

.code-details {
  margin-top: 24px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;

  summary {
    @include text3;
    padding: 16px 24px;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }

  pre {
    margin: 0;
    padding: 24px;
    background: rgba(0, 0, 0, 0.4);
    overflow-x: auto;

    code {
      @include text4;
      color: #f8f8f2;
    }
  }
}
</style>
