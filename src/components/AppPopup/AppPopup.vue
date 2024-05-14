<template>
  <div v-show="isVisible" class="popup-container">
    <div class="popup">
      <h2 v-if="!isLose" class="popup__title">Congratulations, you won!</h2>
      <template v-else>
        <h2 class="popup__title">You lose.</h2>
        <p class="popup__answer">name: Max</p>
      </template>
      <button
          @click="closePopup"
          class="popup__button"
      >
        Play it again
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"

  defineProps({
    isLose: Boolean
  })

  const emit = defineEmits(['onClosePopup'])

  const isVisible = ref(false)

  const open = () => isVisible.value = true

  const close = () => isVisible.value = false

  const closePopup = () => {
    emit('onClosePopup')
  }

  defineExpose({
    open,
    close,
  })
</script>

<style lang="scss" scoped>
  @import './AppPopup';
</style>