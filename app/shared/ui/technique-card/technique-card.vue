<script setup lang="ts">
import {Button} from '~/shared';
import type {MachineCard} from '~/shared/types';

export type TechniqueCardProps = {
  card: MachineCard;
}

const props = defineProps<TechniqueCardProps>();

</script>

<template>
  <div class="technique-card">
    <div class="technique-card__content">
      <NuxtImg
        :src="props.card.photo"
        class="technique-card__image"
      />
      <div class="technique-card__name">
        {{ props.card.name }}
      </div>
    </div>

    <Button
      :to="`/technique-catalog/${props.card.id}`"
      trailing-icon="arrow"
      class="technique-card__button"
      label="Подробнее"
    />
  </div>
</template>

<style scoped lang="scss">
  .technique-card {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__content {
      border: 1px $divider solid;
      background-color: $background-1;
    }

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
      background-image: linear-gradient($divider, $divider);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 75% 100%;
    }

    &__button {
      width: 100%;
    }
  }
</style>