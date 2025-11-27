<template>
  <section class="component-section">
    <h2 class="component-section__title">
      v-cursor
    </h2>
    <p class="component-section__description">
      Директива для обработки поведения кружка при наведении на конкретный элемент.
      Директива работает только на устройствах с поддержкой курсора
    </p>

    <div class="demo-grid">
      <div class="demo-item">
        <div class="dark-bg">
          <Button v-cursor="{ stylePreset: 'none' }">
            Без v-cursor
          </Button>
        </div>
      </div>
      <div class="demo-item">
        <div class="dark-bg">
          <Button>
            Пресет colorBurn
          </Button>
        </div>
      </div>
      <div class="demo-item">
        <div
          v-cursor="{ stylePreset: 'backdropBlur' }"
          class="mask-card"
        >
          Пресет backdropBlur
        </div>
      </div>
      <div class="demo-item">
        <div
          v-cursor="{
            local: true,
            stylePreset: 'backdropBlur'
          }"
          class="mask-card"
        >
          Элемент в качестве маски и пресет backdropBlur
        </div>
      </div>
      <div class="demo-item">
        <div class="dark-bg">
          <button
            v-cursor="{ height: '70px', width: '70px', background: 'red', mixBlendMode: 'color-dodge' }"
            class="demo-button"
          >
            Кастомные стили
          </button>
        </div>
      </div>
    </div>

    <details class="code-details">
      <summary>Показать код</summary>
      <pre>
        <code>
          &lt;button&gt;Без v-cursor&lt;button /&gt;
          &lt;button v-cursor="{ stylePreset: 'colorBurn' }"&gt;Пресет colorBurn&lt;button /&gt;
          &lt;div v-cursor="{local: true, stylePreset: 'backdropBlur'}"&gt;Элемент в качестве маски и пресет backdropBlur&lt;div /&gt;
          &lt;button v-cursor="{height: '70px', width: '70px', background: 'red', mixBlendMode: 'color-dodge'}"&gt;Кастомные стили&lt;button /&gt;
        </code>
      </pre>
    </details>
  </section>
</template>

<script setup lang="ts">
import { Button } from '~/shared';

</script>

<style scoped lang="scss">
.dark-bg {
  background-color: $background-4;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.mask-card {
  border-top: 1px solid $divider;
  border-right: 1px solid $divider;
  border-bottom: 1px solid $divider;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: $background-4;
  padding: 0 2rem;
  min-height: 200px;
  overflow: hidden;
  position: relative;
}
</style>