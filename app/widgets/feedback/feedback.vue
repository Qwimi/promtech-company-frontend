<template>
  <div :style="backgroundStyles" class="feedback-wrapper">
    <div id="feedback" class="container feedback-container" >
      <div class="feedback-container__label">Свяжитесь с нами</div>
      <div class="feedback-container__form">
        <TextField placeholder="Фамилия и имя" v-model="formState.name.value"/>
        <TextField placeholder="Название организации" v-model="formState.organisation.value"/>
        <div class="feedback-container__form__narrow">
          <TextField placeholder="Электронная почта" v-model="formState.email.value"/>
          <TextField placeholder="Номер телефона" v-model="formState.phone.value" :mask="'+7 (###) ### ## ##'"/>
        </div>
        <div class="feedback-container__form__files">
          <FileInput placeholder="Прикрепить карточку организации" v-model="formState.fileOrgCard.value"/>
          <FileInput placeholder="Прикрепить техническое задание" v-model="formState.fileTask.value"/>
        </div>
        <TextField placeholder="Комментарий" v-model="formState.comment.value"/>
        <Checkbox v-model="formState.agreement.value">
          <span>Согласен с <Link label="Правилами обработки персональных данных" to="#" variant="bold"/></span>
        </Checkbox>
        <Button
            label="Оставить заявку"
            trailingIcon="arrow"
            width="100%"
            :disabled="isButtonDisabled"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Checkbox, FileInput, Link, TextField, Button} from '@/shared'

const formState = reactive({
  name: { value: '', required: true },
  organisation: { value: '', required: true },
  email: { value: '', required: true },
  phone: { value: '', required: true },
  comment: { value: '', required: false },
  fileOrgCard: { value: undefined as File | undefined, required: true },
  fileTask: { value: undefined as File | undefined, required: false },
  agreement: { value: false, required: true }
});

const isFieldEmpty = (field: { value: any }): boolean => {
  const { value } = field;
  if (typeof value === 'string') {
    return value.trim() === '';
  }
  if (typeof value === 'boolean') {
    return !value;
  }
  return value === undefined || value === null;

};

const isButtonDisabled = computed(() => {
  return Object.values(formState)
      .filter(field => field.required)
      .some(field => isFieldEmpty(field));
});

const $img = useImage();

const backgroundStyles = computed(() => {
  const imageUrl = $img('/images/mineral.png', {
    format: 'webp',
    quality: 80,
  })

  return {
    '--bg-image': `url('${imageUrl}')`
  }
})
</script>

<style scoped lang="scss">
.feedback-wrapper {
  position: relative;
  overflow: hidden;
  z-index: 0;


  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    opacity: 59%;

    background-image: var(--bg-image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;

    filter: brightness(0.4) contrast(1) saturate(0.1);
    transform: rotate(180deg) scale(1.5);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;

    background-image: linear-gradient(to right, #2D2E34FF 0%, #2D2E3400 9%, #2D2E3400 89%, #2D2E34FF 100%);
  }
}
.feedback-container {
  display: grid;
  grid-template-columns: 1fr;

  padding: 30px 40px ;
  gap:40px;
  text-align: center;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: 1fr 1fr;
    gap: 135px;
    padding: 46px 40px ;
    text-align: start;
  }

  @media (min-width: $breakpoint-desktop) {
    gap: 125px;
    padding: 128px 40px 60px 40px ;
  }

  &__label {
    @include headline3
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__narrow {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
    &__files {
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media (min-width: $breakpoint-tablet) {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    }
  }
}
</style>