<script setup lang="ts">
import RED from "./components/RED_Button.vue";
import simple from "./components/simple_button.vue";
</script>

<template>
  <div class="wrapper">

    <RED />
    <simple />

  </div>
</template>

<style scoped>
.wrapper {

  display: flex;
  flex-direction: column;
  background-color: #0e0e0e;
  align-items: center;

  .sect {
    margin-top: 15px;
    height: 90vh;
    width: 90vw;
  }
}
</style>
