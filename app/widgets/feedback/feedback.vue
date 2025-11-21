<template>
  <div id="feedback" class="container feedback-container" :style="backgroundStyles">
    <div class="feedback-container__content" :class="{ 'is-hidden': showMessage }">
      <div class="feedback-container__label">Свяжитесь с нами</div>
      <div class="feedback-container__form">
        <TextField placeholder="Фамилия и имя*" v-model="formState.name.value"/>
        <TextField placeholder="Название организации*" v-model="formState.organisation.value"/>
        <div class="feedback-container__form__narrow">
          <TextField placeholder="Электронная почта*" v-model="formState.email.value"/>
          <TextField placeholder="Номер телефона*" v-model="formState.phone.value" :mask="'+7 (###) ### ## ##'"/>
        </div>
        <div class="feedback-container__form__files">
          <FileInput placeholder="Прикрепить карточку организации*" v-model="formState.fileOrgCard.value"/>
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
            :disabled="isButtonDisabled || store.isSubmitting"
            @click="handleSubmit"
        />
      </div>
    </div>
    <transition name="fade">
      <div v-if="showMessage" class="feedback-container__message">
        <template v-if="store.isSuccess">
          <div class="feedback-container__message-title">Ваша заявка успешно отправлена!</div>
        </template>

        <template v-else>
          <div class="feedback-container__message-title">При отправке заявки произошла ошибка!</div>
          <Button label="Попробовать снова" @click="resetForm" width="50%" trailingIcon="arrow"/>
        </template>
      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { Checkbox, FileInput, Link, TextField, Button } from '@/shared';
import { useFeedbackStore } from '~/entities';

const store = useFeedbackStore();
const $img = useImage();

const showMessage = computed(() => store.isSuccess || !!store.error);

const getInitialState = () => ({
  name: { value: '', required: true },
  organisation: { value: '', required: true },
  email: { value: '', required: true },
  phone: { value: '', required: true },
  comment: { value: '', required: false },
  fileOrgCard: { value: undefined as File | undefined, required: true },
  fileTask: { value: undefined as File | undefined, required: false },
  agreement: { value: false, required: true }
});

const formState = reactive(getInitialState());

const isFieldEmpty = (field: { value: any }): boolean => {
  const { value } = field;
  if (typeof value === 'string') return value.trim() === '';
  if (typeof value === 'boolean') return !value;
  return value === undefined || value === null;
};

const isButtonDisabled = computed(() => {
  return Object.values(formState)
      .filter(field => field.required)
      .some(field => isFieldEmpty(field));
});

const handleSubmit = async () => {
  if (isButtonDisabled.value) return;

  const payload = {
    senderName: formState.name.value,
    organizationName: formState.organisation.value,
    email: formState.email.value,
    phoneNumber: formState.phone.value,
    comment: formState.comment.value,
    organizationCard: formState.fileOrgCard.value as File,
    specification: formState.fileTask.value
  }

  await store.submitForm(payload);
};

const resetForm = () => {
  store.resetStatus();
};

const backgroundStyles = computed(() => {
  const imageUrl = $img('/images/mineral.png', {
    format: 'webp',
    quality: 80,
  });

  return { '--bg-image': `url('${imageUrl}')` }
});
</script>

<style scoped lang="scss">
.feedback-container {
  padding: 30px 40px;
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

  @media (min-width: $breakpoint-tablet) {
    padding: 46px 40px;
  }

  @media (min-width: $breakpoint-desktop) {
    padding: 128px 40px 60px 40px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;

    transition: opacity 0.3s ease, filter 0.3s ease;

    &.is-hidden {
      opacity: 0;
      pointer-events: none;
      filter: blur(5px);
    }

    @media (min-width: $breakpoint-tablet) {
      grid-template-columns: 1fr 1fr;
      gap: 135px;
      text-align: start;
    }

    @media (min-width: $breakpoint-desktop) {
      gap: 125px;
    }
  }

  &__label { @include headline3; }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__narrow { display: flex; flex-direction: row; gap: 20px; }
    &__files {
      display: flex; flex-direction: column; gap: 10px;
      @media (min-width: $breakpoint-tablet) { display: flex; flex-direction: row; gap: 20px; }
    }
  }

  &__message {
    position: absolute;
    inset: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 20px;
    gap: 32px;

    &-title {
      @include headline3;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>