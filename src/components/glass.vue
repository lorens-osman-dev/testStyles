<script setup lang="ts">

</script>

<template>
  <div class="sect">
    <div class="con">
      <div class="txt"><span class="sp">hi1</span></div>
      <div class="txt"><span class="sp">hi2</span></div>
      <div class="txt"><span class="sp">hi3</span></div>
    </div>
  </div>

</template>

<style scoped>
.sect {

  background-color: #02020e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto !important;
  padding: 30px;
  /* Ensure the section takes full viewport height */
}

.con {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .txt {
    margin-top: 15px;
    transition: 700ms;
    font-family: "Roboto", serif;
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 420px;
    height: 350px;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    .sp {
      transition: 700ms;
    }

    &:hover {
      &>.sp {
        transform: scale(3);
      }

      &::before {
        animation-play-state: paused;
      }
    }

    &::before {
      content: " ";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(/src/assets/IMG.jpg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -10;
      filter: blur(25px);
      animation: rotate 30s infinite linear;
      /* Adds a subtle blur to the background image */
    }

    &:nth-child(2)::before {
      background-image: url(../assets/4vev8n.jpg);
    }

    &:nth-child(3)::before {
      background-image: url(../assets/0qo2r4.jpg);
    }
  }

}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
