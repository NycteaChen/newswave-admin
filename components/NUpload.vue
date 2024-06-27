<template>
  <div>
    <n-input
      v-model:value="fileName"
      v-bind="props"
      type="file"
      :disabled="uploadLoading"
      :accept="accept"
      @change="handleFileUpload"
    />
    <n-loading
      v-if="previewImageUrl"
      :loading="uploadLoading"
    >
      <img
        class="mt-3 rounded-2"
        :src="previewImageUrl"
      />
    </n-loading>
  </div>
</template>
<script lang="ts" setup>
import type { NInputProps } from '@/components/NInput.vue';

const uploadUrl = defineModel('file', { type: String, required: true, default: '' });

const props = withDefaults(defineProps<NInputProps>(), {
  id: 'nUpload',
  accept: '.jpg, .png'
});

const { uploadImage } = useAdminApi();

const fileName = ref<string>('');
const uploadLoading = ref<boolean>(false);
const previewImageUrl = ref<string>('');

const handleFileUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  const maxSizeInMB = 5;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

  if (file.size > maxSizeInBytes) {
    fileName.value = '';
    showToast({
      id: 'file-too-large',
      message: `文件大小不可超過 ${maxSizeInMB}MB`,
      icon: 'icon/warning.svg'
    });
    return;
  }

  previewImageUrl.value = URL.createObjectURL(file);

  uploadLoading.value = true;

  try {
    const { status, data, message } = await uploadImage(file);
    if (status && data && data?.imgUrl) {
      const { imgUrl } = data;
      uploadUrl.value = imgUrl;

      showToast({
        id: 'upload-success',
        message
      });
    } else {
      fileName.value = '';
      uploadUrl.value = '';
      showToast({
        id: 'upload-fail',
        message,
        icon: 'icon/warning.svg'
      });
    }
  } catch (error: any) {
    fileName.value = '';
    uploadUrl.value = '';
    showToast({
      id: 'upload-fail',
      message: error.response?.data?.message || '上傳失敗，請重試',
      icon: 'icon/warning.svg'
    });
  }

  uploadLoading.value = false;
};

watch(
  () => uploadUrl.value,
  (val) => {
    if (!val) {
      previewImageUrl.value = '';
      fileName.value = '';
    }
  }
);
</script>
<style lang="scss" scoped>
::v-deep(.n-loading-container) {
  &.show {
    min-height: unset;
  }
}
</style>
