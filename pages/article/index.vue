<template>
  <section class="add-article">
    <h6 class="mb-4">新增一則新聞文章</h6>
    <form
      class="row gy-4"
      novalidate
      :class="{ 'was-invalidated': isInvalidated }"
    >
      <div
        v-for="field in fieldList"
        :key="field.value"
        :class="field.col"
      >
        <div class="d-flex flex-column">
          <label class="form-label">
            {{ field.label }}
            <span class="text-accent">*</span>
            <span
              v-if="field.desc"
              class="text-muted fs-sm ms-2"
              >{{ field.desc }}</span
            >
          </label>
          <n-select
            v-if="field.type === 'select'"
            v-model:selected="formState[field.value]"
            :placeholder="`請選擇${field.label}`"
            :options="field.options || []"
          />
          <textarea
            v-else-if="field.type === 'textarea'"
            v-model="formState[field.value]"
            class="form-control"
            :placeholder="`請輸入${field.label}`"
            :class="{ 'invalid-field': errorMessage[field.value] }"
          />
          <n-upload
            v-else-if="field.type === 'file'"
            v-model:file="formState[field.value]"
            :has-error="!!errorMessage[field.value]"
          />
          <n-input
            v-else
            :id="field.value"
            v-model:value="formState[field.value]"
            :placeholder="`請輸入${field.label}`"
            :has-error="!!errorMessage[field.value]"
            :type="field.type"
          />
          <div
            v-if="errorMessage[field.value]"
            class="invalid-feedback"
          >
            {{ errorMessage[field.value] }}
          </div>
        </div>
      </div>
      <div class="col-6 d-flex gap-3">
        <n-button
          text="新增"
          class="w-100"
          :loading="btnLoading"
          @click="submit"
        />
        <n-button
          text="清除"
          class="w-100"
          color="secondary"
          @click="reset"
        />
      </div>
    </form>
  </section>
</template>
<script setup lang="ts">
import type { NSelectProps } from '@/components/NSelect.vue';

definePageMeta({
  middleware: 'auth',
  title: '文章管理'
});

const { createNewsArticle } = useAdminApi();
const { emptyValidator } = useValidator();
const config = useRuntimeConfig();

const btnLoading = ref<boolean>(false);
const isInvalidated = ref<boolean>(false);

const selectOptions = computed(() =>
  newsCategory.map((e) => ({
    label: e,
    value: e
  }))
);

interface FieldValueType {
  title: string;
  editor: string;
  content: string;
  image: string;
  imageDescribe: string;
  topic: string;
}

interface FieldType {
  label: string;
  value: keyof FieldValueType;
  type: string;
  options?: NSelectProps['options'];
  col?: string;
  accept?: string;
  desc?: string;
}

const initState: FieldValueType = {
  title: '',
  editor: 'NewsWave',
  content: '',
  image: '',
  imageDescribe: '',
  topic: newsCategory[0]
};
const fieldList = computed(
  () =>
    [
      {
        label: '標題',
        value: 'title',
        type: 'text',
        col: 'col-7'
      },
      {
        label: '作者',
        value: 'editor',
        type: 'text',
        col: 'col-7'
      },
      {
        label: '新聞主題',
        value: 'topic',
        type: 'select',
        options: selectOptions.value,
        col: 'col-7',
        desc: '系統將推播通知給對此主題感興趣的用戶'
      },
      {
        label: '圖片',
        value: 'image',
        type: 'file',
        accept: '.jpg, .png',
        col: 'col-6'
      },
      {
        label: '圖片說明',
        value: 'imageDescribe',
        type: 'text',
        col: 'col-6'
      },
      {
        label: '內容',
        value: 'content',
        type: 'textarea',
        col: 'col-12'
      }
    ] as FieldType[]
);

const formState = reactive<FieldValueType>({ ...initState });

const errorMessage = reactive<FieldValueType>({
  title: '',
  editor: '',
  content: '',
  topic: '',
  image: '',
  imageDescribe: ''
});

const checkValidityHandler = (): boolean => {
  let passBool: boolean = true;

  Object.entries(formState).forEach(([key, value]) => {
    const { pass, message } = emptyValidator(value);

    if (!pass) {
      passBool = pass;
    }

    errorMessage[key as keyof FieldValueType] = pass ? '' : message || '';
  });

  return passBool;
};

const clearValidator = () => {
  isInvalidated.value = false;
};

const reset = () => {
  Object.assign(formState, initState);
  clearValidator();
};

const submit = async () => {
  if (!checkValidityHandler()) {
    isInvalidated.value = true;
    return;
  }

  const params = {
    ...formState,
    source: {
      name: 'NewsWave',
      url: config.public.frontEndUrl
    }
  };

  btnLoading.value = true;

  const { status, message } = await createNewsArticle(params);

  showToast({
    id: `add-${status}`,
    message
  });
  if (status) {
    reset();
  }

  btnLoading.value = false;
};
</script>
<style lang="scss" scoped>
.add-article {
  max-width: 926px;

  textarea {
    min-height: 250px;
    resize: none;
  }
}
</style>
