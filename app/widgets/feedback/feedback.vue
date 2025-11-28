<template>
  <div
    id="feedback"
    class="feedback-container"
    :style="backgroundStyles"
  >
    <div
      class="feedback-container__content container"
      :class="{ 'is-hidden': showMessage }"
    >
      <div class="feedback-container__label">
        Свяжитесь с нами
      </div>
      <div class="feedback-container__form">
        <TextField
          v-model="formState.name.value"
          placeholder="Фамилия и имя*"
          :error="fieldErrors.name"
          @blur="validateField('name')"
        />
        <TextField
          v-model="formState.organisation.value"
          placeholder="Название организации*"
          :error="fieldErrors.organisation"
          @blur="validateField('organisation')"
        />
        <div class="feedback-container__form__narrow">
          <TextField
            v-model="formState.email.value"
            placeholder="Электронная почта*"
            :error="fieldErrors.email"
            @blur="validateField('email')"
          />
          <TextField
            v-model="formState.phone.value"
            placeholder="Номер телефона*"
            :mask="'+7 (###) ### ## ##'"
            :error="fieldErrors.phone"
            @blur="validateField('phone')"
          />
        </div>
        <div class="feedback-container__form__files">
          <FileInput
            v-model="formState.fileOrgCard.value"
            placeholder="Прикрепить карточку организации*"
            :error="fieldErrors.fileOrgCard"
            @change="validateField('fileOrgCard')"
          />
          <FileInput
            v-model="formState.fileTask.value"
            placeholder="Прикрепить техническое задание"
            :error="fieldErrors.fileTask"
            @change="validateField('fileTask')"
          />
        </div>
        <TextField
          v-model="formState.comment.value"
          placeholder="Комментарий"
          :error="fieldErrors.comment"
          @blur="validateField('comment')"
        />
        <Checkbox
          v-model="formState.agreement.value"
        >
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
          :disabled="isButtonDisabled || store.isSubmitting"
          @click="handleSubmit"
        />
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="showMessage"
        class="feedback-container__message"
      >
        <template v-if="store.isSuccess">
          <div class="feedback-container__message-title">
            Ваша заявка успешно отправлена!
          </div>
        </template>

        <template v-else>
          <div class="feedback-container__message-title">
            При отправке заявки произошла ошибка!
          </div>
          <Button
            label="Попробовать снова"
            width="50%"
            trailing-icon="arrow"
            @click="resetForm"
          />
        </template>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useFeedbackStore } from '~/entities';
import { Checkbox, FileInput, Link, TextField, Button } from '@/shared';
import type { FeedbackForm } from '~/shared/types';
import { z } from 'zod';

const store = useFeedbackStore();
const $img = useImage();

const showMessage = computed(() => store.isSuccess || !!store.error);

const formSchema = z.object({
    name: z.string().min(5, { message: 'Значение поля должно содержать не менее 5 символов' }),
    organisation: z.string().min(3, { message: 'Значение поля должно содержать не менее 3 символов' }),
    email: z.string().email({ message: 'Некорректный формат email' }),
    phone: z.string().refine((value) => {
        const digitsOnly = value.replace(/\D/g, '')
        return digitsOnly.length === 11 && digitsOnly.startsWith('7')
    }, { message: 'Номер телефона должен быть в формате +7 (XXX) XXX XX XX' }),
    comment: z.string().optional(),
    fileOrgCard: z.instanceof(File, { message: 'Необходимо прикрепить карточку организации' }),
    fileTask: z.instanceof(File).optional(),
    agreement: z.boolean().refine((value) => value, { message: 'Необходимо согласиться с правилами обработки персональных данных' })
})

const getInitialState = () => ({
    name: { value: '' },
    organisation: { value: '' },
    email: { value: '' },
    phone: { value: '' },
    comment: { value: '' },
    fileOrgCard: { value: undefined as File | undefined },
    fileTask: { value: undefined as File | undefined },
    agreement: { value: false }
});

const formState = reactive(getInitialState());

const fieldErrors = reactive<Record<keyof typeof formState, string | undefined>>({
    name: undefined,
    organisation: undefined,
    email: undefined,
    phone: undefined,
    comment: undefined,
    fileOrgCard: undefined,
    fileTask: undefined,
    agreement: undefined,
})

const validateField = (fieldName: keyof typeof formState) => {
    try {
        const fieldValue = formState[fieldName].value
        const fieldSchema = formSchema.shape[fieldName]
    
        if (!fieldSchema) return
    
        fieldSchema.parse(fieldValue)
        fieldErrors[fieldName] = undefined
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessage = error.issues[0]?.message || 'Ошибка валидации'
            fieldErrors[fieldName] = errorMessage
        }
    }
}

const isFieldEmpty = (field: { value: any }): boolean => {
    const { value } = field;
    if (typeof value === 'string') return value.trim() === '';
    if (typeof value === 'boolean') return !value;
    return value === undefined || value === null;
};

const isButtonDisabled = computed(() => {
    const requiredFields = ['name', 'organisation', 'email', 'phone', 'fileOrgCard', 'agreement'] as const
    return requiredFields.some(fieldName => isFieldEmpty(formState[fieldName]))
});

const handleSubmit = async () => {
    if (isButtonDisabled.value) return;

    const payload: FeedbackForm = {
        senderName: formState.name.value,
        organizationName: formState.organisation.value,
        email: formState.email.value,
        phoneNumber: formState.phone.value,
        comment: formState.comment.value,
        organizationCard: formState.fileOrgCard.value as File,
        specification: formState.fileTask.value
    }

    await store.submitForm(payload);

    setTimeout(resetForm, 5000)
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
  padding: 30px 0;
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

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: 1fr 1fr;
    gap: 135px;
    padding: 46px 40px ;
    text-align: start;
  }

  @media (min-width: $breakpoint-desktop) {
    padding: 128px 40px 60px;
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

  &__label { 
    @include headline3; 
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
</style>