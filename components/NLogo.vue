<template>
  <img
    class="n-logo"
    :src="requireImage(`site/logo-${logoType}.svg`)"
  />
</template>
<script setup lang="ts">
interface NLogoProps {
  logoType?: 'light' | 'dark';
}

withDefaults(defineProps<NLogoProps>(), {
  logoType: 'dark'
});
</script>
<style lang="scss" scoped>
.n-logo {
  max-width: 198px;
  height: 30px;
}
</style>
