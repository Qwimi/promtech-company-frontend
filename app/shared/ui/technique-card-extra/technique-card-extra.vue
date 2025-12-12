<script setup lang="ts">
import type {MachineCard} from '~/shared/types';

const props = defineProps<MachineCard>();

</script>

<template>
  <div class="extra-card">
    <NuxtImg
      :src="props.photo"
      class="extra-card__image"
    />
    <div class="extra-card__name">
      {{ props.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.extra-card {
  border: 1px $divider solid;
  background-color: $background-1;

  &__name {
    border-top: 1px $divider solid;

    @include headline6;

    text-align: center;
    padding: 10px 20px;
  }

  &__image {
    height: 300px;

    @media (min-width: $breakpoint-tablet) {
      height: 415px;
    }

    @media (min-width: $breakpoint-desktop) {
      height: 507px;
    }

    object-fit: contain;
    width: 100%;
  }
}
</style>