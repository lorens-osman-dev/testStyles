<script setup lang="ts">

</script>

<template>
  <div class="sect">
    <div class="con">
      <div class="txt"><span class="sp">Squircle</span></div>
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
    background-image: url(../assets/4vev8n.jpg);
    background-size: covera;
    width: 420px;
    height: 350px;
    /*//- Squircle */
    mask-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 50 C 0 0, 0 0, 50 0 S 100 0, 100 50 S 100 100, 50 100 S 0 100, 0 50' fill='white'/%3E%3C/svg%3E");
    mask-size: 100% 100%;

    .sp {
      transition: 700ms;
    }

    &:hover {
      &>.sp {
        transform: scale(3);
      }
    }
  }

}
</style>
