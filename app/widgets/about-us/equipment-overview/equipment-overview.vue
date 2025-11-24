<template>
   <section class="equipment-overview">
     <div class="container">
      <div class="equipment-overview__inner">
        <NuxtImg
          src="/images/aboutUs-equipment.png"
          alt="Machine"
          class="equipment-overview__img"
        />

        <div class="equipment-overview__content">
          <h5 class="equipment-overview__title">Компания “ПромТехКомпания” является авторизованным дилером заводов «Группа ФИД» и «Амкодор-Инвар» (Республика Беларусь) и представляет на российском рынке подземные самоходные машины, предназначенные для решения производственных задач в условиях шахт и рудников.
            </h5>
          <p class="equipment-overview__text">
            В перечень поставляемых машин входят как основные — погрузочно-доставочные машины и самоходные буровые установки, так и вспомогательные шахтные доставочные машины — автобусы, заправщики, монтажный транспорт и кровлеоборщики.
          </p>
        </div>
      </div>
    </div>
   </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss" >
.equipment-overview {
    margin-top: 128px;
    margin-bottom:68px;
  &__inner {
    display: flex;        
    align-items: flex-start;    
    justify-content: space-between;
    gap: 20px;                
    @media (max-width: $breakpoint-tablet) {
      
      gap: 20px;
    }
  }
  &__img{
    width: 710px;
    @media (max-width: $breakpoint-tablet) {
        max-width:350px
    }
  }
  &__content{
    max-width:509px;
    display: flex;
    flex-direction: column;
  }
  &__title{
    @include headline5;
    padding-bottom:20px;
    margin: 0;
    @media (max-width: $breakpoint-tablet) {
      font-size: 16px;
    }
  }
  &__text{
    @include text3;
     @media (max-width: $breakpoint-tablet) {
      font-size: 14px;
    }
   
   
  }
}

</style>