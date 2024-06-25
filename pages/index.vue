<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
});
const router = useRouter();

onMounted(() => {
  router.replace('/dashboard');
});
</script>
