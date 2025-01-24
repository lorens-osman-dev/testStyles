<script setup lang="ts">

</script>

<template>
  <div class="sect">
    <div class="button">
      <h1>Primary Red</h1>
    </div>
  </div>

</template>

<style scoped>
.sect {
  --fore-color: #fe4677;
  --fore-color-rgb: 250, 70, 119;
  --bg-color: #02020e;
  --width: 13px;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Ensure the section takes full viewport height */
}

.button {
  position: relative;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Roboto", serif;
    color: var(--fore-color);
    z-index: 10;
    padding: 10px 30px;
    background: var(--bg-color);
    box-shadow: inset 0px 0px 30px 10px rgba(var(--fore-color-rgb), 0.1),
      inset 0px 0px 4px 2px rgba(var(--fore-color-rgb), 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    z-index: 5;
    background-color: rgba(var(--fore-color-rgb), 0.4);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background: linear-gradient(to right,
        var(--fore-color) var(--width),
        transparent var(--width)),
      linear-gradient(to bottom,
        var(--fore-color) var(--width),
        transparent var(--width)),
      linear-gradient(to left,
        var(--fore-color) var(--width),
        transparent var(--width)),
      linear-gradient(to top,
        var(--fore-color) var(--width),
        transparent var(--width));
    background-position: top left, top right, bottom right, bottom left;
    background-repeat: no-repeat;
    background-size: var(--width) var(--width);
  }
}
</style>
