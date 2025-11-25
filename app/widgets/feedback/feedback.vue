<template>
  <div
    :style="backgroundStyles"
    class="feedback-wrapper"
  >
    <div
      id="feedback"
      class="container feedback-container"
      :style="backgroundStyles"
    >
      <div class="feedback-container__label">
        Свяжитесь с нами
      </div>
      <div class="feedback-container__form">
        <TextField
          v-model="formState.name.value"
          placeholder="Фамилия и имя"
        />
        <TextField
          v-model="formState.organisation.value"
          placeholder="Название организации"
        />
        <div class="feedback-container__form__narrow">
          <TextField
            v-model="formState.email.value"
            placeholder="Электронная почта"
          />
          <TextField
            v-model="formState.phone.value"
            placeholder="Номер телефона"
            :mask="'+7 (###) ### ## ##'"
          />
        </div>
        <div class="feedback-container__form__files">
          <FileInput
            v-model="formState.fileOrgCard.value"
            placeholder="Прикрепить карточку организации"
          />
          <FileInput
            v-model="formState.fileTask.value"
            placeholder="Прикрепить техническое задание"
          />
        </div>
        <TextField
          v-model="formState.comment.value"
          placeholder="Комментарий"
        />
        <Checkbox v-model="formState.agreement.value">
          <span>Согласен с <Link
            label="Правилами обработки персональных данных"
            to="#"
            variant="bold"
          /></span>
        </Checkbox>
        <Button
          label="Оставить заявку"
          trailing-icon="arrow"
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
    opacity: 0.59;
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
    padding: 128px 40px 60px;
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