<template>
  <svg height="250" width="200" class="figure">
    <line x1="60" y1="20" x2="140" y2="20" />
    <line x1="140" y1="20" x2="140" y2="50" />
    <line x1="60" y1="20" x2="60" y2="230" />
    <line x1="20" y1="230" x2="100" y2="230" />

    <!-- Head -->
    <circle v-if="wrongLettersLength >= 1" cx="140" cy="70" r="20" />
    <!-- Body -->
    <line v-if="wrongLettersLength >= 2" x1="140" y1="90" x2="140" y2="150" />
    <!-- Arms -->
    <line v-if="wrongLettersLength >= 3" x1="140" y1="120" x2="120" y2="100" />
    <line v-if="wrongLettersLength >= 3" x1="140" y1="120" x2="160" y2="100" />
    <!-- Legs -->
    <line v-if="wrongLettersLength >= 4" x1="140" y1="150" x2="120" y2="180" />
    <line v-if="wrongLettersLength >= 4" x1="140" y1="150" x2="160" y2="180" />
  </svg>
</template>

<script setup lang="ts">
  defineProps({
    wrongLettersLength: Number
  })
</script>

<style lang="scss" scoped>
  @import './AppFigure';
</style>