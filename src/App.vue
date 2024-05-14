<script setup lang="ts">
import AppNotification from "./components/AppNotification/AppNotification.vue";
import AppPopup from "./components/AppPopup/AppPopup.vue";
import AppWrongLetters from "./components/AppWrongLetters/AppWrongLetters.vue";
import AppHeader from "./components/AppHeader/AppHeader.vue";
import AppFigure from "./components/AppFigure/AppFigure.vue";
import AppWord from "./components/AppWord/AppWord.vue";
import {useGame} from "./composables/useGame";

const {
  isLose,
  targetWord,
  wrongLetters,
  wrongLettersLength,
  rightLetters,
  relaunchGame,
  popupRef,
  notificationRef,
} = useGame()
</script>

<template>
  <AppHeader />
  <div class="game-container">
    <AppFigure :wrongLettersLength="wrongLettersLength" />
    <AppWrongLetters :letters="wrongLetters" />
    <AppWord
        :letters="rightLetters"
        :word="targetWord"
    />
  </div>
  <AppPopup
    ref="popupRef"
    :isLose="isLose"
    @onClosePopup="relaunchGame"
  />
  <AppNotification ref="notificationRef" />
</template>

<style lang="scss" scoped>
  @import './App';
</style>
