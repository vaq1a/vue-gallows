<template>
  <div
      class="notification"
      :class="{ show: isVisible }"
  >
    <p class="notification__text">You have already entered this character</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const isVisible = ref(false)

  const open = () => isVisible.value = true

  const close = () => isVisible.value = false

  defineExpose({
    open,
    close,
  })
</script>

<style lang="scss" scoped>
  @import './AppNotification';
</style>