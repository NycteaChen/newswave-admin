<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();

onMounted(() => {
  router.replace('/dashboard');
});
</script>
