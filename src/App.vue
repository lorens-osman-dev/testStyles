<script setup lang="ts">
import BUT from "./components/buttton.vue";
import BU from "./components/btnred.vue";
</script>

<template>
  <div class="wrapper">

    <BUT></BUT> <BU></BU> <BUT></BUT> 
  </div>
</template>

<style scoped>
.wrapper{

  display: flex;
  flex-direction: column;
  background-color: #0e0e0e;
  align-items: center;
  .sect{
    margin-top: 15px;
    height: 90vh;
    width: 90vw;
  }
}
</style>
