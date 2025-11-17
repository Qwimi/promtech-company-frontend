<template>
  <section class="component-section">
    <h2 class="component-section__title">PromtechIcon Component</h2>
    <p class="component-section__description">
      Компонент для отображения SVG иконок проекта<br/>
      Размер {{ size }}
      <input type="range" min="0" max="56" v-model="size">
    </p>

    <div class="demo-grid">
      <div class="demo-item">
        <h3>arrow</h3>
        <div class="icon-demo">
          <PromtechIcon name="arrow" :icon-size="size" />
        </div>
        <code>name="arrow"</code>
      </div>

      <div class="demo-item">
        <h3>check</h3>
        <div class="icon-demo">
          <PromtechIcon name="check" :icon-size="size" />
        </div>
        <code>name="arrow"</code>
      </div>

      <div class="demo-item">
        <h3>burger-menu</h3>
        <div class="icon-demo">
          <PromtechIcon name="burger-menu" :icon-size="size" />
        </div>
        <code>name="burger-menu"</code>
      </div>

      <div class="demo-item">
        <h3>paperclip</h3>
        <div class="icon-demo">
          <PromtechIcon name="paperclip" :icon-size="size" />
        </div>
        <code>name="paperclip"</code>
      </div>

      <div class="demo-item">
        <h3>shopping-bag</h3>
        <div class="icon-demo">
          <PromtechIcon name="shopping-bag" :icon-size="size" />
        </div>
        <code>name="shopping-bag"</code>
      </div>
    </div>

    <details class="code-details">
      <summary>Показать код</summary>
      <pre><code>&lt;PromtechIcon name="arrow" :icon-size="{{ size }}" /&gt;
&lt;PromtechIcon name="burger-menu" :icon-size="{{ size }}" /&gt;
&lt;PromtechIcon name="paperclip" :icon-size="{{ size }}" /&gt;
&lt;PromtechIcon name="shopping-bag" :icon-size="{{ size }}" /&gt;</code></pre>
    </details>
  </section>
</template>

<script setup lang="ts">
import { PromtechIcon } from '@/shared'

const size = ref(16)
</script>