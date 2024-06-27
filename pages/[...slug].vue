<template>
  <div class="not-found d-flex flex-column gap-4 align-items-center">
    <img
      class="not-found-img"
      :src="requireImage('404/not-found.svg')"
    />
    <h4>查無此頁面</h4>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
});
</script>
<style lang="scss" scoped>
.not-found-img {
  max-width: 560px;
}

.not-found {
  margin-top: 60px;
}
</style>
