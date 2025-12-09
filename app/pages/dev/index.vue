<template>
  <div class="dev-page">
    <div class="dev-page__header">
      <h1>Компоненты проекта</h1>
      <p>Страница для тестирования и отладки UI компонентов</p>
    </div>

    <div class="dev-page__content container">
      <!-- Cursor demo -->
      <CursorSection />

      <!-- Link Component -->
      <CheckboxSection />
      <!-- Link Component -->
      <LinkSection />

      <!-- FileInput Component -->
      <FileInputSection />

      <!-- TextField Component -->
      <TextFieldSection />

      <!-- promtech-icon Component -->
      <IconSection />

      <!-- Button Component -->
      <ButtonSection />

      <!-- Main Page Hero Component -->
      <MainPageHeroSection />

      <MapSection />

      <TechniqueCardSection />

      <TechniqueDescriptionSection />

      <!-- ExtraService Component -->
      <ExtraService />

      <AdressSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import CursorSection from './component-section/cursor-section.vue';
import IconSection from './component-section/icon-section.vue';
import LinkSection from './component-section/link-section.vue';
import ButtonSection from './component-section/button-section.vue';
import MainPageHeroSection from './component-section/main-page-hero.vue';
import TextFieldSection from '~/pages/dev/component-section/text-field-section.vue';
import FileInputSection from '~/pages/dev/component-section/file-input-section.vue';
import CheckboxSection from '~/pages/dev/component-section/checkbox-section.vue';
import TechniqueCardSection from '~/pages/dev/component-section/technique-card-section.vue';
import { AdressSection, MapSection } from '~/widgets/contacts';
import {ExtraService} from '~/widgets/main-page';
import TechniqueDescriptionSection from '~/pages/dev/component-section/technique-description-section.vue';
</script>

<style lang="scss">
.dev-page {
  min-height: 100vh;
  background: $background-1;
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

  &__content {
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
  background: rgb(255 255 255 / 10%);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 32px rgb(0 0 0 / 10%);

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
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.demo-item {
  width: 100%;
  background: rgb(255 255 255 / 15%);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgb(255 255 255 / 20%);
  transition: all 0.3s ease;

  &:hover {
    background: rgb(255 255 255 / 20%);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
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
    background: rgb(0 0 0 / 30%);
    border-radius: 6px;
    color: #ffd700;
  }
}

.icon-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgb(255 255 255 / 10%);
  border-radius: 8px;
  font-size: 32px;

  :deep(svg) {
    width: 48px;
    height: 48px;
    fill: currentcolor;
  }
}

.code-details {
  margin-top: 24px;
  background: rgb(0 0 0 / 20%);
  border-radius: 8px;
  overflow: hidden;

  summary {
    @include text3;

    padding: 16px 24px;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s ease;

    &:hover {
      background: rgb(0 0 0 / 30%);
    }
  }

  pre {
    margin: 0;
    padding: 24px;
    background: rgb(0 0 0 / 40%);
    overflow-x: auto;

    code {
      @include text4;

      color: #f8f8f2;
    }
  }
}
</style>
