<template>
  <div class="wrong-letters">
    <p class="wrong-letters__title">Mistakes: </p>
    <span
        v-for="(item, index) in letters"
        :key="item"
        class="wrong-letters__item"
    >
      <template v-if="letters.length === index + 1">
        {{ item }}
      </template>
      <template v-else>
        {{ item }},
      </template>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  letters: Array<string>
})
</script>

<style lang="scss" scoped>
  @import './AppWrongLetters';
</style>