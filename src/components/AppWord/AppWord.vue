<template>
  <div class="word">
    <p class="word__title">Result: </p>
    <span
        v-for="(item, index) in word"
        :key="index"
        class="word__letter"
    >
      {{ checkRightLetter(item) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {toRefs, unref} from "vue";

const props = defineProps({
  letters: Array<string>,
  word: String
})

const { letters, word } = toRefs(props)

const checkRightLetter = (item: string) => {
  return unref(letters).includes(item.toLowerCase()) ? item : ''
}
</script>

<style lang="scss" scoped>
  @import './AppWord';
</style>