<template>
  <section class="container our-partners">
    <p class="our-partners__title">С нами работают:</p>
    <div class="our-partners__logos">
      <AkronLogo class="our-partners__logo our-partners__logo--akron" />
      <HouseCogLogo class="our-partners__logo our-partners__logo--house-cog" />
      <SpmLogo class="our-partners__logo our-partners__logo--spm" />
      <TriangleOLogo class="our-partners__logo our-partners__logo--triangle-o" />
      <AbazinRudnikLogo class="our-partners__logo our-partners__logo--abazin-rudnik" />
      <EurohimLogo class="our-partners__logo our-partners__logo--eurohim" />
      <AlrosaLogo class="our-partners__logo our-partners__logo--alrosa" />
      <UralhimLogo class="our-partners__logo our-partners__logo--uralhim" />
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  AkronLogo,
  HouseCogLogo,
  SpmLogo,
  TriangleOLogo,
  AbazinRudnikLogo,
  EurohimLogo, AlrosaLogo,
  UralhimLogo
} from '~/shared/ui'

</script>

<style scoped lang="scss">
.our-partners {
  padding: 30px 40px;


  &__title {
    @include headline6;
    margin: 0 0 44px 0;
  }

  &__logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    opacity: 0.6;
  }

  &__logo {
    flex-shrink: 0;

    // Mobile sizes (default)
    &--akron {
      width: 116px;
      height: 28px;
    }

    &--house-cog {
      width: 36px;
      height: 36px;
    }

    &--spm {
      width: 33px;
      height: 40px;
    }

    &--triangle-o {
      width: 40.8125px;
      height: 40.8125px;
    }

    &--eurohim {
      width: 113px;
      height: 31px;
    }

    &--abazin-rudnik {
      width: 73.25px;
      height: 33.468px;
    }

    &--alrosa {
      width: 66.5625px;
      height: 28.339px;
    }

    &--uralhim {
      width: 163px;
      height: 13px;
    }
  }

  @media (min-width: $breakpoint-tablet) {
    padding: 30px 40px;

    &__logos {
      gap: 40px;
    }

    &__logo {
      // Tablet sizes
      &--akron {
        width: 142px;
        height: 35px;
      }

      &--house-cog {
        width: 48px;
        height: 47px;
      }

      &--spm {
        width: 41px;
        height: 49px;
      }

      &--triangle-o {
        width: 49.625px;
        height: 49.625px;
      }

      &--eurohim {
        width: 147px;
        height: 41px;
      }

      &--abazin-rudnik {
        width: 92.5px;
        height: 42.263px;
      }

      &--alrosa {
        width: 85.25px;
        height: 36.295px;
      }

      &--uralhim {
        width: 195px;
        height: 15px;
      }
    }
  }

  @media (min-width: $breakpoint-desktop) {
    padding: 60px 40px 68px;

    &__title {
      margin: 0 0 32px 0;
    }

    &__logos {
      gap: 100px;
    }

    &__logo {
      // Desktop sizes
      &--akron {
        width: 193px;
        height: 49px;
      }

      &--house-cog {
        width: 76px;
        height: 76px;
      }

      &--spm {
        width: 67px;
        height: 79px;
      }

      &--triangle-o {
        width: 78.5px;
        height: 78.5px;
      }

      &--eurohim {
        width: 233px;
        height: 63px;
      }

      &--abazin-rudnik {
        width: 154px;
        height: 71px;
      }

      &--alrosa {
        width: 128px;
        height: 54.11px;
      }

      &--uralhim {
        width: 329px;
        height: 27px;
      }
    }
  }
}
</style>

