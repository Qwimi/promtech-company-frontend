<template>
  <section class="component-section">
    <h2 class="component-section__title">Link Component</h2>
    <p class="component-section__description">
      Компонент ссылки с поддержкой вариантов стилей и иконок
    </p>

    <div class="demo-grid">
      <div class="demo-item">
        <h3>Regular variant</h3>
        <Link to="/" label="Обычная ссылка" variant="regular" />
      </div>

      <div class="demo-item">
        <h3>Bold variant</h3>
        <Link to="/" label="Жирная ссылка" variant="bold" />
      </div>

      <div class="demo-item">
        <h3>С иконкой arrow</h3>
        <Link to="/" label="Ссылка со стрелкой" icon="arrow" />
      </div>

      <div class="demo-item">
        <h3>С иконкой shopping-bag</h3>
        <Link to="/" label="Корзина" icon="shopping-bag" />
      </div>

      <div class="demo-item">
        <h3>Со слотом</h3>
        <Link to="/">
        Пользовательский текст через слот
        </Link>
      </div>

      <div class="demo-item">
        <h3>Только иконка</h3>
        <Link to="/" icon="burger-menu" />
      </div>

      <div class="demo-item">
        <h3>С большой иконкой (32px)</h3>
        <Link to="/" label="Большая иконка" icon="arrow" iconSize="32px" />
      </div>

      <div class="demo-item">
        <h3>С маленькой иконкой (12px)</h3>
        <Link to="/" label="Маленькая иконка" icon="shopping-bag" iconSize="12px" />
      </div>
    </div>

    <details class="code-details">
      <summary>Показать код</summary>
      <pre><code>&lt;Link to="/" label="Обычная ссылка" variant="regular" /&gt;
&lt;Link to="/" label="Жирная ссылка" variant="bold" /&gt;
&lt;Link to="/" label="Ссылка со стрелкой" icon="arrow" /&gt;
&lt;Link to="/" label="Большая иконка" icon="arrow" iconSize="32px" /&gt;
&lt;Link to="/" label="Маленькая иконка" icon="shopping-bag" iconSize="12px" /&gt;
&lt;Link to="/"&gt;Пользовательский текст через слот&lt;/Link&gt;</code></pre>
    </details>
  </section>
</template>

<script setup lang="ts">
import { Link } from '@/shared'
</script>