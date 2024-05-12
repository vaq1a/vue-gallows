<script setup>
import AppNotification from "./components/AppNotification/AppNotification.vue";
import AppPopup from "./components/AppPopup/AppPopup.vue";
import AppWrongLetters from "./components/AppWrongLetters/AppWrongLetters.vue";
import AppHeader from "./components/AppHeader/AppHeader.vue";
import AppFigure from "./components/AppFigure/AppFigure.vue";
import AppWord from "./components/AppWord/AppWord.vue";
</script>

<template>
  <AppHeader />
  <div class="game-container">
    <AppFigure />
    <AppWrongLetters />
    <AppWord />
  </div>
<!--  <AppPopup />-->
<!--  <AppNotification />-->
</template>

<style lang="scss" scoped>
  @import './App';
</style>
